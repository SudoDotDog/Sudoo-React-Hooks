/**
 * @author WMXPY
 * @namespace ReactHooks_Data
 * @description Declare
 */

export type AsyncDataResolver<T extends any = any> = () => T | Promise<T>;

export type DisposableAsyncDataResolver<T extends any = any> = () => T | Promise<T>;
export type DisposableAsyncDataDisposer = () => void;
