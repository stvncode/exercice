export const zodSeniorQuestions = [
  {
    id: 1,
    title:
      "How do you perform conditional validation in Zod based on other fields?",
    code: null,
    options: [
      "By using `.when()`",
      "By using `.refine()` with a condition",
      "By using `.conditional()`",
      "By using `.check()`",
    ],
    correctAnswer: 1,
    explanation:
      "Conditional validation in Zod can be performed using `.refine()` to implement complex conditions between fields.",
  },
  {
    id: 2,
    title:
      "How would you validate a schema where each item in an array must be a unique value?",
    code: null,
    options: [
      "By using `.unique()` on the array schema",
      "By using `.distinct()` on the array schema",
      "By using `.refine()` to check uniqueness manually",
      "Zod does not support uniqueness validation",
    ],
    correctAnswer: 2,
    explanation:
      "Zod doesn't have a built-in `.unique()` method, but uniqueness can be enforced using `.refine()` to check if all elements are unique.",
  },
  {
    id: 3,
    title:
      "How would you handle Zod validation errors and provide custom error messages?",
    code: null,
    options: [
      "By using `.catch()` and passing a custom message",
      "By using `.refine()` with a custom error message",
      "By using `.error()` to define custom error messages",
      "By passing a message parameter to each validation method",
    ],
    correctAnswer: 1,
    explanation:
      "Custom error messages can be added in Zod using `.refine()` by passing a custom message when the validation fails.",
  },
  {
    id: 4,
    title: "How do you perform type narrowing using Zod in TypeScript?",
    code: null,
    options: [
      "By using `.transform()`",
      "By using `.refine()`",
      "By using `.check()`",
      "By using `.assert()`",
    ],
    correctAnswer: 0,
    explanation:
      "Zod allows you to narrow types using `.transform()`. This can be used to refine the data type after validation.",
  },
  {
    id: 5,
    title:
      "What is the best way to define a schema that supports nested objects with Zod?",
    code: null,
    options: [
      "By using `.nested()`",
      "By using `.object()` with nested Zod schemas",
      "By chaining `.object()` multiple times",
      "By using `.merge()` for nested objects",
    ],
    correctAnswer: 1,
    explanation:
      "In Zod, nested objects can be defined by using `.object()` for each nested level, and then chaining them together.",
  },
  {
    id: 6,
    title:
      "How do you define and validate a schema with an unknown object structure in Zod?",
    code: null,
    options: [
      "By using `z.unknown()`",
      "By using `z.object().passthrough()`",
      "By using `z.object().catchAll()`",
      "By using `z.any()`",
    ],
    correctAnswer: 2,
    explanation:
      "Zod allows you to define a schema for an unknown object using `.catchAll()`, which allows any key-value pairs to be validated.",
  },
  {
    id: 7,
    title:
      "How do you handle an optional field with custom validation logic in Zod?",
    code: null,
    options: [
      "By using `.optional()` with `.refine()`",
      "By using `.nullable()`",
      "By using `.default()` and applying custom validation",
      "By using `.check()` on the optional field",
    ],
    correctAnswer: 0,
    explanation:
      "You can define an optional field with custom validation logic by combining `.optional()` and `.refine()` for additional checks.",
  },
  {
    id: 8,
    title:
      "How do you apply a custom transformation to an array of objects in Zod?",
    code: null,
    options: [
      "By using `.map()` on the array schema",
      "By using `.transform()` on the array schema",
      "By using `.each()` on the array schema",
      "By using `.refine()` on each object in the array",
    ],
    correctAnswer: 1,
    explanation:
      "Zod allows transformations on arrays using `.transform()` to apply a transformation to each item in the array.",
  },
  {
    id: 9,
    title:
      "How do you define a schema for a set of values that are either strings or numbers, but not both at the same time?",
    code: null,
    options: [
      "By using `.union()` and `.refine()` to enforce the exclusive types",
      "By using `.or()` to combine string and number schemas",
      "By using `.intersection()`",
      "By using `.alternative()`",
    ],
    correctAnswer: 0,
    explanation:
      "You can enforce exclusive types by combining `.union()` and `.refine()` to ensure that the input data is either a string or a number but not both.",
  },
  {
    id: 10,
    title:
      "How do you handle schema validation with multiple asynchronous conditions in Zod?",
    code: null,
    options: [
      "By using `.async()` with promises",
      "By using `.refine()` with asynchronous checks",
      "By using `.validateAsync()`",
      "Zod does not support asynchronous schema validations",
    ],
    correctAnswer: 1,
    explanation:
      "Zod supports asynchronous validation by using `.refine()` with an asynchronous function to validate the data.",
  },
]
