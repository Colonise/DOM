import constants from '../constants';
import { AbstractBase } from './abstract-base';

export class AbstractEventTarget extends AbstractBase<EventTarget> {
    public readonly actual: EventTarget | undefined;
    protected _actual: EventTarget | undefined;

    public constructor() {
        super();
    }

    public create(): EventTarget {
        this._actual = new constants.EventTarget();

        return this._actual;
    }
}
