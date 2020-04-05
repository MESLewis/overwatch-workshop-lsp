import {
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams
} from 'vscode-languageserver'

import {
	actionKw
} from './languageData/actions';

export enum OwwType {
	void,
	boolean,
	vector,
	player,
}

export interface StringIndexed {
	[key: string]: string;
}

export interface OwwSettings {
	main: OwwSettingsEntry;
	lobby: OwwSettingsEntry;
	gamemodes: OwwSettingsEntry;
	heroes: any;
}

export interface OwwSettingsEntry extends OwwGuid, enUS {
	values: any;
}

export interface OwwMap extends OwwGuid, enUS{
	gamemodes: string[];
}

export interface OwwArgs {
	name: string;
	description: string;
	type: string;
	default: string;
}

export interface OwwKeywords extends OwwGuid, enUS {
}

export interface OwwFunction extends enUS {
	args?: OwwArgs[];
	resultType: OwwType;
}

export interface OwwActions extends OwwGuid, enUS {
	description: string;
	args?: OwwArgs[];
}

export interface enUS {
	enUS: string;
}

export interface OwwGuid {
	guid: string;
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

export function generateSemanticTokens(text: string) {
	//TODO
}