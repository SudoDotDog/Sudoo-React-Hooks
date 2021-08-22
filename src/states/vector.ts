/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Vector
 */

import * as React from "react";

export type VectorInitial = {

    readonly x?: number;
    readonly y?: number;
    readonly z?: number;
};

export type VectorStates = {

    readonly x: number;
    readonly y: number;
    readonly z: number;

    readonly setX: (x: number) => void;
    readonly setY: (y: number) => void;
    readonly setZ: (z: number) => void;
};

export const useVector = (init?: VectorInitial): VectorStates => {

    const fixedInit: VectorInitial = typeof init === 'undefined'
        ? {}
        : init;

    const [X, setX] = React.useState(fixedInit.x ?? 0);
    const [Y, setY] = React.useState(fixedInit.y ?? 0);
    const [Z, setZ] = React.useState(fixedInit.z ?? 0);

    return {

        x: X,
        y: Y,
        z: Z,

        setX,
        setY,
        setZ,
    };
};