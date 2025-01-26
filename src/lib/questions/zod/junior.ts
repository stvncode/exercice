export const zodJuniorQuestions = [
  {
    id: 1,
    title: "What is Zod?",
    code: null,
    options: [
      "A CSS framework",
      "A database management tool",
      "A TypeScript-first schema validation library",
      "A testing framework",
    ],
    correctAnswer: 2,
    explanation:
      "Zod is a TypeScript-first schema declaration and validation library, used for validating and parsing data.",
  },
  {
    id: 2,
    title: "Which method is used to validate a string in Zod?",
    code: null,
    options: [
      "z.string().min()",
      "z.string().validate()",
      "z.string().length()",
      "z.string().check()",
    ],
    correctAnswer: 0,
    explanation:
      "The `z.string().min()` method is used to validate a string and ensure it meets the minimum length requirement.",
  },
  {
    id: 3,
    title: "What does the `safeParse` method return in Zod?",
    code: null,
    options: [
      "An error object",
      "A validation result object",
      "A boolean indicating success",
      "A new instance of the object",
    ],
    correctAnswer: 1,
    explanation:
      "`safeParse` returns an object with `success` (boolean) and `error` (optional) fields to indicate if the validation passed or failed.",
  },
  {
    id: 4,
    title: "How do you check if a validation passed in Zod?",
    code: null,
    options: [
      "By checking the `error` field of the result",
      "By using `result.success`",
      "By calling `result.validate()`",
      "By using the `check()` method",
    ],
    correctAnswer: 1,
    explanation:
      "Zod's validation result has a `success` boolean that indicates whether the validation passed or failed.",
  },
  {
    id: 5,
    title: "Which method is used to create a schema for a number in Zod?",
    code: null,
    options: ["z.number()", "z.int()", "z.float()", "z.num()"],
    correctAnswer: 0,
    explanation:
      "`z.number()` is used to define a schema for validating numbers in Zod.",
  },
  {
    id: 6,
    title: "Which Zod method would you use to ensure a string is not empty?",
    code: null,
    options: [
      "z.string().min(1)",
      "z.string().notEmpty()",
      "z.string().exists()",
      "z.string().required()",
    ],
    correctAnswer: 0,
    explanation:
      "The `z.string().min(1)` method ensures that the string has at least one character, effectively making it non-empty.",
  },
  {
    id: 7,
    title: "Which of the following validates an email address in Zod?",
    code: null,
    options: [
      "z.email()",
      "z.string().email()",
      "z.string().isEmail()",
      "z.string().matchEmail()",
    ],
    correctAnswer: 1,
    explanation:
      "`z.string().email()` is used to validate email addresses in Zod.",
  },
  {
    id: 8,
    title: "How can you create a required field in Zod for an object?",
    code: null,
    options: [
      "By using `z.object().required()`",
      "By using `z.object().min()`",
      "By defining the object schema without `.optional()`",
      "By passing a boolean parameter to the object schema",
    ],
    correctAnswer: 2,
    explanation:
      "To create a required field in Zod, just define the object schema without using `.optional()` for the specific field.",
  },
  {
    id: 9,
    title: "What is the purpose of the `z.array()` method?",
    code: null,
    options: [
      "To validate an array of values",
      "To define a set of unique values",
      "To create a list of numbers",
      "To create an object array schema",
    ],
    correctAnswer: 0,
    explanation:
      "`z.array()` is used to define and validate an array of values, where the type of values in the array can be defined as well.",
  },
  {
    id: 10,
    title: "How do you validate an integer in Zod?",
    code: null,
    options: [
      "z.int()",
      "z.number().integer()",
      "z.number().isInt()",
      "z.integer()",
    ],
    correctAnswer: 1,
    explanation:
      "`z.number().integer()` is used in Zod to validate that a number is an integer.",
  },
]
