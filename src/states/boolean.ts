/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Boolean
 */

import * as React from "react";

export type BooleanStates = {

    readonly isTrue: boolean;
    readonly isFalse: boolean;

    readonly toggle: () => void;
    readonly replaceWithTrue: () => void;
    readonly replaceWithFalse: () => void;
};

export const useBoolean = (initial?: boolean): BooleanStates => {

    const [booleanValue, setBoolean] = React.useState(typeof initial === 'boolean' ? initial : false);

    return {

        isTrue: booleanValue,
        isFalse: !booleanValue,

        toggle: () => {
            setBoolean(!booleanValue);
        },
        replaceWithTrue: () => {
            setBoolean(true);
        },
        replaceWithFalse: () => {
            setBoolean(false);
        },
    };
};
