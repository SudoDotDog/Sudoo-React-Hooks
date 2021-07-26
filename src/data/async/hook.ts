/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Hook
 */

import * as React from "react";
import { AsyncDataResolver } from "../declare";
import { AsyncDataType, EmptyState, FailedState } from "./declare";
import { AsyncDataStates } from "./states";

export const useAsyncData = <T extends any = any>(resolver: AsyncDataResolver<T>, dependencies: any[] = []): AsyncDataStates<T> => {

    const [data, setData] = React.useState<AsyncDataType<T>>(EmptyState);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setData(currentData);
        }).catch((error: Error) => {

            setData(FailedState);
        });
    }, dependencies);

    return AsyncDataStates.create(data);
};
