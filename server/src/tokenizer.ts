export class Token {
	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	public get content(): string {
		return this.text;
	}

}

const matcher = /([\w\s\-%\d\.<>=!]*)([:"{}();,]*)/
export class Lexer {
	private position: number;
	private textArray: RegExpMatchArray | null;


	constructor(text: string) {
		this.position = 0;
		this.textArray = matcher.exec(text);
		console.log(this.textArray);
	}

	public getNextToken(): Token | null {
		let nextToken: string | undefined = this.textArray?.pop();
		if (nextToken !== undefined) {
			return new Token(nextToken);
		} else {
			return null;
		}
	}
}