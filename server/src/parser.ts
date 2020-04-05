import {
	Node, BlockNode, DocumentNode, RuleHeaderNode, StringLiteralNode, TempNode
} from './Node'

import { Lexer, Token, SyntaxKind, MissingTokenObject, BlockHeader } from './lexer';

enum Context {
	ROOT, //Outside of all blocks and scopes
	SETTINGS_BLOCK,
	VARIABLES_BLOCK,
	SUBROUTINES_BLOCK, 
	RULE_BLOCK,
}

let token: Token<any> = new MissingTokenObject(SyntaxKind.InvalidToken, 0);
let currentContext: Context = Context.ROOT;
let lexer: Lexer = new Lexer("");

export function parse(text: string): Node {
	currentContext = Context.ROOT;
	lexer = new Lexer(text);
	token = lexer.getNextToken();

	let documentNode: Node = new DocumentNode();
	while (token.kind !== SyntaxKind.EndOfFileToken) {
		documentNode.children.push(parseStatements(documentNode));
	}
	return documentNode;
}

function tokenKind(): SyntaxKind {
	return token.kind;
}

function eat(...kinds: SyntaxKind[]): Token<any> {
	for (const kind of kinds) {
		if(token.kind === kind) {
			let oldToken = token;
			token = lexer.getNextToken();
			return oldToken;
		}
	}
	return new MissingTokenObject(kinds[0], token.fullStart)
}

function eat1(kind: SyntaxKind): Token<any> {
	if (token.kind === kind) {
		let oldToken = token;
		token = lexer.getNextToken();
		return oldToken;
	} else {
		return new MissingTokenObject(kind, token.fullStart)
	}
}

function eatType<TKind extends SyntaxKind>(): Token<TKind> {
	if (token.kind as TKind) {
		let oldToken = token;
		token = lexer.getNextToken();
		return oldToken;
	} else {
		//TODO
		return new MissingTokenObject<TKind>(token.kind, token.fullStart);
	}
}

	//https://github.com/microsoft/TypeScript/blob/master/src/compiler/parser.ts#L5701
function parseStatements(parent: Node): Node {
	switch(token.kind) {
		case SyntaxKind.SettingsKeyword: 
		case SyntaxKind.MainKeyword: 
		case SyntaxKind.LobbyKeyword: 
		case SyntaxKind.ModesKeyword: 
		case SyntaxKind.VariablesKeyword: 
		case SyntaxKind.SubroutinesKeyword: 
		case SyntaxKind.RuleKeyword: 
			return parseBlock(parent);
	}
	token = lexer.getNextToken();
	return new TempNode();
}

function parseStringLiteral(parent: Node): StringLiteralNode {
	let n: StringLiteralNode = new StringLiteralNode();
	n.parent = parent;

	n.openQuote = eatType<SyntaxKind.DoubleQuoteToken>();
	n.body = eat1(SyntaxKind.WORDS);
	n.closeQuote = eatType<SyntaxKind.DoubleQuoteToken>();

	return n;
}

function parseRuleHeader(parent: Node): RuleHeaderNode {
	let n: RuleHeaderNode = new RuleHeaderNode();
	n.parent = parent;

	n.openParen = eatType<SyntaxKind.OpenParen>();
	n.stringLiteral = parseStringLiteral(n);
	n.closeParen = eatType<SyntaxKind.CloseParen>();

	return n;
}

function parseBlock(parent: Node): Node {
	let bn: BlockNode = new BlockNode();

	bn.parent = parent;
	if(tokenKind() === SyntaxKind.RuleKeyword) {
		bn.header = parseRuleHeader(parent);
	} else {
		if(tokenKind() as BlockHeader) {
			bn.header = eatType<BlockHeader>();
		}
	}
	bn.openBrace = eat(SyntaxKind.OpenBrace);
	bn.body = parseStatements(bn);
	bn.closeBrace = eat(SyntaxKind.OpenBrace);

	return bn;
}
