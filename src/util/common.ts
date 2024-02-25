export type RequiredKeys<T> = {
    [K in keyof T]-?: NonNullable<unknown> extends Pick<T, K> ? never : K;
}[keyof T];
export type OptionalKeys<T> = {
    [K in keyof T]-?: NonNullable<unknown> extends Pick<T, K> ? K : never;
}[keyof T];

export type OmitOptional<T> = Pick<T, RequiredKeys<T>>;
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type ArrayElements<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer S>
    ? S
    : never;

// Reference:
// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
export function camelToTitle(camel: string): string {
    let title = camel.replace(/([A-Z])/g, " $1");
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
}

export function camelToKebab(camel: string) {
    // Split off first character so function works on upper camel (pascal) case
    return (camel[0] + camel.slice(1).replace(/[A-Z]/g, c => `-${c}`)).toLowerCase();
}

export function isFunction<T, S extends ReadonlyArray<unknown>, R>(
    functionOrValue: ((...args: S) => T) | R
): functionOrValue is (...args: S) => T {
    return typeof functionOrValue === "function";
}

export enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
    Default = "Up"
}
