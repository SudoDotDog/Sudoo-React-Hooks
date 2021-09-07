/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description History
 */

import * as React from "react";

export type HistoryStates<T> = {

    readonly size: number;
    readonly histories: T[];
    readonly pushAndUpdate: (value: T) => void;
};

export const useHistory = <T>(initialValue?: T): HistoryStates<T> => {

    const [histories, setHistories] = React.useState<T[]>(initialValue ? [initialValue] : []);

    return {

        size: histories.length,
        histories,
        pushAndUpdate: (value: T): void => {
            setHistories((previousHistories: T[]) => [...previousHistories, value]);
        },
    };
};
