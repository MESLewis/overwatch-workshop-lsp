import {
	Node, BlockNode, DocumentNode, RuleHeaderNode, StringLiteralNode, ListNode, NodeOrToken, FunctionNode, ArgumentNode, DisabledNode
} from './Node'

import { Lexer, Token, SK, MissingTokenObject, BlockHeader } from './lexer';

enum Context {
	root, //Outside of all blocks and scopes
	settingsBlock,
	variablesBlock,
	subroutinesBlock, 
	ruleBlock,
	actionsBlock
}

let token: Token<any> = new MissingTokenObject(SK.InvalidToken, 0);
let currentContext: Context = Context.root;
//Exporting this to be used in Node.toString(). Probably not the best but needed for visualizing.
export let lexer: Lexer = new Lexer("");

export function parse(text: string): Node {
	currentContext = Context.root;
	lexer = new Lexer(text);
	token = lexer.getNextToken();

	let documentNode: Node = new DocumentNode();
	while (token.kind !== SK.EndOfFileToken) {
		documentNode.children.push(parseStatements(documentNode));
	}
	console.log(documentNode.toString());
	return documentNode;
}

function tokenKind(): SK {
	return token.kind;
}


function eat(kind: SK[]): Token<SK> {
	if (kind.includes(token.kind)) {
		let oldToken = token;
		token = lexer.getNextToken();
		return oldToken;
	} else {
		return new MissingTokenObject<SK>(kind[0], token.fullStart);
	}
}

function eat1(kind: SK): Token<SK> {
	if (kind === token.kind) {
		let oldToken = token;
		token = lexer.getNextToken();
		return oldToken;
	} else {
		return new MissingTokenObject<SK>(kind, token.fullStart);
	}
}

function eatOptional(kind: SK): Token<SK> | undefined {
	if (kind === token.kind) {
		let oldToken = token;
		token = lexer.getNextToken();
		return oldToken;
	}
}

function eatAny(): Token<SK> {
	let oldToken = token;
	token = lexer.getNextToken();
	return oldToken;
}

	//https://github.com/microsoft/TypeScript/blob/master/src/compiler/parser.ts#L5701
function parseStatements(parent: Node): NodeOrToken {
	switch(token.kind) {
		//TODO some way of keeping this in sync with the BlockHeader array?
		case SK.SettingsKeyword: 
		case SK.MainKeyword: 
		case SK.LobbyKeyword: 
		case SK.ModesKeyword: 
		case SK.VariablesKeyword: 
		case SK.SubroutinesKeyword: 
		case SK.RuleKeyword: 
		case SK.ActionsKeyword:
		case SK.ConditionsKeyword:
		case SK.EventKeyword:
			return parseBlock(parent);
		case SK.DisabledKeyword:
			return parseDisabledKeyword(parent);
		case SK.DoubleQuoteToken:
			return parseStringLiteral(parent);
		default:
			if(currentContext === Context.actionsBlock) {
				return parseFunction(parent);
			}

	}
	return eatAny();
}

function parseDisabledKeyword(parent: Node): Node {
	let n: DisabledNode = new DisabledNode();
	n.parent = parent;

	n.disabled = <Token<SK.DisabledKeyword>>eat1(SK.DisabledKeyword);
	n.children.push(parseStatements(n));

	return n;
}

function parseFunction(parent: Node): NodeOrToken {
	//Check for open paren, else just return the single token
	let header = <Token<SK>>eatAny();
	if(token.kind !== SK.OpenParen) {
		return header;
	}
	let n: FunctionNode = new FunctionNode();
	n.parent = parent;

	n.header = header;
	n.openParen = <Token<SK.OpenParen>>eat1(SK.OpenParen);
	n.args = [];
	while(token.kind !== SK.CloseParen) {
		n.args.push(parseArgs(n));
	}
	n.closeParen = <Token<SK.CloseParen>>eat1(SK.CloseParen);

	return n;
}

function parseArgs(parent: Node): ArgumentNode {
	let n: ArgumentNode = new ArgumentNode();
	n.parent = parent;

	n.arg = parseStatements(n);
	n.comma = <Token<SK.CommaToken>>eatOptional(SK.CommaToken);

	return n;
}

function parseList(parent: Node, endKind: SK): Node {
	let n: ListNode = new ListNode();
	while(tokenKind() !== endKind) {
		n.children.push(parseStatements(n));
	}
	return n;
}

function parseStringLiteral(parent: Node): StringLiteralNode {
	let n: StringLiteralNode = new StringLiteralNode();
	n.parent = parent;

	n.openQuote = <Token<SK.DoubleQuoteToken>>eat1(SK.DoubleQuoteToken);
	n.body = parseList(n, SK.DoubleQuoteToken);
	n.closeQuote = <Token<SK.DoubleQuoteToken>>eat1(SK.DoubleQuoteToken);

	return n;
}

function parseRuleHeader(parent: Node): RuleHeaderNode {
	let n: RuleHeaderNode = new RuleHeaderNode();
	n.parent = parent;

	n.header = <Token<SK.RuleKeyword>>eat1(SK.RuleKeyword);
	n.openParen = <Token<SK.OpenParen>>eat1(SK.OpenParen);
	n.stringLiteral = parseStringLiteral(n);
	n.closeParen = <Token<SK.CloseParen>>eat1(SK.CloseParen);

	return n;
}

function parseBlock(parent: Node): Node {
	let bn: BlockNode = new BlockNode();

	bn.parent = parent;
	if(tokenKind() === SK.RuleKeyword) {
		currentContext = Context.ruleBlock;
		bn.header = parseRuleHeader(parent);
	} else {
		if(tokenKind() === SK.ActionsKeyword) {
			currentContext = Context.actionsBlock;
		}
		if(BlockHeader.includes(tokenKind())) {
			bn.header = eat(BlockHeader);
		}
	}
	bn.openBrace = <Token<SK.OpenBrace>>eat1(SK.OpenBrace);
	bn.body = parseList(bn, SK.CloseBrace);
	bn.closeBrace = <Token<SK.CloseBrace>>eat1(SK.CloseBrace);

	switch(currentContext) {
		case Context.actionsBlock:
			currentContext = Context.ruleBlock;
			break;
		case Context.ruleBlock:
			currentContext = Context.root;
			break;
	}

	return bn;
}
