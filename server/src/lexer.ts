const matcher: RegExp = /(?<leading>\s*)(?<content>(?:[\w\-%\d\.]|[\s](?![\s:"{}();,]))+|[:"{}();,]|[=><!]{1,2})/g

export enum Kind {
	BRACE_OPEN,
	BRACE_CLOSE,
	PAREN_OPEN,
	PAREN_CLOSE,
	COLON,
	SEMICOLON,
	COMMA,
	DOUBLE_QUOTE,
	WORDS, //Group(s) of characters and white space
	NUMBER,
	ARITHMATIC_OPERATOR,
	EOF,
	INVALID
}

const kindRegexMap: Map<Kind, RegExp> = new Map<Kind, RegExp>([
	[Kind.BRACE_OPEN, 			new RegExp("{")],
	[Kind.BRACE_CLOSE, 			new RegExp("}")],
	[Kind.PAREN_OPEN, 			new RegExp("\\(")],
	[Kind.PAREN_CLOSE, 			new RegExp("\\)")],
	[Kind.COLON, 				new RegExp(":")],
	[Kind.SEMICOLON, 			new RegExp(";")],
	[Kind.COMMA, 				new RegExp(",")],
	[Kind.DOUBLE_QUOTE,			new RegExp("\"")],
	[Kind.WORDS, 				new RegExp("\\w")],
	[Kind.NUMBER, 				new RegExp("\\d")],
	[Kind.ARITHMATIC_OPERATOR, 	new RegExp("[=><!]{1,2}")],
])

export interface Token {
	kind: Kind;
	fullStart: number; //Start of the token, including leading white space
	length: number; //length of the token from fullStart
	start: number; //Start of the token, excluding leading white space
}

export class Lexer {
	private text: string;

	constructor(text: string) {
		this.text = text
	}

	public getNextToken(): Token | null {
		let nextMatch: RegExpExecArray | null = matcher.exec(this.text);
		if (nextMatch !== null) {
			let nextToken: Token = {
				kind: this.determineKind(nextMatch),
				fullStart: nextMatch.index,
				start: nextMatch.index + (nextMatch.groups?.leading.length || 0),
				length: nextMatch[0].length
			}
			return nextToken;
		} else {
			return null;
		}
	}

	private determineKind(match: RegExpMatchArray): Kind {
		if(match.index === undefined) {
			return Kind.INVALID;
		}
		let start = match.index + (match.groups?.leading.length || 0);
		let length = match.groups?.content.length || 0;
		let content = this.text.slice(start, start + length);

		let retKind = Kind.INVALID;

		kindRegexMap.forEach((regexp: RegExp, kind: Kind, map: Map<Kind, RegExp>) => {
			if(regexp.test(content)) {
				retKind = kind;
				return;
			}
		});
		return retKind;
	}

	/**
	 * Returns a string of all whitespace preceding token
	 * @param token 
	 */
	public getLeadingForToken(token: Token): string {
		return this.text.slice(token.fullStart, token.start);
	}

	/**
	 * Returns getLeadingForToken + getTextForToken
	 * @param token 
	 */
	public getFullTextForToken(token: Token): string {
		return this.text.slice(token.fullStart, token.fullStart + token.length);
	}

	/**
	 * Returns a string of characters from the first non-whitespace character
	 * to the end of the token
	 * @param token 
	 */
	public getTextForToken(token: Token): string {
		return this.text.slice(token.start, token.fullStart + token.length);
	}

}