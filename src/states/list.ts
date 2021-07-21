/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description List
 */

import * as React from "react";

export type ListStates<Element> = {

    readonly list: Element[];
    readonly length: number;

    readonly get: (index: number) => Element | undefined;
    readonly set: (index: number, value: Element) => void;

    readonly replace: (list: Element[]) => void;
};

export const useList = <Element extends any = any>(initialElements: Element[] = []): ListStates<Element> => {

    const [list, setList] = React.useState(initialElements);

    return {

        list,
        length: list.length,

        get: (index: number) => list[index],
        set: (index: number, value: Element) => setList(
            list.map((item: Element, itemIndex: number) => {
                return index === itemIndex ? value : item;
            }),
        ),

        replace: (newList: Element[]) => setList(newList),
    };
};
