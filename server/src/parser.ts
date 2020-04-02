import {
	ASTNode
} from './languageData/ASTTypes'

import { Lexer, Token, Kind } from './lexer';

enum context {
	ROOT, //Outside of all blocks and scopes


}

export function parse(text: string): WorkshopDocument {
	let lexer: Lexer = new Lexer(text);

	let token: Token | null;
	while((token = lexer.getNextToken()) !== null) {
		console.log(Kind[token.kind] + "\t\t\t" + lexer.getTextForToken(token));




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
