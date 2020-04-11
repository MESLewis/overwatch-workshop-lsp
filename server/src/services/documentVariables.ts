import { DocumentNode, BlockNode, VariableDefinitionListNode, DefinitionNode, DefinitionListNode, SubroutineDefinitionListNode, ListNode } from '../Node';
import { SK, Token } from '../lexer';

export function getPlayerVariables(node: DocumentNode): Token<SK>[] {
	for(let child of node.children) {
		if(child instanceof BlockNode) {
			if((child.header as Token<SK>).kind === SK.VariablesKeyword) {
				if (child.body instanceof ListNode) {
					for(let varList of child.body.children) {
						if (varList instanceof VariableDefinitionListNode) {
							if (varList.type.kind === SK.PlayerKeyword) {
								return getDefinitionNames(varList.definitions);
							}
						}
					}
				}
			}
		}
	}
	return [];
}

export function getGlobalVariables(node: DocumentNode): Token<SK>[] {
	for(let child of node.children) {
		if(child instanceof BlockNode) {
			if((child.header as Token<SK>).kind === SK.VariablesKeyword) {
				if (child.body instanceof ListNode) {
					for (let varList of child.body.children) {
						if (varList instanceof VariableDefinitionListNode) {
							if (varList.type.kind === SK.GlobalKeyword) {
								return getDefinitionNames(varList.definitions);
							}
						}
					}
				}
			}
		}
	}
	return [];
}

export function getSubroutineNames(node: DocumentNode): Token<SK>[] {
	for(let child of node.children) {
		if(child instanceof BlockNode) {
			if((child.header as Token<SK>).kind === SK.SubroutinesKeyword) {
				if(child.body instanceof SubroutineDefinitionListNode) {
					return getDefinitionNames(child.body.definitions);
				}
			}
		}
	}
	return [];
}

function getDefinitionNames(definitions: DefinitionNode[]): Token<SK>[] {
	return definitions.map<Token<SK>>(function (value: DefinitionNode): Token<SK> {
		return value.name;
	});
}