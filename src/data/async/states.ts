/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description States
 */

import { AsyncDataType, EmptyState, FailedState } from "./declare";

export class AsyncDataStates<T extends any = any> {

    public static create<T extends any = any>(data: AsyncDataType<T>): AsyncDataStates<T> {

        return new AsyncDataStates<T>(data);
    }

    private readonly _data: AsyncDataType<T>;

    private constructor(data: AsyncDataType<T>) {

        this._data = data;
    }

    public get ready(): boolean {
        return this._data !== EmptyState;
    }
    public get preparing(): boolean {
        return this._data === EmptyState;
    }
    public get data(): T | undefined {

        if (this._data !== EmptyState
            && this._data !== FailedState) {
            return this._data;
        }
        return undefined;
    }

    public ensureData(): T {

        return this.data as T;
    }

    public getDataOrDefault(defaultData: T): T {

        if (this.ready) {
            return this.ensureData();
        }
        return defaultData;
    }

    public getDataOrUndefined(): T | undefined {

        if (this.ready) {
            return this.ensureData();
        }
        return undefined;
    }

    public getDataOrNull(): T | null {

        if (this.ready) {
            return this.ensureData();
        }
        return null;
    }
}
