export const tsBeltIntermediateQuestions = [
  {
    id: 1,
    title: "How would you transform a `Result` into an `Option`?",
    code: null,
    options: [
      "Using `map()`",
      "Using `flatMap()`",
      "Using `toOption()`",
      "Using `fromNullable()`",
    ],
    correctAnswer: 2,
    explanation:
      "The `toOption()` method converts a `Result` into an `Option`, where `Ok` is converted to `some(value)` and `Err` to `none`.",
  },
  {
    id: 2,
    title: "What does the `chain()` method do in `Option`?",
    code: null,
    options: [
      "It transforms the value inside an `Option`",
      "It chains multiple `Option` operations, returning a flattened `Option`",
      "It throws an error if the `Option` is `none`",
      "It filters the value inside the `Option`",
    ],
    correctAnswer: 1,
    explanation:
      "The `chain()` method is similar to `flatMap()` and allows you to apply a function that returns an `Option`, flattening the result into a single `Option`.",
  },
  {
    id: 3,
    title: "What is the result of calling `Option.fromNullable(null)`?",
    code: null,
    options: ["some(null)", "none", "some(undefined)", "undefined"],
    correctAnswer: 1,
    explanation:
      "`Option.fromNullable(null)` will return `none` because `null` is treated as a missing value.",
  },
  {
    id: 4,
    title:
      "Which method is used to merge two `Option` values into a single `Option`?",
    code: null,
    options: ["combine()", "merge()", "getOrElse()", "alt()"],
    correctAnswer: 3,
    explanation:
      "The `alt()` method is used to combine two `Option` values, returning the first `some(value)` or `none` if both are `none`.",
  },
  {
    id: 5,
    title:
      "In ts-belt, how would you handle multiple possible error cases in a `Result`?",
    code: null,
    options: [
      "By using `mapErr()`",
      "By using `fold()`",
      "By using `flatMap()`",
      "By using `map()`",
    ],
    correctAnswer: 0,
    explanation:
      "The `mapErr()` method is used to transform the error part of a `Result`, allowing you to handle different error cases.",
  },
  {
    id: 6,
    title: "Which of the following statements is true about `Option`?",
    code: null,
    options: [
      "`Option.none` is always equal to `null`",
      "`Option.some(value)` can only wrap non-null values",
      "`Option` can only contain primitive values",
      "`Option` can only be used for arrays",
    ],
    correctAnswer: 1,
    explanation:
      "`Option.some(value)` can wrap any value, including null or undefined, but it represents a non-missing value in a safe way.",
  },
  {
    id: 7,
    title:
      "What will be the output of the following code snippet?\n`Option.some(5).map(x => x * 2).getOrElse(0)`",
    code: `
  import { Option } from '@mobility/ts-belt';
  const result = Option.some(5).map(x => x * 2).getOrElse(0);
  `,
    options: ["10", "5", "0", "some(10)"],
    correctAnswer: 0,
    explanation:
      "The `map()` method will transform the value inside the `Option` to `10`, and `getOrElse(0)` will return `10` because the `Option` is `some(10)`.",
  },
  {
    id: 8,
    title: "What does the `isSome()` method do in `Option`?",
    code: null,
    options: [
      "It checks if the value inside an `Option` is `undefined`",
      "It checks if the value inside an `Option` is `none`",
      "It checks if the value inside an `Option` is present (`some`) or missing (`none`)",
      "It transforms the value inside an `Option`",
    ],
    correctAnswer: 2,
    explanation:
      "The `isSome()` method checks if the value inside an `Option` is present, i.e., it is `some(value)` rather than `none`.",
  },
  {
    id: 9,
    title: "How do you unwrap the value inside an `Option` in ts-belt?",
    code: null,
    options: [
      "Using `unwrap()`",
      "Using `get()`",
      "Using `getOrElse()`",
      "Using `value()`",
    ],
    correctAnswer: 2,
    explanation:
      "The `getOrElse()` method returns the value inside the `Option` if it is `some(value)`, or a fallback value if it is `none`.",
  },
  {
    id: 10,
    title: "What does the `map()` method do in `Result`?",
    code: null,
    options: [
      "It applies a function to the error value of the `Result`",
      "It applies a function to the success value of the `Result`",
      "It converts a `Result` to an `Option`",
      "It transforms the `Result` into a new `Result`",
    ],
    correctAnswer: 1,
    explanation:
      "The `map()` method applies a function to the success (`Ok`) value inside the `Result`, leaving the error (`Err`) unchanged.",
  },
]
