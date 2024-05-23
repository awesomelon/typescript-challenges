"use strict";
/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #쉬움 #union #built-in

  ### 질문

  `T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > GitHub에서 보기: https://tsch.js.org/4/ko
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/4/answer/ko
  > 정답 보기: https://tsch.js.org/4/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
