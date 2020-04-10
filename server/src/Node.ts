import { Token, SK, Lexer, TokenObject } from './lexer';
import { lexer } from './parser';

export type NodeOrToken = Node | Token<SK>;

export function isToken(nodeOrToken: NodeOrToken): nodeOrToken is Token<SK> {
	return (nodeOrToken as Token<SK>).fullStart !== undefined;
}

export abstract class Node {
	[key: string]: any;
	parent: Node | undefined;
	children: NodeOrToken[] = [];

	get allNodeAndToken(): NodeOrToken[] {
		let all: NodeOrToken[] = this.children;

		for (let pair of Object.entries<NodeOrToken>(this)) {
			let key: string = pair[0];
			let value: NodeOrToken = pair[1];

			if(key !== 'children' && key !== 'parent') {
				all.push(value);
			}
		}

		return all;
	}

	toString(): string {
		return this.toStringIndent(0);
	}

	toStringIndent(indent: number): string {
		let retString = '';
		let indentString = '\t'.repeat(indent);
		for (const iterator of this.allNodeAndToken) {
			if(iterator instanceof Node) {
				retString += indentString + '\n';
				retString += indentString + '>$$' + iterator.constructor.name + '\n';
				retString += indentString + iterator.toStringIndent(indent + 1) + '\n';
				retString += indentString + '<$$' + iterator.constructor.name + '\n';
			} else if(iterator instanceof Array) {
				for (const iterator2 of iterator) {
					retString += iterator2.toStringIndent(indent);
				}
			} else if(iterator !== undefined) {
				retString += iterator?.debugText;
			}
		}
		return retString;
	}
}

export class DocumentNode extends Node {
	globalVariables?: VariableDefinitionListNode;
	playerVariables?: VariableDefinitionListNode;
	subroutines?: SubroutineDefinitionListNode;
}

export class RuleHeaderNode extends Node {
	header!: Token<SK.RuleKeyword>;
	openParen!: Token<SK.OpenParen>;
	stringLiteral!: Token<SK.StringLiteralToken>;
	closeParen!: Token<SK.CloseParen>;
}

export class BlockNode extends Node {
	header!: NodeOrToken;
	openBrace!: Token<SK.OpenBrace>;
	body!: Node;
	closeBrace!: Token<SK.CloseBrace>;
}

export class FunctionNode extends Node {
	header!: NodeOrToken;
	openParen!: Token<SK.OpenParen>;
	args!: NodeOrToken[];
	closeParen!: Token<SK.CloseParen>;
}

export class ArgumentNode extends Node {
	arg!: NodeOrToken;
	comma?: Token<SK.CommaToken>;
}

export class DisabledNode extends Node {
	disabled!: Token<SK.DisabledKeyword>;
}

/**
 * Holds a list of expressions
 */
export class ListNode extends Node {
}

export class DefinitionNode extends Node {
	id!: Token<SK.NumberToken>;
	colon!: Token<SK.ColonToken>;
	name!: Token<SK.WordToken>;
}

export class DefinitionListNode extends Node {
	definitions: DefinitionNode[] = [];
}

export class VariableDefinitionListNode extends DefinitionListNode {
	type!: Token<SK.GlobalKeyword> | Token<SK.PlayerKeyword>;
	typeColon!: Token<SK.ColonToken>;
}

export class SubroutineDefinitionListNode extends DefinitionListNode {

}