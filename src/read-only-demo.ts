/* eslint-disable @typescript-eslint/no-unused-vars */
/*  noinspection JSUnusedLocalSymbols */
/**
 * The TypeScript "readonly" keyword can be used for:
 *   to declare readonly object properties on object type definitions
 *   to declare immutable arrays
 *
 * Between the javascript keyword "const" and the TypeScript keyword "readonly"
 *   you can really enforce an immutable, functional programming style,
 *   which is particularly useful in react.
 */

/**
 * Make properties read-only
 */
export type Person = {
    readonly fn: string;
    readonly ln: string;
}

const p1: Person = {fn: 'Dave', ln: 'Ford'};
const p2: Person = {fn: 'Joe', ln: 'Blow'};
const p3: Person = {fn: 'Sue', ln: 'Jones'};

//  p1.fn = 'Bill';   // not allowed


/**
 * Make arrays immutable
 */
const a: readonly Person[] = [p1, p2];

// a[0] = p3;   // not allowed
// a.push(p3);  // not allowed
