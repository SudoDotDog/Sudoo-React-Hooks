/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Cache
 * @description Cache
 */

import * as React from "react";
import { AsyncDataStates } from "../async/states";
import { AsyncDataResolver } from "../declare";

export class CacheableData<T extends any = any> {

    public static create<T extends any = any>(resolver: AsyncDataResolver<T>): CacheableData<T> {

        return new CacheableData<T>(resolver);
    }

    private readonly _resolver: AsyncDataResolver<T>;

    private _cachedPromise: Promise<T> | null;

    private constructor(resolver: AsyncDataResolver<T>) {

        this._resolver = resolver;

        this._cachedPromise = null;
    }

    public use(): AsyncDataStates<T> {

        const [ready, setReady] = React.useState(false);
        const [data, setData] = React.useState<T | undefined>(undefined);

        React.useEffect(() => {

            if (!this._cachedPromise) {
                this._cachedPromise = Promise.resolve(this._resolver());
                this._cachedPromise.then(() => {
                    this._cachedPromise = null;
                });
            }

            this._cachedPromise.then((currentData: T) => {

                setReady(true);
                setData(currentData);
            });
        }, []);

        return AsyncDataStates.create(ready, data);
    }
}
