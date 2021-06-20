/**
 * @author WMXPY
 * @namespace ReactHooks_Form
 * @description Field
 */

import * as React from "react";

export type FormFieldStates<T, H> = {

    readonly data: T;
    readonly hint?: H;

    readonly erroring: boolean;

    readonly update: (newData: T, clearError?: boolean) => void;

    readonly errorHint: (hint: H) => void;
    readonly clearError: () => void;
};

export const useFormField = <T extends any = any, H extends any = string>(
    initialData: T | (() => T),
    initialHint?: H | (() => H),
    initialError?: boolean,
): FormFieldStates<T, H> => {

    const [fieldData, setFieldData] = React.useState<T>(initialData);
    const [fieldHint, setFieldHint] = React.useState<H | undefined>(initialHint);
    const [erroring, setErroring] = React.useState(initialError ? true : false);

    const clearError = () => {

        setFieldHint(undefined);
        setErroring(false);
    };

    const update = (newData: T, shouldClearError?: boolean) => {

        setFieldData(newData);
        if (shouldClearError) {
            clearError();
        }
    };

    const errorHint = (hint: H) => {

        setFieldHint(hint);
        setErroring(true);
    };

    return {

        data: fieldData,
        hint: fieldHint,

        erroring,

        update,
        errorHint,
        clearError,
    };
};
