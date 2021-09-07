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

export type VectorModifier = {

    readonly x?: number;
    readonly y?: number;
    readonly z?: number;
};

export type VectorStates = {

    readonly x: number;
    readonly y: number;
    readonly z: number;

    readonly xOffset: number;
    readonly yOffset: number;
    readonly zOffset: number;

    readonly xModifier: number;
    readonly yModifier: number;
    readonly zModifier: number;

    readonly setX: (x: number) => void;
    readonly setY: (y: number) => void;
    readonly setZ: (z: number) => void;

    readonly setAll: (value: number) => void;
};

export const useVector = (modifier?: VectorModifier, init?: VectorInitial): VectorStates => {

    const fixedInit: VectorInitial = typeof init === 'undefined' ? {} : init;
    const fixedModifier: VectorModifier = typeof modifier === 'undefined' ? {} : modifier;

    const [X, setX] = React.useState(typeof fixedInit.x === 'number' ? fixedInit.x : 0);
    const [Y, setY] = React.useState(typeof fixedInit.y === 'number' ? fixedInit.y : 0);
    const [Z, setZ] = React.useState(typeof fixedInit.z === 'number' ? fixedInit.z : 0);

    const xModifier: number = typeof fixedModifier.x === 'number' ? fixedModifier.x : 0;
    const yModifier: number = typeof fixedModifier.y === 'number' ? fixedModifier.y : 0;
    const zModifier: number = typeof fixedModifier.z === 'number' ? fixedModifier.z : 0;

    const setAll = (value: number): void => {

        setX(value);
        setY(value);
        setZ(value);
    };

    return {

        x: X + xModifier,
        y: Y + yModifier,
        z: Z + zModifier,

        xOffset: X,
        yOffset: Y,
        zOffset: Z,

        xModifier,
        yModifier,
        zModifier,

        setX,
        setY,
        setZ,

        setAll,
    };
};
