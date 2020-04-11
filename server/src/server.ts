/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	RequestType,
	TextDocumentIdentifier,
	Proposed
} from 'vscode-languageserver';

import {
	SemanticTokenModifiers,
	SemanticTokenTypes,
	SemanticTokensParams,
	SemanticTokensLegend,
	SemanticTokensServerCapabilities,
	SemanticTokensClientCapabilities
} from 'vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {
	generateCompletionItems,
	generateSemanticTokens
} from './overwatch-script';
import { parse } from './parser';
import { Node, isToken, DefinitionNode, DocumentNode } from './Node';
import { SK, Token, Lexer, getTextForToken } from './lexer';
import { SemanticTokensBuilder } from 'vscode-languageserver/lib/sematicTokens.proposed';
import { getPlayerVariables, getGlobalVariables, getSubroutineNames } from './services/documentVariables';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we will fall back using global settings
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult & { capabilities: SemanticTokensServerCapabilities }= {
		capabilities: {
			textDocumentSync: {
				openClose: true,
				change: TextDocumentSyncKind.Incremental
			},
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true
			},
			semanticTokensProvider: {
				legend: legend
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

let tokenBuilders: Map<string, SemanticTokensBuilder> = new Map();
function getTokenBuilder(document: TextDocument): SemanticTokensBuilder {
	let result = tokenBuilders.get(document.uri);
	if (result !== undefined) {
		return result;
	}
	result = new SemanticTokensBuilder();
	tokenBuilders.set(document.uri, result);
	return result;
}


const legend: SemanticTokensLegend = {
	tokenTypes: [
		'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
		'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
		'member', 'macro', 'variable', 'parameter', 'property', 'label' ],
	tokenModifiers: [ 'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated', 'modification', 'async' ]
};

function SKToSemanticLegend(sk: SK): number | undefined {
	//TODO probably base this on Nodes more than tokens. But its really only needed for defined variables
	switch(sk) {
		// case SK.ActionsKeyword:
			// return legend.tokenTypes.indexOf('keyword');
		// case SK.StringLiteralToken:
			// return legend.tokenTypes.indexOf('string');
		default:
			return undefined;
	}
}

function buildTokens(node: Node, builder: SemanticTokensBuilder, document: TextDocument, regexp: RegExp) {
	if(node.allNodeAndToken === undefined) {
		return;
	}

	for (let entry of node.allNodeAndToken) {
		if(entry === undefined) {
			continue;
		}
		if(!(entry instanceof Node)) {
			let tokenType = SKToSemanticLegend(entry.kind);
			if(tokenType === undefined) {
				if(regexp.test(getTextForToken(entry, document.getText()))) {
					tokenType = 16; //TODO this is hard coded.
				}
			}
			//Only push mapped types
			if(tokenType !== undefined) {
				const position = document.positionAt(entry.start);
				const tokenModifier = 0;
				builder.push(position.line, position.character, entry.length - (entry.start - entry.fullStart), tokenType, tokenModifier);
			}
		} else {
			buildTokens(entry, builder, document, regexp);
		}
	}
}


connection.languages.semanticTokens.on((semanticTokensParams: SemanticTokensParams) => {
	console.log('Server is finding tokens');
	const document = documents.get(semanticTokensParams.textDocument.uri);
	if (document === undefined) {
		return {
			data: []
		};
	}
	const builder = getTokenBuilder(document);
	//TODO store wdoc somewhere instead of recalculating
	let wdoc: DocumentNode = parse(document.getText());
	let globalVars: [string, Token<SK>][] = tokensToStringTokens(getGlobalVariables(wdoc), wdoc.lexer);
	let playerVars: [string, Token<SK>][] = tokensToStringTokens(getPlayerVariables(wdoc), wdoc.lexer);
	let subroutineNames: [string, Token<SK>][] = tokensToStringTokens(getSubroutineNames(wdoc), wdoc.lexer);

	let allStrings: string[] = extractStrings(globalVars).concat(extractStrings(playerVars)).concat(extractStrings(subroutineNames));

	let regexp: RegExp = new RegExp(allStrings.join('|'), 'g');


	buildTokens(wdoc, builder, document, regexp);
	return builder.build();
});

function tokensToStringTokens(tokens: Token<SK>[], lexer: Lexer): [string, Token<SK>][] {
	return tokens.map<[string, Token<SK>]>(function (value: Token<SK>): [string, Token<SK>]{
		return [lexer.getTextForToken(value), value];
	});
}

function extractStrings(stringTuples: [string, any][]): string[] {
	return stringTuples.map<string>(function (value: [string, any]): string {
		return value[0];
	});
}

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	//TODO
	// documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	connection.console.log('Starting parsing');
	let wdoc: Node = parse(change.document.getText());
	// console.log(wdoc);
	connection.console.log('Finished parsing');

	validateTextDocument(change.document, wdoc);
});

async function validateTextDocument(textDocument: TextDocument, rootNode: Node): Promise<void> {
	// In this simple example we get the settings for every validate run.
	let settings = await getDocumentSettings(textDocument.uri);

	// The validator creates diagnostics for all uppercase words length 2 and more
	let text = textDocument.getText();
	let pattern = /\b[A-Z]{2,}\b/g;
	let m: RegExpExecArray | null;

	let problems = 0;
	let diagnostics: Diagnostic[] = [];

	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		problems++;
		let diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(m.index),
				end: textDocument.positionAt(m.index + m[0].length)
			},
			message: `${m[0]} is all uppercase.`,
			source: 'ex'
		};
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Spelling matters'
				},
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Particularly for names'
				}
			];
		}
		diagnostics.push(diagnostic);
	}

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		return generateCompletionItems(_textDocumentPosition);
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
// TODO Implement this
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
