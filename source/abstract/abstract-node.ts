import constants from '../constants';
import { AbstractBase } from './abstract-base';
import { AbstractEventTarget } from './abstract-event-target';
import { NodeType } from './node-type.enum';

export class AbstractNode<TNodeType extends NodeType> extends AbstractEventTarget implements AbstractBase<Node> {
    public readonly actual: Node | undefined;
    protected _actual: Node | undefined;

    public get nodeType(): TNodeType {
        return this.actual ? <TNodeType>this.actual.nodeType : this._nodeType;
    }

    public constructor(private readonly _nodeType: TNodeType) {
        super();
    }

    public create(): Node {
        this._actual = new constants.Node();

        return this._actual;
    }
}
