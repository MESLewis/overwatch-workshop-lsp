import { lexer } from './parser';

const matcher: RegExp = /(?<leading>\s*)(?<content>(?:[\w\-%\d\.]|[\s](?![\s:"{}();,]))+|[:"{}();,]|[=><!]{1,2})/g

export const enum SK {
	Unknown,
	OpenBrace,
	CloseBrace,
	OpenParen,
	CloseParen,
	ColonToken,
	SemicolonToken,
	CommaToken,
	DoubleQuoteToken,
	DisabledKeyword,
	SettingsKeyword,
	MainKeyword,
	LobbyKeyword,
	ModesKeyword,
	VariablesKeyword,
	SubroutinesKeyword,
	RuleKeyword,
	EventKeyword,
	ConditionsKeyword,
	ActionsKeyword,
	WORDS, //All other words
	NumberToken,
	ArithmeticOperator,
	EndOfFileToken,
	InvalidToken
}

export const BlockHeader = [
	SK.SettingsKeyword,
	SK.MainKeyword,
	SK.LobbyKeyword,
	SK.ModesKeyword,
	SK.VariablesKeyword,
	SK.SubroutinesKeyword,
	SK.RuleKeyword,
	SK.EventKeyword,
	SK.ConditionsKeyword,
	SK.ActionsKeyword,
];

const kindStrings: [SK, string | RegExp][] = [
	[SK.OpenBrace, 			"{"],
	[SK.CloseBrace, 			"}"],
	[SK.OpenParen, 			"("],
	[SK.CloseParen, 			")"],
	[SK.ColonToken, 				":"],
	[SK.SemicolonToken, 			";"],
	[SK.CommaToken, 				","],
	[SK.DoubleQuoteToken,			"\""],
	[SK.DisabledKeyword,			"disabled"],
	[SK.SettingsKeyword,			"settings"],
	[SK.MainKeyword,			"main"],
	[SK.LobbyKeyword,			"lobby"],
	[SK.ModesKeyword,			"modes"],
	[SK.VariablesKeyword,			"variables"],
	[SK.SubroutinesKeyword,			"subroutines"],
	[SK.RuleKeyword,			"rule"],
	[SK.EventKeyword,			"event"],
	[SK.ConditionsKeyword,			"conditions"],
	[SK.ActionsKeyword,			"actions"],
	[SK.NumberToken, 				new RegExp("\\d")],
	[SK.ArithmeticOperator, 	new RegExp("[=><!]{1,2}")],
];

export interface Token<TKind> {
	kind: TKind;
	fullStart: number; //Start of the token, including leading white space
	length: number; //length of the token from fullStart
	start: number; //Start of the token, excluding leading white space
	debugText?: string;
}

export class TokenObject<TKind> implements Token<TKind> {
	kind: TKind;
	fullStart: number;
	length: number;
	start: number;
	debugText?: string;

	constructor(kind: TKind, fullStart: number, length: number, start:number) {
		this.kind = kind;
		this.fullStart = fullStart;
		this.length = length;
		this.start = start;
	}
}

export class MissingTokenObject<TKind> extends TokenObject<TKind> {
	constructor(kind: TKind, fullStart: number) {
		super(kind, fullStart, 0, fullStart);
	}
}

export class Lexer {
	private text: string;

	constructor(text: string) {
		this.text = text
	}

	public getNextToken(): Token<SK> {
		let nextMatch: RegExpExecArray | null = matcher.exec(this.text);
		if (nextMatch !== null) {
			let nextToken: Token<any> = {
				kind: this.determineKind(nextMatch),
				fullStart: nextMatch.index,
				start: nextMatch.index + (nextMatch.groups?.leading.length || 0),
				length: nextMatch[0].length
			}
			nextToken.debugText = lexer.getTextForToken(nextToken);
			return nextToken;
		} else {
			let eofToken: Token<any> = {
				kind: SK.EndOfFileToken,
				fullStart: 0,
				start: 0,
				length: 1
			}
			eofToken.debugText = "";
			return eofToken;
		}
	}

	private determineKind(match: RegExpMatchArray): SK {
		if(match.index === undefined) {
			return SK.InvalidToken;
		}
		let start = match.index + (match.groups?.leading.length || 0);
		let length = match.groups?.content.length || 0;
		let content = this.text.slice(start, start + length);

		let retKind = SK.InvalidToken;

		kindStrings.forEach((match: [SK, string | RegExp], index: number, array: [SK, string | RegExp][]) => {
			if((match[1] as RegExp).test) {
				if((match[1] as RegExp).test(content)) {
					retKind = match[0];
					return;
				}
			} else {
				if((match[1] as string).indexOf(content) == 0) {
					retKind = match[0];
					return;
				}
			}
		});
		
		return retKind;
	}

	/**
	 * Returns a string of all whitespace preceding token
	 * @param token 
	 */
	public getLeadingForToken(token: Token<any>): string {
		return this.text.slice(token.fullStart, token.start);
	}

	/**
	 * Returns getLeadingForToken + getTextForToken
	 * @param token 
	 */
	public getFullTextForToken(token: Token<any>): string {
		return this.text.slice(token.fullStart, token.fullStart + token.length);
	}

	/**
	 * Returns a string of characters from the first non-whitespace character
	 * to the end of the token
	 * @param token 
	 */
	public getTextForToken(token: Token<any>): string {
		return this.text.slice(token.start, token.fullStart + token.length);
	}

}