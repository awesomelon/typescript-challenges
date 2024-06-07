/* _____________ Your Code Here _____________ */
type ToCamelCase<S extends string> = S extends `${infer A}_${infer B}`
  ? ToCamelCase<`${A}${Capitalize<B>}`>
  : S;

type ToLowerCase<S extends string> =
  S extends Lowercase<S> ? S : `_${Lowercase<S>}`;

type ToSnakeCase<S extends string> = S extends `${infer A}${infer B}`
  ? `${ToLowerCase<A>}${ToSnakeCase<B>}`
  : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ToCamelCase<"hello_world">, "helloWorld">>,
  Expect<Equal<ToCamelCase<"this_is_my_day">, "thisIsMyDay">>,
  Expect<Equal<ToSnakeCase<"helloWorld">, "hello_world">>,
  Expect<Equal<ToSnakeCase<"thisIsMyDay">, "this_is_my_day">>,
  Expect<
    Equal<ToSnakeCase<"helloWorldTodayMyDay">, "hello_world_today_my_day">
  >,
];
