/**
 * @author WMXPY
 * @namespace ReactHooks_Data
 * @description Async
 */

import * as React from "react";
import { AsyncDataStates } from "./states";

export type AsyncDataResolver<T extends any = any> = () => T | Promise<T>;

export const useAsyncData = <T extends any = any>(resolver: AsyncDataResolver<T>, dependencies: any[] = []): AsyncDataStates<T> => {

    const [ready, setReady] = React.useState(false);
    const [data, setData] = React.useState<T | undefined>(undefined);

    React.useEffect(() => {

        Promise.resolve(resolver()).then((currentData: T) => {

            setReady(true);
            setData(currentData);
        });
    }, dependencies);

    return AsyncDataStates.create(data, ready);
};
