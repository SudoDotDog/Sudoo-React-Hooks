/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Hook
 */

import * as React from "react";
import { AsyncDataResolver } from "../declare";
import { AsyncDataStates } from "./states";

export const useAsyncData = <T extends any = any>(resolver: AsyncDataResolver<T>, dependencies: any[] = []): AsyncDataStates<T> => {

    const [ready, setReady] = React.useState(false);
    const [data, setData] = React.useState<T | undefined>(undefined);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setReady(true);
            setData(currentData);
        });
    }, dependencies);

    return AsyncDataStates.create(ready, data);
};
