import { Token, SK, Lexer, TokenObject } from './lexer';
import { lexer } from './parser'

export type NodeOrToken = Node | Token<SK>;

export abstract class Node {
	[key: string]: any;
	parent: Node | undefined;
	children: NodeOrToken[] = [];

	get allNodeAndToken(): NodeOrToken[] {
		let all: NodeOrToken[] = this.children;

		for (let pair of Object.entries<NodeOrToken>(this)) {
			let key: string = pair[0];
			let value: NodeOrToken = pair[1];

			if(key !== "children" && key !== "parent") {
				all.push(value);
			}
		}

		return all;
	}

	toString(): string {
		return this.toStringIndent(0);
	}

	toStringIndent(indent: number): string {
		let retString = "";
		let indentString = "\t".repeat(indent);
		for (const iterator of this.allNodeAndToken) {
			if(iterator instanceof Node) {
				retString += indentString + '\n';
				retString += indentString + '>$$' + iterator.constructor.name + '\n';
				retString += indentString + iterator.toStringIndent(indent + 1) + '\n';
				retString += indentString + '<$$' + iterator.constructor.name + '\n';
			} else if(iterator !== undefined) {
				retString += iterator?.debugText;
			}
		}
		return retString;
	}
}

export class DocumentNode extends Node {
}

export class StringLiteralNode extends Node {
	openQuote!: Token<SK.DoubleQuoteToken>;
	body!: NodeOrToken;
	closeQuote!: Token<SK.DoubleQuoteToken>;
}

export class RuleHeaderNode extends Node {
	header!: Token<SK.RuleKeyword>;
	openParen!: Token<SK.OpenParen>;
	stringLiteral!: StringLiteralNode;
	closeParen!: Token<SK.CloseParen>;
}

export class BlockNode extends Node {
	header!: NodeOrToken;
	openBrace!: Token<SK.OpenBrace>;
	body!: Node;
	closeBrace!: Token<SK.CloseBrace>;
}

/**
 * Holds a list of expressions
 */
export class ListNode extends Node {
}