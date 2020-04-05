import { Token, SyntaxKind } from './lexer';

export type NodeOrToken = Node | Token<SyntaxKind>;

export abstract class Node {
	parent: Node | undefined;
	children: NodeOrToken[] = [];
}

export class DocumentNode extends Node {

}

export class TempNode extends Node {

}

export class StringLiteralNode extends Node {
	openQuote!: Token<SyntaxKind.DoubleQuoteToken>;
	body!: NodeOrToken;
	closeQuote!: Token<SyntaxKind.DoubleQuoteToken>;
}

export class RuleHeaderNode extends Node {
	header!: Token<SyntaxKind.RuleKeyword>;
	openParen!: Token<SyntaxKind.OpenParen>;
	stringLiteral!: StringLiteralNode;
	closeParen!: Token<SyntaxKind.CloseParen>;
}

export class BlockNode extends Node {
	header!: NodeOrToken;
	openBrace!: Token<SyntaxKind.OpenBrace>;
	body!: Node;
	closeBrace!: Token<SyntaxKind.CloseBrace>;
}