/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Cache
 * @description Cache
 */

import { AsyncDataResolver } from "../declare";

export class CacheableData<T extends any = any> {

    public static create<T extends any = any>(resolver: AsyncDataResolver<T>): CacheableData<T> {

        return new CacheableData<T>(resolver);
    }

    private readonly _resolver: AsyncDataResolver<T>;

    private constructor(resolver: AsyncDataResolver<T>) {

        this._resolver = resolver;
    }
}
