/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Map
 */

import * as React from "react";

export type MapStates<Key extends string | number | symbol, Element> = {

    readonly map: Record<Key, Element>;

    readonly getLength: () => number;
    readonly getEntries: () => Array<[Key, Element]>;

    readonly get: (key: Key) => Element | undefined;
    readonly set: (key: Key, value: Element) => void;
    readonly deleteKey: (key: Key) => void;
    readonly deleteValue: (value: Element) => void;

    readonly merge: (newMap: Partial<Record<Key, Element>>) => void;
    readonly replace: (newMap: Record<Key, Element>) => void;
};

export const useMap = <Key extends string | number | symbol = string, Element = any>(
    initialMap: Record<Key, Element> = {} as any,
): MapStates<Key, Element> => {

    const [map, setMap] = React.useState(initialMap);

    return {

        map,

        getLength: () => Object.keys(map).length,
        getEntries: () => [...(Object.entries(map) as any)],

        get: (key: Key) => map[key],
        set: (key: Key, value: Element) => setMap({
            ...map,
            [key]: value,
        }),
        deleteKey: (key: Key) => {

            const keys: Key[] = Object.keys(map) as any;
            setMap(keys.reduce((result: Record<Key, Element>, currentKey: Key) => {

                if (currentKey === key) {
                    return result;
                }

                return {
                    ...result,
                    [currentKey]: map[currentKey],
                };
            }, {} as Record<Key, Element>));
        },
        deleteValue: (value: Element) => {

            const keys: Key[] = Object.keys(map) as any;
            setMap(keys.reduce((result: Record<Key, Element>, currentKey: Key) => {

                if (map[currentKey] === value) {
                    return result;
                }

                return {
                    ...result,
                    [currentKey]: map[currentKey],
                };
            }, {} as Record<Key, Element>));
        },

        merge: (newMap: Partial<Record<Key, Element>>) => setMap({
            ...map,
            ...newMap,
        }),
        replace: (newMap: Record<Key, Element>) => setMap(newMap),
    };
};
