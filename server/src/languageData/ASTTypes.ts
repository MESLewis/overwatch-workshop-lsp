import { Token } from '../lexer';

export abstract class ASTNode {
	public readonly parent: ASTNode;

	constructor(parent: ASTNode, offset: number, length?: number) {
		this.parent = parent;
	}

	public get children(): Array<ASTNode | Token> {
		return [];
	}
}

export class BlockNode extends ASTNode {
	public header: ASTNode;
	public contents: Array<ASTNode | Token>

	constructor(parent: ASTNode, header: ASTNode, offset: number, length?: number) {
		super(parent, offset, length);
		this.header = header;
		this.contents = [];
	}

	public get children(): Array<ASTNode | Token> {
		return this.contents;
	}
}

export class FunctionNode extends ASTNode {
	public args: ASTNode[];

	constructor(parent: ASTNode, offset: number, length?: number) {
		super(parent, offset, length);
		this.args = [];
	}

	public get children(): Array<ASTNode | Token> {
		return this.args;
	}
}