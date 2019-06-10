import { createElement, FindHTMLElement, HTMLElementTagNames } from '../elements';
import { AbstractBase } from './abstract-base';
import { AbstractNode } from './abstract-node';
import { NodeType } from './node-type.enum';

export class AbstractElement<
    TTagName extends HTMLElementTagNames | string,
    THTMLElement extends HTMLElement = FindHTMLElement<TTagName>
    >
    extends AbstractNode<NodeType.ELEMENT_NODE>
    implements AbstractBase<THTMLElement> {

    public readonly actual: THTMLElement | undefined;
    protected _actual: THTMLElement | undefined;

    public constructor(public readonly tagName: TTagName, public readonly options?: ElementCreationOptions) {
        super(NodeType.ELEMENT_NODE);
    }

    public create(): THTMLElement {
        this._actual = <THTMLElement>createElement(this.tagName, this.options);

        return this._actual;
    }
}
