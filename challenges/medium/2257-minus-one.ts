/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

// Reverses a string: '123' -> '321'
type Reverse<
  S extends string,
  A extends string = "",
> = S extends `${infer F}${infer R}` ? Reverse<R, `${F}${A}`> : A;

// Subtract one from a digit: '1' -> '0', '5' -> '4', '0' -> '9'
type DigitMinusOne<D extends string> =
  "09876543210" extends `${string}${D}${infer R}${string}` ? R : never;

// Subtract one from a reversed number: '5' -> '4', '01' -> '9', '51' -> '41', '001' -> '99'
type RevMinusOne<T extends string> = T extends `${infer F}${infer N}${infer R}`
  ? // if `T` is a multi-digit number like '01', '55' or '123'
    F extends "0"
    ? `9${RevMinusOne<`${N}${R}`>}`
    : `${DigitMinusOne<F>}${N}${R}`
  : // if `T` is a single-digit number like '0', '1' or '8'
    T extends "0"
    ? "1-"
    : T extends "1"
      ? ""
      : DigitMinusOne<T>;

// Add one to a digit: '0' -> '1', '4' -> '9', '9' -> '0'
type DigitPlusOne<D extends string> =
  "01234567890" extends `${string}${D}${infer R}${string}` ? R : never;

// Add one to a reversed number: '4' -> '9', '9' -> '01', '41' -> '51', '99' -> '001'
type RevPlusOne<T extends string> = T extends `${infer F}${infer N}${infer R}`
  ? // if `T` is a multi-digit number like '01', '55' or '123'
    F extends "9"
    ? `0${RevPlusOne<`${N}${R}`>}`
    : `${DigitPlusOne<F>}${N}${R}`
  : // if `T` is a single-digit number like '0', '1' or '8'
    T extends "9"
    ? "01"
    : DigitPlusOne<T>;

type MinusOne<T extends number> = `${T}` extends `-${infer AbsT}`
  ? // if `T` is negative - add one to the absolute value of the number
    // and then add back the '-' sign
    `-${Reverse<RevPlusOne<Reverse<AbsT>>>}` extends `${infer Res extends number}`
    ? Res
    : never
  : // if `T` is positive - same as before
    Reverse<RevMinusOne<Reverse<`${T}`>>> extends `${infer Res extends number}`
    ? Res
    : 0;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
