export const tsBeltSeniorQuestions = [
  {
    id: 1,
    title:
      "How can you safely combine multiple `Result` values into a single `Result`?",
    code: null,
    options: [
      "Using `alt()`",
      "Using `combine()`",
      "Using `flatMap()`",
      "Using `fold()`",
    ],
    correctAnswer: 1,
    explanation:
      "The `combine()` method can be used to combine multiple `Result` values, handling both the `Ok` and `Err` cases safely and returning a new `Result`.",
  },
  {
    id: 2,
    title: "What does `Option.flatten()` do in ts-belt?",
    code: null,
    options: [
      "It flattens nested `Option` types into a single `Option`",
      "It unwraps an `Option` into its underlying value",
      "It applies a function to the value inside an `Option`",
      "It returns a default value if `Option` is `none`",
    ],
    correctAnswer: 0,
    explanation:
      "`Option.flatten()` is used to flatten a nested `Option` (i.e., an `Option<Option<T>>`) into a single `Option<T>`.",
  },
  {
    id: 3,
    title: "What is the purpose of the `Option.filter()` method?",
    code: null,
    options: [
      "To apply a condition to filter the value inside the `Option`",
      "To transform the value inside the `Option` based on a condition",
      "To check if the value is a valid `Option`",
      "To flatten the `Option` into another `Option`",
    ],
    correctAnswer: 0,
    explanation:
      "`Option.filter()` is used to filter the value inside the `Option` based on a predicate. If the condition is met, it returns `some(value)`; otherwise, it returns `none`.",
  },
  {
    id: 4,
    title:
      "Which of the following ts-belt methods allows you to execute side effects for `Option` or `Result` without modifying the value?",
    code: null,
    options: ["map()", "flatMap()", "forEach()", "getOrElse()"],
    correctAnswer: 2,
    explanation:
      "The `forEach()` method allows you to execute side effects on the value inside an `Option` or `Result` without modifying the value itself.",
  },
  {
    id: 5,
    title:
      "How do you transform a `Result` value into an `Option` while keeping the error value intact?",
    code: null,
    options: [
      "Using `toOption()`",
      "Using `mapErr()`",
      "Using `flatten()`",
      "Using `getOrElse()`",
    ],
    correctAnswer: 0,
    explanation:
      "`toOption()` converts a `Result` into an `Option`. If it's `Ok(value)`, it becomes `some(value)`, and if it's `Err(error)`, it becomes `none`.",
  },
  {
    id: 6,
    title:
      "How do you handle a fallback value when using `Option` with a custom error message?",
    code: null,
    options: [
      "Using `getOrElse()` with a default value",
      "Using `unwrapOrElse()`",
      "Using `alt()`",
      "Using `mapErr()`",
    ],
    correctAnswer: 1,
    explanation:
      "`unwrapOrElse()` allows you to provide a function to generate a fallback value when the `Option` is `none`. It can be used to generate custom error messages or default values.",
  },
  {
    id: 7,
    title: "What does `Result.flatten()` do in ts-belt?",
    code: null,
    options: [
      "Flattens nested `Result` types into a single `Result`",
      "Returns a new `Result` with the same value",
      "Unwraps the `Result` and returns the value",
      "Combines `Result` with `Option`",
    ],
    correctAnswer: 0,
    explanation:
      "`Result.flatten()` is used to flatten nested `Result` types (i.e., `Result<Result<T, E>, E>`) into a single `Result<T, E>`.",
  },
  {
    id: 8,
    title: "What is the difference between `map()` and `flatMap()` in ts-belt?",
    code: null,
    options: [
      "`map()` transforms the value inside the `Option` or `Result`, while `flatMap()` is used to chain multiple operations that return an `Option` or `Result`",
      "`map()` applies a side effect, while `flatMap()` transforms the value",
      "`map()` works only with arrays, while `flatMap()` works with objects",
      "`map()` is used for transformation, while `flatMap()` is used for validation",
    ],
    correctAnswer: 0,
    explanation:
      "`map()` transforms the value inside an `Option` or `Result`, while `flatMap()` is used to chain operations that return an `Option` or `Result`, flattening the results into a single value.",
  },
  {
    id: 9,
    title:
      "How would you handle a sequence of operations that might fail, ensuring all operations are successful before proceeding?",
    code: null,
    options: [
      "Use `alt()` to chain operations and handle failures",
      "Use `combine()` to merge results and ensure success",
      "Use `map()` for each operation to propagate errors",
      "Use `chain()` to ensure all operations return successful results before continuing",
    ],
    correctAnswer: 3,
    explanation:
      "`chain()` allows you to chain operations that return `Option` or `Result` types and ensures that each operation is successful before continuing to the next.",
  },
  {
    id: 10,
    title:
      "What will happen if you call `getOrElse()` on an `Option` containing `undefined`?",
    code: `
  import { Option } from '@mobility/ts-belt';
  const result = Option.some(undefined).getOrElse('default');
  `,
    options: [
      "It will return `undefined`",
      "It will return the fallback value (`'default'`)",
      "It will throw an error",
      "It will return `none`",
    ],
    correctAnswer: 1,
    explanation:
      "Calling `getOrElse()` on an `Option.some(undefined)` will return the fallback value since `undefined` is considered a value, but `Option` is designed to allow a fallback in case of a missing value.",
  },
]
