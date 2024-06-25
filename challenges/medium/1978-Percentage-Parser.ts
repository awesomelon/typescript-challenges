/*
  1978 - Percentage Parser
  -------
  by SSShuai1999 (@SSShuai1999) #보통 #template-literal

  ### 질문

  PercentageParser을 구현하세요. `/^(\+|\-)?(\d*)?(\%)?$/` 정규식에 따라 T를 일치시키고 3개의 일치 요소를 얻습니다
  구조는 [`더하기 혹은 빼기`, `숫자`,`단위`]와 같아야 합니다.
  일치 요소가 없다면, 기본값은 빈 문자열입니다.

  예시:

  ```ts
  type PString1 = ""
  type PString2 = "+85%"
  type PString3 = "-85%"
  type PString4 = "85%"
  type PString5 = "85"

  type R1 = PercentageParser<PString1> // expected ['', '', '']
  type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5> // expected ["", "85", ""]
  ```

  > GitHub에서 보기: https://tsch.js.org/1978/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 먼저 부호를 분리하는 유틸 타입을 만들자
// 첫 문자열에 + 나 - 부호 타입이 들어오는 경우
//   -> 부호와 나머지 문자열을 분리,
//   -> 아니면 빈 문자열을 앞에 추가
type SignSplitter<S extends string> =
  S extends `${infer Sign extends "+" | "-"}${infer Rest}`
    ? [Sign, Rest]
    : ["", S];

// 다음 퍼센트를 분리하는 유틸 타입을 만들자
// 마지막 문자가 % 로 끝나면
//   -> 문자열과 % 를 분리,
//   -> 아니면 마지막에 빈 문자열 추가
type PercentSplitter<S extends string> = S extends `${infer Rest}%`
  ? [Rest, "%"]
  : [S, ""];

// 이제 퍼센트 파서를 완성하자
// 먼저 사인을 분리하고
// 분리된 나머지를 퍼센트 분리 결과와 한 배열로 합친다.
type PercentageParser<S extends string> =
  SignSplitter<S> extends [infer Sign, infer R extends string]
    ? [Sign, ...PercentSplitter<R>]
    : S;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Case0 = ["", "", ""];
type Case1 = ["+", "", ""];
type Case2 = ["+", "1", ""];
type Case3 = ["+", "100", ""];
type Case4 = ["+", "100", "%"];
type Case5 = ["", "100", "%"];
type Case6 = ["-", "100", "%"];
type Case7 = ["-", "100", ""];
type Case8 = ["-", "1", ""];
type Case9 = ["", "", "%"];
type Case10 = ["", "1", ""];
type Case11 = ["", "100", ""];

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/1978/answer/ko
  > 정답 보기: https://tsch.js.org/1978/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
