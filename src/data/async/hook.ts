/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Hook
 */

import * as React from "react";
import { AsyncDataResolver } from "../declare";
import { AsyncDataType, EmptyState } from "./declare";
import { AsyncDataStates } from "./states";

export const useAsyncData = <T = any>(resolver: AsyncDataResolver<T>, dependencies: any[] = []): AsyncDataStates<T> => {

    const [data, setData] = React.useState<AsyncDataType<T>>(EmptyState);
    const [failedError, setFailedError] = React.useState<Error | undefined>(undefined);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setData(currentData);
        }).catch((error: Error) => {

            setFailedError(error);
        });
    }, dependencies);

    return AsyncDataStates.create(data, failedError);
};
