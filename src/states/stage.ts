/**
 * @author WMXPY
 * @namespace ReactHooks_States
 * @description Stage
 */

import * as React from "react";

export type StageStates<T> = {

    readonly currentStage: T;

    readonly updateStage: (stage: T) => void;
    readonly resetStage: () => void;
};

export const useStage = <T extends string>(initialStage: T): StageStates<T> => {

    const refInitialStage: React.MutableRefObject<T> = React.useRef<T>(initialStage);

    const [currentStage, setCurrentStage] = React.useState<T>(initialStage);

    return {

        currentStage,

        updateStage: (stage: T) => {
            setCurrentStage(stage);
        },
        resetStage: () => {
            setCurrentStage(refInitialStage.current);
        },
    };
};
