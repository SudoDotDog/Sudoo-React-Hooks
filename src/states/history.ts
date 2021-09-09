/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description History
 */

import * as React from "react";

export type HistoryStates<T> = {

    readonly size: number;
    readonly histories: T[];

    readonly updateLatest: () => void;

    readonly push: (value: T) => void;
    readonly pop: () => void;

    readonly pushAndUpdate: (value: T) => void;
    readonly popAndUpdate: () => void;
};

export const useHistory = <T>(setFunction: (value: T) => void, initialValue?: T): HistoryStates<T> => {

    const [histories, setHistories] = React.useState<T[]>(initialValue ? [initialValue] : []);

    const updateLatest = () => {
        setFunction(histories[histories.length - 1]);
    };

    const push = (value: T): void => {
        setHistories((previousHistories: T[]) => {
            return [...previousHistories, value];
        });
    };

    const pop = (): void => {
        if (histories.length >= 1) {
            setHistories((previousHistories: T[]) => {
                return previousHistories.slice(0, previousHistories.length - 1);
            });
        }
    };

    const pushAndUpdate = (value: T): void => {
        setFunction(value);
        push(value);
    };

    const popAndUpdate = (): void => {
        if (histories.length > 1) {
            setFunction(histories[histories.length - 2]);
        } else if (histories.length === 1) {
            setFunction(histories[0]);
        }

        pop();
    };

    return {

        size: histories.length,
        histories,

        updateLatest,

        push,
        pop,

        pushAndUpdate,
        popAndUpdate,
    };
};
