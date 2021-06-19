/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Disposable
 */

import * as React from "react";
import { DisposableAsyncDataDisposer, DisposableAsyncDataResolver } from "../declare";
import { AsyncDataStates } from "./states";

export const useDisposableAsyncData = <T extends any = any>(
    resolver: DisposableAsyncDataResolver<T>,
    disposer: DisposableAsyncDataDisposer,
    dependencies: any[] = [],
): AsyncDataStates<T> => {

    const [ready, setReady] = React.useState(false);
    const [data, setData] = React.useState<T | undefined>(undefined);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setReady(true);
            setData(currentData);
        });

        return disposer;
    }, dependencies);

    return AsyncDataStates.create(ready, data);
};
