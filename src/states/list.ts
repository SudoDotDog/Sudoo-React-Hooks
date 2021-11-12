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

    readonly deleteWithIndex: (index: number) => void;
    readonly deleteWithValue: (value: Element, compareFunction?: (element1: Element, element2: Element) => boolean) => void;

    readonly has: (value: Element, compareFunction?: (element1: Element, element2: Element) => boolean) => boolean;

    readonly map: <NewElement>(callback: (element: Element, index: number, array: Element[]) => NewElement) => NewElement[];
    readonly flatMap: <NewElement>(callback: (element: Element, index: number, array: Element[]) => NewElement[]) => NewElement[];
    readonly reduce: <NewElement>(callback: (previousValue: NewElement, currentValue: Element, currentIndex: number, array: Element[]) => NewElement, initialValue?: NewElement) => NewElement;
    readonly filter: <NewElement>(callback: (element: Element, index: number, array: Element[]) => boolean) => NewElement[];

    readonly push: (value: Element) => void;
    readonly pop: () => Element | undefined;

    readonly unshift: (value: Element) => void;
    readonly shift: () => Element | undefined;

    readonly replace: (list: Element[]) => void;
};

export const useList = <Element = any>(initialElements: Element[] = []): ListStates<Element> => {

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

        deleteWithIndex: (index: number) => setList(
            list.filter((_item: Element, itemIndex: number) => {
                return index !== itemIndex;
            }),
        ),
        deleteWithValue: (
            value: Element,
            compareFunction: (element1: Element, element2: Element) => boolean =
                (element1: Element, element2: Element) => {
                    return element1 === element2;
                },
        ) => setList(
            list.filter((item: Element) => {
                return !compareFunction(item, value);
            }),
        ),

        has: (
            value: Element,
            compareFunction: (element1: Element, element2: Element) => boolean =

                (element1: Element, element2: Element) => {
                    return element1 === element2;
                },
        ) => list.some((item: Element) => {
            return compareFunction(item, value);
        }),

        map: list.map,
        flatMap: list.flatMap,
        reduce: list.reduce,
        filter: list.filter,

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
