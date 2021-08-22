/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Switch
 */

import * as React from "react";

export type SwitchStates = {

    readonly isOn: boolean;
    readonly isOff: boolean;

    readonly toggle: () => void;
    readonly turnOff: () => void;
    readonly turnOn: () => void;
};

export const useSwitch = (initial?: boolean): SwitchStates => {

    const [switchValue, setSwitch] = React.useState(typeof initial === 'boolean' ? initial : false);

    return {

        isOn: switchValue,
        isOff: !switchValue,

        toggle: () => {
            setSwitch(!switchValue);
        },
        turnOff: () => {
            setSwitch(false);
        },
        turnOn: () => {
            setSwitch(true);
        },
    };
};
