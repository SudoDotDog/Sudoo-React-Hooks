/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Cache
 * @description Cache
 */

import * as React from "react";
import { EmptyState } from "../..";
import { AsyncDataStates } from "../async/states";
import { AsyncDataResolver } from "../declare";

export class CacheableData<T = any> {

    public static create<T = any>(resolver: AsyncDataResolver<T>): CacheableData<T> {

        return new CacheableData<T>(resolver);
    }

    private readonly _resolver: AsyncDataResolver<T>;

    private _cachedPromise: Promise<T> | null;

    private constructor(resolver: AsyncDataResolver<T>) {

        this._resolver = resolver;

        this._cachedPromise = null;
    }

    public use(): AsyncDataStates<T> {

        const [data, setData] = React.useState<T | typeof EmptyState>(EmptyState);

        React.useEffect(() => {

            if (!this._cachedPromise) {

                this._cachedPromise = Promise.resolve(this._resolver());
            }

            this._cachedPromise.then((currentData: T) => {

                setData(currentData);
            });
        }, []);

        return AsyncDataStates.create(data);
    }
}
