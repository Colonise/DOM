import { AbstractBase } from './abstract-base';

export class AbstractEventTarget extends AbstractBase<EventTarget> {
    public readonly actual: EventTarget | undefined;

    public constructor() {
        super();
    }
}
