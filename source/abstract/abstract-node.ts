import { AbstractEventTarget } from './abstract-event-target';
import { NodeType } from './node-type.enum';

export class AbstractNode extends AbstractEventTarget {
    public readonly actual: Node | undefined;

    public get nodeType(): NodeType {
        return this.actual ? <NodeType>this.actual.nodeType : this._nodeType;
    }

    public constructor(private readonly _nodeType: NodeType) {
        super();
    }
}
