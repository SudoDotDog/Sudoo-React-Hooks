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

    readonly push: (value: T) => T[];
    readonly pop: () => T[];

    readonly pushAndUpdate: (value: T) => T[];
    readonly popAndUpdate: () => T[];
};

const commonUpdateLatest = <T>(overrideHistories: T[], setFunction: (value: T | null) => void) => {

    if (overrideHistories.length > 0) {
        setFunction(overrideHistories[overrideHistories.length - 1]);
    } else {
        setFunction(null);
    }
};

export const useHistory = <T>(setFunction: (value: T | null) => void, initialValue?: T): HistoryStates<T> => {

    const [histories, setHistories] = React.useState<T[]>(initialValue ? [initialValue] : []);

    const updateLatest = () => {
        commonUpdateLatest(histories, setFunction);
    };

    const push = (value: T): T[] => {

        const newHistories: T[] = [...histories, value];
        setHistories(newHistories);

        return newHistories;
    };

    const pop = (): T[] => {

        if (histories.length >= 1) {

            const newHistories: T[] = histories.slice(0, histories.length - 1);
            setHistories(newHistories);
            return newHistories;
        }
        return [];
    };

    const pushAndUpdate = (value: T): T[] => {

        const newHistories = push(value);
        commonUpdateLatest(newHistories, setFunction);
        return newHistories;
    };

    const popAndUpdate = (): T[] => {

        const newHistories = pop();
        commonUpdateLatest(newHistories, setFunction);
        return newHistories;
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
