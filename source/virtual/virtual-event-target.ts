import { VirtualBase } from './virtual-base';

export class VirtualEventTarget extends VirtualBase<EventTarget> {
    public readonly actual: EventTarget | undefined;

    public constructor() {
        super();
    }
}
