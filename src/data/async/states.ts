/**
 * @author WMXPY
 * @namespace ReactHooks_Data
 * @description Async
 */

import * as React from "react";

export type AsyncDataGetter<T extends any = any> = () => T;

export type AsyncDataStates<T extends any = any> = {

    readonly ready: boolean;
    readonly preparing: boolean;

    readonly data?: T;
    readonly ensureData: () => T;
    readonly getDataOrDefault: (defaultData: T) => T;
    readonly getDataOrUndefined: () => T | undefined;
    readonly getDataOrNull: () => T | null;
};

export class AsyncDataStates {


}

export const useAsyncData = <T extends any = any>(): AnchorStates<Element> => {

    const [anchor, setAnchor] = React.useState<undefined | Element>(initialElement);

    return {

        anchor,
        mounted: typeof anchor !== 'undefined',

        mount: (element: Element) => {
            setAnchor(element);
        },
        unmount: () => {
            setAnchor(undefined);
        },
    };
};
