import { NodeOrToken } from './Node';
import { Context } from './parser';

const matcher: RegExp = /(?<leading>\s*)(?<content>(?:[\w\-%\d\.]|[\s](?![\s:'{}();,]))+|[:'{}();,]|[=><!]{1,2}|".*")/g;

export const enum SK {
	Unknown,
	OpenBrace,
	CloseBrace,
	OpenParen,
	CloseParen,
	ColonToken,
	SemicolonToken,
	CommaToken,
	StringLiteralToken,
	DisabledKeyword,
	SettingsKeyword,
	MainKeyword,
	LobbyKeyword,
	ModesKeyword,
	VariablesKeyword,
	GlobalKeyword,
	PlayerKeyword,
	SubroutinesKeyword,
	RuleKeyword,
	EventKeyword,
	ConditionsKeyword,
	ActionsKeyword,
	NumberToken,
	ArithmeticOperator,
	WordToken,
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

//I guess I'm parsing everything twice doing it this way? Probably not efficient.
const kindStrings: [SK, string | RegExp][] = [
	[SK.OpenBrace, 			'{'],
	[SK.CloseBrace, 			'}'],
	[SK.OpenParen, 			'('],
	[SK.CloseParen, 			')'],
	[SK.ColonToken, 				':'],
	[SK.SemicolonToken, 			';'],
	[SK.CommaToken, 				','],
	[SK.StringLiteralToken,			new RegExp('^".*"$')],
	[SK.DisabledKeyword,			'disabled'],
	[SK.SettingsKeyword,			'settings'],
	[SK.MainKeyword,			'main'],
	[SK.LobbyKeyword,			'lobby'],
	[SK.ModesKeyword,			'modes'],
	[SK.VariablesKeyword,			'variables'],
	[SK.GlobalKeyword,			'global'],
	[SK.PlayerKeyword,			'player'],
	[SK.SubroutinesKeyword,			'subroutines'],
	[SK.RuleKeyword,			'rule'],
	[SK.EventKeyword,			'event'],
	[SK.ConditionsKeyword,			'conditions'],
	[SK.ActionsKeyword,			'actions'],
	[SK.WordToken,				new RegExp('^[a-zA-z]\\w+$')],
	[SK.NumberToken, 				new RegExp('^-?[0-9]{1,}(\.[0-9]+)?$')],
	[SK.ArithmeticOperator, 	new RegExp('^[=><!]{1,2}$')],
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
	// private context: Context = Context.root;

	constructor(text: string) {
		this.text = text;
	}

	public getNextToken(): Token<SK> {
		let nextMatch: RegExpExecArray | null = matcher.exec(this.text);
		if (nextMatch !== null) {
			let nextToken: Token<any> = {
				kind: this.determineKind(nextMatch),
				fullStart: nextMatch.index,
				start: nextMatch.index + (nextMatch.groups?.leading.length || 0),
				length: nextMatch[0].length
			};
			nextToken.debugText = this.getTextForToken(nextToken);
			return nextToken;
		} else {
			let eofToken: Token<any> = {
				kind: SK.EndOfFileToken,
				fullStart: 0,
				start: 0,
				length: 1
			};
			eofToken.debugText = '';
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

		for(let i = 0; i < kindStrings.length; i++) {
			let kindTest: [SK, string | RegExp] = kindStrings[i];
			if((kindTest[1] as RegExp).test) {
				if((kindTest[1] as RegExp).test(content)) {
					return kindTest[0];
				}
			} else {
				if((kindTest[1] as string).indexOf(content) === 0) {
					return kindTest[0];
				}
			}
		}
		return SK.Unknown;
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