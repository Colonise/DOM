import { NodeType } from './node-type.enum';
import { VirtualEventTarget } from './virtual-event-target';

export class VirtualNode extends VirtualEventTarget {
    public readonly actual: Node | undefined;

    public get nodeType(): NodeType {
        return this.actual ? <NodeType>this.actual.nodeType : this._nodeType;
    }

    public constructor(private readonly _nodeType: NodeType) {
        super();
    }
}
