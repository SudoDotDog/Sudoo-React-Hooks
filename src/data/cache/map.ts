/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Cache
 * @description Map
 */

import * as React from "react";
import { EmptyState } from "../..";
import { AsyncDataStates } from "../async/states";
import { NamedAsyncDataResolver } from "../declare";

export class MappedCacheableData<T extends any = any, Args extends any[] = []> {

    public static create<T extends any = any, Args extends any[] = []>(resolver: NamedAsyncDataResolver<T, Args>): MappedCacheableData<T> {

        return new MappedCacheableData<T, Args>(resolver);
    }

    private readonly _resolver: NamedAsyncDataResolver<T, Args>;

    private _cachedPromise: Promise<T> | null;

    private constructor(resolver: NamedAsyncDataResolver<T, Args>) {

        this._resolver = resolver;

        this._cachedPromise = null;
    }

    public use(...args: Args): AsyncDataStates<T> {

        const [data, setData] = React.useState<T | typeof EmptyState>(EmptyState);

        React.useEffect(() => {

            if (!this._cachedPromise) {
                this._cachedPromise = Promise.resolve(this._resolver(...args));
                this._cachedPromise.then(() => {
                    this._cachedPromise = null;
                });
            }

            this._cachedPromise.then((currentData: T) => {

                setData(currentData);
            });
        }, []);

        return AsyncDataStates.create(data);
    }
}
