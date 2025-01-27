export const zodIntermediateQuestions = [
  {
    id: 1,
    title: "How do you transform a value after successful validation in Zod?",
    code: null,
    options: [
      "Using `.transform()`",
      "Using `.map()`",
      "Using `.pipe()`",
      "Using `.refine()`",
    ],
    correctAnswer: 0,
    explanation:
      "Zod provides `.transform()` method to transform a validated value before returning it.",
  },
  {
    id: 2,
    title: "How do you handle multiple possible values for a schema in Zod?",
    code: null,
    options: [
      "By using `.or()`",
      "By using `.validate()`",
      "By using `.either()`",
      "By using `.alt()`",
    ],
    correctAnswer: 0,
    explanation:
      "The `.or()` method allows combining schemas where either one schema or another must validate the input.",
  },
  {
    id: 3,
    title: "What does the `.refine()` method do in Zod?",
    code: null,
    options: [
      "It applies a custom transformation to the validated data",
      "It adds custom validation logic to the schema",
      "It modifies the error messages",
      "It refines the type to a specific type",
    ],
    correctAnswer: 1,
    explanation:
      "The `.refine()` method is used to apply custom validation logic on the schema's data.",
  },
  {
    id: 4,
    title: "How do you combine multiple schemas for an object in Zod?",
    code: null,
    options: [
      "By using `.extend()`",
      "By using `.merge()`",
      "By using `.combine()`",
      "By using `.group()`",
    ],
    correctAnswer: 1,
    explanation:
      "Zod allows you to combine multiple schemas for objects using `.merge()`.",
  },
  {
    id: 5,
    title: "How do you set a default value for a field in a Zod schema?",
    code: null,
    options: [
      "By using `.default()`",
      "By using `.set()`",
      "By using `.fill()`",
      "By using `.initialize()`",
    ],
    correctAnswer: 0,
    explanation:
      "The `.default()` method is used in Zod to set default values for fields in a schema.",
  },
  {
    id: 6,
    title: "What does the `.optional()` method do in Zod?",
    code: null,
    options: [
      "Makes the field optional",
      "Makes the field required",
      "Sets the field to null",
      "Allows any type of field",
    ],
    correctAnswer: 0,
    explanation:
      "The `.optional()` method marks a field as optional, meaning it may be omitted in the input data.",
  },
  {
    id: 7,
    title: "Which method should you use to validate a UUID in Zod?",
    code: null,
    options: [
      "z.string().uuid()",
      "z.string().validateUUID()",
      "z.uuid()",
      "z.string().checkUUID()",
    ],
    correctAnswer: 0,
    explanation:
      "The `.uuid()` method, when chained to `z.string()`, is used to validate UUID strings in Zod.",
  },
  {
    id: 8,
    title: "What is the purpose of `.catch()` in Zod?",
    code: null,
    options: [
      "To catch errors in a promise",
      "To handle validation errors and return a fallback value",
      "To catch type errors",
      "To handle runtime errors in schemas",
    ],
    correctAnswer: 1,
    explanation:
      "The `.catch()` method is used to catch validation errors in Zod and return a fallback value or handle the error.",
  },
  {
    id: 9,
    title: "Which of these is a valid use of `.literal()` in Zod?",
    code: null,
    options: [
      "Defines a schema that accepts only the literal value 'hello'",
      "Defines a schema for any string",
      "Defines a schema for any number",
      "Defines a schema for undefined values",
    ],
    correctAnswer: 0,
    explanation:
      "`z.literal('hello')` creates a schema that only accepts the literal value 'hello'.",
  },
  {
    id: 10,
    title:
      "How do you create a schema that accepts either a number or a string in Zod?",
    code: null,
    options: [
      "By using `.union([z.number(), z.string()])`",
      "By using `.or(z.number(), z.string())`",
      "By using `.either(z.number(), z.string())`",
      "By using `.combine(z.number(), z.string())`",
    ],
    correctAnswer: 0,
    explanation:
      "The `.union()` method is used to define a schema that accepts multiple types, such as `z.number()` or `z.string()`.",
  },
]
