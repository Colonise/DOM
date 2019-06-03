export class VirtualBase<TVirtual> {
    protected _actual?: TVirtual;

    public get actual(): TVirtual | undefined {
        return this._actual;
    }
}
