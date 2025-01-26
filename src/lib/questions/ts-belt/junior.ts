export const tsBeltJuniorQuestions = [
  {
    id: 1,
    title: "What does the `Option` type represent in ts-belt?",
    code: null,
    options: [
      "A type for handling success or failure",
      "A type for optional values that might be null or undefined",
      "A type for wrapping a promise",
      "A type for handling arrays",
    ],
    correctAnswer: 1,
    explanation:
      "The `Option` type is used to represent a value that might be `null` or `undefined`. It allows you to safely handle these cases.",
  },
  {
    id: 2,
    title:
      "Which method would you use to create an `Option` from a nullable value?",
    code: null,
    options: [
      "Option.fromNullable()",
      "Option.toNullable()",
      "Option.map()",
      "Option.chain()",
    ],
    correctAnswer: 0,
    explanation:
      "The `Option.fromNullable()` method safely converts a nullable value into an `Option` type, returning `some(value)` or `none`.",
  },
  {
    id: 3,
    title: "Which method is used to map the value inside an `Option`?",
    code: null,
    options: ["map()", "flatMap()", "getOrElse()", "filter()"],
    correctAnswer: 0,
    explanation:
      "The `map()` method is used to apply a function to the value inside an `Option` if it is `some(value)`.",
  },
  {
    id: 4,
    title: "What is the result of calling `getOrElse()` on an `Option.none`?",
    code: null,
    options: [
      "The value inside the `Option`",
      "A fallback value you provide",
      "An error is thrown",
      "A default value from `Option`",
    ],
    correctAnswer: 1,
    explanation:
      "The `getOrElse()` method returns the fallback value when the `Option` is `none`.",
  },
  {
    id: 5,
    title: "What does the `Err` type represent in `Result`?",
    code: null,
    options: [
      "A successful operation result",
      "An error or failure result",
      "A type for optional values",
      "A wrapped promise",
    ],
    correctAnswer: 1,
    explanation:
      "The `Err` type in a `Result` represents a failure or error, while `Ok` represents success.",
  },
  {
    id: 6,
    title:
      "What method can you use to handle both the `Ok` and `Err` cases in a `Result`?",
    code: null,
    options: ["map()", "chain()", "fold()", "flatMap()"],
    correctAnswer: 2,
    explanation:
      "The `fold()` method allows you to handle both the `Ok` and `Err` cases in a `Result` by providing two functions.",
  },
  {
    id: 7,
    title: "Which method on `Option` allows you to safely chain operations?",
    code: null,
    options: ["flatMap()", "map()", "getOrElse()", "toString()"],
    correctAnswer: 0,
    explanation:
      "The `flatMap()` method allows you to chain operations that return an `Option`, flattening the result into a single `Option`.",
  },
  {
    id: 8,
    title: "How do you transform the error value in a `Result`?",
    code: null,
    options: ["map()", "mapErr()", "flatMap()", "getOrElse()"],
    correctAnswer: 1,
    explanation:
      "The `mapErr()` method allows you to transform the error part of a `Result` while leaving the `Ok` part unchanged.",
  },
  {
    id: 9,
    title:
      "What will the following code return? `Option.none.filter(x => x > 5)`",
    code: `
  import { Option, none } from '@mobility/ts-belt';
  const result = none.filter(x => x > 5);
  `,
    options: [
      "some(5)",
      "none",
      "some(true)",
      "none because the value is not greater than 5",
    ],
    correctAnswer: 1,
    explanation:
      "The `filter()` method on an `Option.none` will always return `none` because no value exists to satisfy the condition.",
  },
  {
    id: 10,
    title:
      "What is the primary benefit of using `Option` and `Result` in ts-belt?",
    code: null,
    options: [
      "They provide a way to handle asynchronous data",
      "They ensure better type safety when handling nullable or error-prone values",
      "They are faster than normal JavaScript objects",
      "They automatically handle state management",
    ],
    correctAnswer: 1,
    explanation:
      "The primary benefit is that `Option` and `Result` provide better type safety, helping to avoid issues with `null` or `undefined` values and errors.",
  },
]
