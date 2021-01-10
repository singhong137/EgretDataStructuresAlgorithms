import { defaultEquals, DOES_NOT_EXIST, IEqualsFunction } from "../../utils";

export function sequentialSearch<T>(array: T[], value: T, equalsFn: IEqualsFunction<T> = defaultEquals): number {
    for (let i = 0; i < array.length; i++)if (equalsFn(value, array[i])) return i;
    return DOES_NOT_EXIST;
}