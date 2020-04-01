import {
	ASTNode
} from './languageData/ASTTypes'

import { Lexer, Token } from './tokenizer';

export function parse(text: string): WorkshopDocument {
	let lexer: Lexer = new Lexer(text);

	let token: Token | null;
	while((token = lexer.getNextToken()) !== null) {
		console.log(token.content);
	}
	
	return new WorkshopDocument(text);
}

export class WorkshopDocument {
	// rootNode: ASTNode;

	constructor(text: string) {
		// this.rootNode = recursivelyBuildAST(null, text);
	}
}

// function recursivelyBuildAST(parent: ASTNode | null, text: string): ASTNode {
// }
