/**
 * @author WMXPY
 * @namespace ReactHooks_Data
 * @description Declare
 */

export type AsyncDataResolver<T = any> = () => T | Promise<T>;
export type NamedAsyncDataResolver<T = any, Args extends any[] = []> = (...args: Args) => T | Promise<T>;

export type DisposableAsyncDataResolver<T = any> = () => T | Promise<T>;
export type DisposableAsyncDataDisposer = () => void;
