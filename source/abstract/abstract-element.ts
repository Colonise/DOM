import { AbstractNode } from './abstract-node';
import { NodeType } from './node-type.enum';

type HTMLElementTagNames = keyof HTMLElementTagNameMap;
type FindHTMLElement<TTagName extends string | keyof HTMLElementTagNameMap>
    = TTagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TTagName] : HTMLElement;

export class AbstractElement<TTagName extends HTMLElementTagNames | string = string> extends AbstractNode {
    public readonly actual: FindHTMLElement<TTagName> | undefined;

    public constructor(public readonly tagName: TTagName) {
        super(NodeType.ELEMENT_NODE);
    }
}
