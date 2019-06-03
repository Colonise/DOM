import { NodeType } from './node-type.enum';
import { VirtualNode } from './virtual-node';

type HTMLElementTagNames = keyof HTMLElementTagNameMap;
type FindHTMLElement<TTagName extends string | keyof HTMLElementTagNameMap>
    = TTagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TTagName] : HTMLElement;

export class VirtualElement<TTagName extends HTMLElementTagNames | string = string> extends VirtualNode {
    public readonly actual: FindHTMLElement<TTagName> | undefined;

    public constructor(public readonly tagName: TTagName) {
        super(NodeType.ELEMENT_NODE);
    }
}
