/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description States
 */

export class AsyncDataStates<T extends any = any> {

    public static create<T extends any = any>(ready: boolean, data?: T): AsyncDataStates<T> {

        return new AsyncDataStates<T>(ready, data);
    }

    private readonly _ready: boolean;
    private readonly _data?: T;

    private constructor(ready: boolean, data?: T) {

        this._ready = ready;
        this._data = data;
    }

    public get ready(): boolean {
        return this._ready;
    }
    public get preparing(): boolean {
        return !this._ready;
    }
    public get data(): T | undefined {
        return this._data;
    }

    public ensureData(): T {

        return this._data as T;
    }

    public getDataOrDefault(defaultData: T): T {

        if (this._ready) {
            return this.ensureData();
        }
        return defaultData;
    }

    public getDataOrUndefined(): T | undefined {

        if (this._ready) {
            return this.ensureData();
        }
        return undefined;
    }

    public getDataOrNull(): T | null {

        if (this._ready) {
            return this.ensureData();
        }
        return null;
    }
}
