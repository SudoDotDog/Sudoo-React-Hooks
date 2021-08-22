/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Loading
 */

import * as React from "react";

export type LoadingStates = {

    readonly isLoading: boolean;

    readonly toggle: () => void;
    readonly finish: () => void;
    readonly start: () => void;
};

export const useLoading = (initial?: boolean): LoadingStates => {

    const [loading, setLoading] = React.useState(typeof initial === 'boolean' ? initial : false);

    return {

        isLoading: loading,

        toggle: () => {
            setLoading(!loading);
        },
        finish: () => {
            setLoading(false);
        },
        start: () => {
            setLoading(true);
        },
    };
};
