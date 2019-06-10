export abstract class AbstractBase<TAbstract> {
    protected _actual?: TAbstract;

    public get actual(): TAbstract | undefined {
        return this._actual;
    }

    protected abstract create(): TAbstract;
}
