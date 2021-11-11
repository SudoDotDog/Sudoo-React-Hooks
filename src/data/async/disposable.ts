/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Disposable
 */

import * as React from "react";
import { DisposableAsyncDataDisposer, DisposableAsyncDataResolver } from "../declare";
import { EmptyState } from "./declare";
import { AsyncDataStates } from "./states";

export const useDisposableAsyncData = <T = any>(
    resolver: DisposableAsyncDataResolver<T>,
    disposer: DisposableAsyncDataDisposer,
    dependencies: any[] = [],
): AsyncDataStates<T> => {

    const [data, setData] = React.useState<T | typeof EmptyState>(EmptyState);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setData(currentData);
        });

        return disposer;
    }, dependencies);

    return AsyncDataStates.create(data);
};
