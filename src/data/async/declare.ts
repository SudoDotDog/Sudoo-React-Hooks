/**
 * @author WMXPY
 * @namespace ReactHooks_Data_Async
 * @description Declare
 */

export const EmptyState = Symbol('Sudoo-React-Hooks-Async-Empty');
export const FailedState = Symbol('Sudoo-React-Hooks-Async-Failed');

export type AsyncDataType<T> = T | typeof EmptyState | typeof FailedState;
