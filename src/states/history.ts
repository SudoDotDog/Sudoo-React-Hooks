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

    readonly pushAndUpdate: (value: T) => void;
    readonly popAndUpdate: () => void;
};

export const useHistory = <T>(setFunction: (value: T) => void, initialValue?: T): HistoryStates<T> => {

    const [histories, setHistories] = React.useState<T[]>(initialValue ? [initialValue] : []);

    return {

        size: histories.length,
        histories,

        updateLatest: () => {

            setFunction(histories[histories.length - 1]);
        },
        pushAndUpdate: (value: T): void => {

            setFunction(value);
            setHistories((previousHistories: T[]) => {
                return [...previousHistories, value];
            });
        },
        popAndUpdate: (): void => {

            if (histories.length > 1) {
                setFunction(histories[histories.length - 2]);
            } else if (histories.length === 1) {
                setFunction(histories[0]);
            }

            if (histories.length >= 1) {
                setHistories((previousHistories: T[]) => {
                    return previousHistories.slice(0, previousHistories.length - 1);
                });
            }
        },
    };
};
