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

    readonly push: (value: Element) => void;
    readonly pop: () => Element | undefined;
    readonly unshift: (value: Element) => void;
    readonly shift: () => Element | undefined;

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

        push: (value: Element) => setList([...list, value]),
        pop: () => {

            const newList: Element[] = [...list];
            const result: Element | undefined = newList.pop();

            setList(newList);
            return result;
        },
        unshift: (value: Element) => setList([value, ...list]),
        shift: () => {

            const newList: Element[] = [...list];
            const result: Element | undefined = newList.shift();

            setList(newList);
            return result;
        },

        replace: (newList: Element[]) => setList(newList),
    };
};
