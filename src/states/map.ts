/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Map
 */

import * as React from "react";

export type MapStates<Key extends string | number | symbol, Element> = {

    readonly map: Record<Key, Element>;
    readonly length: number;

    readonly get: (key: Key) => Element | undefined;
    readonly set: (key: Key, value: Element) => void;

    readonly replace: (newMap: Record<Key, Element>) => void;
};

export const useMap = <Key extends string | number | symbol = string, Element extends any = any>(
    initialMap: Record<Key, Element> = {} as any,
): MapStates<Key, Element> => {

    const [map, setMap] = React.useState(initialMap);

    return {

        map,
        length: Object.keys(map).length,

        get: (key: Key) => map[key],
        set: (key: Key, value: Element) => setMap({
            ...map,
            [key]: value,
        }),

        replace: (newMap: Record<Key, Element>) => setMap(newMap),
    };
};
