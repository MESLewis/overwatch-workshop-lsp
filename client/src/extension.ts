/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import {
	workspace,
	window,
	ExtensionContext,
	SemanticTokens,
	SemanticTokensLegend,
	DocumentSemanticTokensProvider,
	DocumentRangeSemanticTokensProvider,
	commands,
	OutputChannel,
	CodeAction
} from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	TextDocumentIdentifier,
	Range as LspRange,
	RequestType,
	RequestType0
} from 'vscode-languageclient';


interface SemanticTokenParams {
	textDocument: TextDocumentIdentifier;
	ranges?: LspRange[];
}

namespace SemanticTokenRequest {
	export const type: RequestType<SemanticTokenParams, number[] | null, any, any> = new RequestType('oww/semanticTokens');
}

namespace SemanticTokenLegendRequest {
	export const type: RequestType0<{ types: string[]; modifiers: string[] } | null, any, any> = new RequestType0('oww/semanticTokenLegend');
}

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	let toDispose = context.subscriptions;

	// The server is implemented in node
	let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'oww' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		},
		traceOutputChannel: window.createOutputChannel('LSP Log'),
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	let disposable = client.start();
	toDispose.push(disposable);

	client.onReady().then(() => {
		client.sendRequest(SemanticTokenLegendRequest.type).then(legend => {
			if (legend) {
				const provider: DocumentSemanticTokensProvider & DocumentRangeSemanticTokensProvider = {
					provideDocumentSemanticTokens(doc) {
						const params: SemanticTokenParams = {
							textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(doc),
						};
						return client.sendRequest(SemanticTokenRequest.type, params).then(data => {
							return data && new SemanticTokens(new Uint32Array(data));
						});
					},
					provideDocumentRangeSemanticTokens(doc, range) {
						const params: SemanticTokenParams = {
							textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(doc),
							ranges: [client.code2ProtocolConverter.asRange(range)]
						};
						return client.sendRequest(SemanticTokenRequest.type, params).then(data => {
							return data && new SemanticTokens(new Uint32Array(data));
						})
					}
				};
				// toDispose.push(languages.registerDocumentSemanticTokensProvider(documentSelector, provider, new SemanticTokensLegend(legend.types, legend.modifiers)));
			}
		});
	});
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
