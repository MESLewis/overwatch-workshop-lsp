const matcher: RegExp = /(?<leading>\s*)(?<content>(?:[\w\-%\d\.]|[\s](?![\s:"{}();,]))+|[:"{}();,]|[=><!]{1,2})/g

export enum SyntaxKind {
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
	WORDS, //All other words
	NumberToken,
	ArithmeticOperator,
	EndOfFileToken,
	InvalidToken
}

export type BlockHeader = 
	| SyntaxKind.SettingsKeyword
	| SyntaxKind.MainKeyword
	| SyntaxKind.LobbyKeyword
	| SyntaxKind.ModesKeyword
	| SyntaxKind.VariablesKeyword
	| SyntaxKind.SubroutinesKeyword
	| SyntaxKind.RuleKeyword
	;


const kindStrings: [SyntaxKind, string | RegExp][] = [
	[SyntaxKind.OpenBrace, 			"{"],
	[SyntaxKind.CloseBrace, 			"}"],
	[SyntaxKind.OpenParen, 			"("],
	[SyntaxKind.CloseParen, 			")"],
	[SyntaxKind.ColonToken, 				":"],
	[SyntaxKind.SemicolonToken, 			";"],
	[SyntaxKind.CommaToken, 				","],
	[SyntaxKind.DoubleQuoteToken,			"\""],
	[SyntaxKind.DisabledKeyword,			"disabled"],
	[SyntaxKind.SettingsKeyword,			"settings"],
	[SyntaxKind.MainKeyword,			"main"],
	[SyntaxKind.LobbyKeyword,			"lobby"],
	[SyntaxKind.ModesKeyword,			"modes"],
	[SyntaxKind.VariablesKeyword,			"variables"],
	[SyntaxKind.SubroutinesKeyword,			"subroutines"],
	[SyntaxKind.RuleKeyword,			"rule"],
	// [SyntaxKind.WORDS, 				new RegExp("\\w")],
	[SyntaxKind.NumberToken, 				new RegExp("\\d")],
	[SyntaxKind.ArithmeticOperator, 	new RegExp("[=><!]{1,2}")],
];

export interface Token<TKind extends SyntaxKind> {
	kind: TKind;
	fullStart: number; //Start of the token, including leading white space
	length: number; //length of the token from fullStart
	start: number; //Start of the token, excluding leading white space
}

export class TokenObject<TKind extends SyntaxKind> implements Token<TKind> {
	kind: TKind;
	fullStart: number;
	length: number;
	start: number;

	constructor(kind: TKind, fullStart: number, length: number, start:number) {
		this.kind = kind;
		this.fullStart = fullStart;
		this.length = length;
		this.start = start;
	}

}

export class MissingTokenObject<TKind extends SyntaxKind> extends TokenObject<TKind> {
	constructor(kind: TKind, fullStart: number) {
		super(kind, fullStart, 0, fullStart);
	}
}

export class Lexer {
	private text: string;

	constructor(text: string) {
		this.text = text
	}

	public getNextToken(): Token<SyntaxKind> {
		let nextMatch: RegExpExecArray | null = matcher.exec(this.text);
		if (nextMatch !== null) {
			let nextToken: Token<any> = {
				kind: this.determineKind(nextMatch),
				fullStart: nextMatch.index,
				start: nextMatch.index + (nextMatch.groups?.leading.length || 0),
				length: nextMatch[0].length
			}
			return nextToken;
		} else {
			let eofToken: Token<any> = {
				kind: SyntaxKind.EndOfFileToken,
				fullStart: 0,
				start: 0,
				length: 1

			}
			return eofToken;
		}
	}

	private determineKind(match: RegExpMatchArray): SyntaxKind {
		if(match.index === undefined) {
			return SyntaxKind.InvalidToken;
		}
		let start = match.index + (match.groups?.leading.length || 0);
		let length = match.groups?.content.length || 0;
		let content = this.text.slice(start, start + length);

		let retKind = SyntaxKind.InvalidToken;

		kindStrings.forEach((match: [SyntaxKind, string | RegExp], index: number, array: [SyntaxKind, string | RegExp][]) => {
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