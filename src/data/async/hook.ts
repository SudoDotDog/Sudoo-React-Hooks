/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Hook
 */

import * as React from "react";
import { AsyncDataResolver } from "../declare";
import { EmptyState } from "./declare";
import { AsyncDataStates } from "./states";

export const useAsyncData = <T extends any = any>(resolver: AsyncDataResolver<T>, dependencies: any[] = []): AsyncDataStates<T> => {

    const [data, setData] = React.useState<T | typeof EmptyState>(EmptyState);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setData(currentData);
        });
    }, dependencies);

    return AsyncDataStates.create(data);
};
