"use strict";
/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #쉬움 #promise #built-in

  ### 질문

  Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

  예시: 들어 `Promise<ExampleType>`이 있을 때, `ExampleType`을 어떻게 얻을 수 있을까요?

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```

  > 출처: [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

  > GitHub에서 보기: https://tsch.js.org/189/ko
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/189/answer/ko
  > 정답 보기: https://tsch.js.org/189/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
