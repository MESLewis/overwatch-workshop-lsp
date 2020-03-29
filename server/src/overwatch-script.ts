import {
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams
} from 'vscode-languageserver'

import {
	actionKw
} from './actions';
import { ClientRequestArgs } from 'http';

export interface OwwArgs {
	name: string;
	description: string;
	type: string;
	default: string;
}

export interface OwwActions {
	description: string;
	args?: OwwArgs[];
	guid: string;
	enUS: string;
}

export function generateCompletionItems(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] {
	let completionItems: CompletionItem[] = new Array();

	actionKw.forEach(element => {
		completionItems.push({
			label: element.enUS,
			kind: CompletionItemKind.Text,
			detail: element.description
		});
	});
	return completionItems;
}