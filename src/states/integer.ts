/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Integer
 */

import * as React from "react";

export type IntegerStates = {

    readonly value: number;
    readonly minimum: number;
    readonly maximum: number;

    readonly setValue: (value: number) => void;
    readonly addValue: (value: number) => void;
    readonly subtractValue: (value: number) => void;

    readonly setMinimum: (value: number) => void;
    readonly setMaximum: (value: number) => void;
};

export type UseIntegerOptions = {

    readonly minimum?: number;
    readonly maximum?: number;
};

export const useInteger = (initial?: number, options: UseIntegerOptions = {}): IntegerStates => {

    const [currentValue, setCurrentValue] = React.useState(typeof initial === 'number' ? initial : 0);

    const [minimum, setMinimum] = React.useState(typeof options.minimum === 'number' ? options.minimum : Number.MIN_SAFE_INTEGER);
    const [maximum, setMaximum] = React.useState(typeof options.maximum === 'number' ? options.maximum : Number.MAX_SAFE_INTEGER);

    const setCurrentValueFunction = (value: number) => {
        if (value < minimum) {
            setCurrentValue(minimum);
        } else if (value > maximum) {
            setCurrentValue(maximum);
        } else {
            setCurrentValue(Math.floor(value));
        }
        return;
    };

    return {

        value: currentValue,
        minimum,
        maximum,

        setValue: setCurrentValueFunction,
        addValue: (value: number) => setCurrentValueFunction(value + currentValue),
        subtractValue: (value: number) => setCurrentValueFunction(value - currentValue),

        setMinimum: (value: number) => setMinimum(Math.floor(value)),
        setMaximum: (value: number) => setMaximum(Math.floor(value)),
    };
};
