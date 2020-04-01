const matcher: RegExp = /(?<leading>\s*)(?<content>(?:[\w\-%\d\.]|[\s](?![\s:"{}();,]))+|[:"{}();,]|[=><!]{1,2})/g

export enum Kind {
	TEST
}

export interface Token {
	kind: Kind;
	fullStart: number; //Start of the token, including leading white space
	length: number; //length of the token from fullStart
	start: number; //Start of the token, excluding leading white space
}

export class Lexer {
	private position: number;
	private text: string;

	constructor(text: string) {
		this.position = 0;
		this.text = text
	}

	public getNextToken(): Token | null {
		let nextMatch: RegExpExecArray | null = matcher.exec(this.text);
		if (nextMatch !== null) {
			let nextToken: Token = {
				kind: Kind.TEST,
				fullStart: 0,
				length: 0,
				start: 0
			}
			return nextToken;
		} else {
			return null;
		}
	}
}