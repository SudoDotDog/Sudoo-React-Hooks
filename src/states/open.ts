/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Open
 */

import * as React from "react";

export type OpenStates = {

    readonly isOpen: boolean;

    readonly toggle: () => void;
    readonly close: () => void;
    readonly open: () => void;
};

export const useOpen = (): OpenStates => {

    const [open, setOpen] = React.useState(false);

    return {

        isOpen: open,

        toggle: () => {
            setOpen(!open);
        },
        close: () => {
            setOpen(false);
        },
        open: () => {
            setOpen(true);
        },
    };
};
