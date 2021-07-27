/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description States
 */

import { AsyncDataType, EmptyState } from "./declare";

export class AsyncDataStates<T extends any = any> {

    public static create<T extends any = any>(data: AsyncDataType<T>, failedError?: Error): AsyncDataStates<T> {

        return new AsyncDataStates<T>(data, failedError);
    }

    private readonly _data: AsyncDataType<T>;
    private readonly _failedError: Error | undefined;

    private constructor(data: AsyncDataType<T>, failedError?: Error) {

        this._data = data;
        this._failedError = failedError;
    }

    public get ready(): boolean {

        if (this.failed) {
            return false;
        }
        return this._data !== EmptyState;
    }

    public get preparing(): boolean {

        if (this.failed) {
            return true;
        }
        return this._data === EmptyState;
    }

    public get failed(): boolean {
        return this._failedError !== undefined;
    }

    public get data(): T | undefined {

        if (this.failed) {
            return undefined;
        }
        if (this._data !== EmptyState) {
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
