export enum Kind {
	BLOCK,
	FUNCTION
}
export abstract class ASTNode {
	public readonly abstract type: string = 'block | function';
	public offset: number;
	public length?: number;
	public readonly parent: ASTNode;
	public location?: string;

	constructor(parent: ASTNode, offset: number, length?: number) {
		this.parent = parent;
		this.offset = offset;
		this.length = length;
	}

	public get children(): ASTNode[] {
		return [];
	}
}

export class BlockNode extends ASTNode {
	public type: string = 'block';
	public header: ASTNode;
	public contents: ASTNode[];

	constructor(parent: ASTNode, header: ASTNode, offset: number, length?: number) {
		super(parent, offset, length);
		this.header = header;
		this.contents = [];
	}

	public get children(): ASTNode[] {
		return this.contents;
	}
}

export class FunctionNode extends ASTNode {
	public type: string = 'function';
	public args: ASTNode[];

	constructor(parent: ASTNode, offset: number, length?: number) {
		super(parent, offset, length);
		this.args = [];
	}

	public get children(): ASTNode[] {
		return this.args;
	}
}