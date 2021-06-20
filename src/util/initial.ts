/**
 * @author WMXPY
 * @namespace ReactHooks_Util
 * @description Initial
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export type AvailableInitialValue = string | number | bigint | boolean | symbol | object | undefined | object;

export const extractInitialValue = <T extends AvailableInitialValue>(initialValue: T | (() => T)): T => {

    if (typeof initialValue === 'function') {
        return initialValue();
    }
    return initialValue;
};
