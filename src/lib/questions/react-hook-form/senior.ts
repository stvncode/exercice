export const reactHookFormSeniorQuestions = [
  {
    id: 1,
    title:
      "How can you integrate React Hook Form with a custom input component?",
    code: null,
    options: [
      "Using the `Controller` component",
      "Directly passing the `register` function to the custom component",
      "Using `useController` to wrap the component",
      "React Hook Form doesn't support custom components",
    ],
    correctAnswer: 0,
    explanation:
      "The `Controller` component is used to integrate React Hook Form with custom or third-party components by managing their state and validation.",
  },
  {
    id: 2,
    title:
      "How do you optimize performance for large forms in React Hook Form?",
    code: null,
    options: [
      "Enable `shouldUnregister` to remove unused fields",
      "Use `useWatch` to avoid unnecessary re-renders",
      "Leverage `Controller` only for uncontrolled components",
      "Use the `resolver` function for schema-based validation",
    ],
    correctAnswer: 1,
    explanation:
      "`useWatch` minimizes re-renders by isolating specific field changes, which is helpful for large forms.",
  },
  {
    id: 3,
    title: "What is the `resolver` function in React Hook Form?",
    code: null,
    options: [
      "A function to connect validation libraries like Yup or Zod",
      "A method to resolve form dependencies",
      "A hook for dynamic validation rules",
      "A mechanism to handle asynchronous form submissions",
    ],
    correctAnswer: 0,
    explanation:
      "The `resolver` function integrates schema validation libraries (e.g., Yup, Zod) with React Hook Form.",
  },
  {
    id: 4,
    title: "How can you validate dynamic fields with React Hook Form?",
    code: null,
    options: [
      "Use `setValue` to initialize and validate dynamic fields",
      "Define validation rules globally in `useForm`",
      "Dynamic fields cannot be validated",
      "Use `register` with conditional validation rules",
    ],
    correctAnswer: 0,
    explanation:
      "`setValue` is used to dynamically initialize and validate fields when they are created or updated.",
  },
  {
    id: 5,
    title: "How do you handle file uploads in React Hook Form?",
    code: null,
    options: [
      "Using the `Controller` component",
      "Using `register` with validation rules for the file input",
      "Handling files manually without React Hook Form",
      "React Hook Form doesn't support file uploads",
    ],
    correctAnswer: 1,
    explanation:
      "File uploads can be handled using `register` with validation rules, such as size or file type restrictions.",
  },
  {
    id: 6,
    title: "What is the purpose of the `mode` option in `useForm`?",
    code: null,
    options: [
      "To define the lifecycle of the form",
      "To determine how errors are handled",
      "To control when validation is triggered (e.g., `onBlur`, `onChange`)",
      "To specify the default submission mode",
    ],
    correctAnswer: 2,
    explanation:
      "The `mode` option defines when validation is triggered, such as on blur, change, or submission.",
  },
  {
    id: 7,
    title: "How can you handle complex nested forms?",
    code: null,
    options: [
      "Use dot notation in `register` for nested fields",
      "Use the `Controller` component for each nested field",
      "Use `useNestedForm` to manage nested data",
      "Complex forms cannot be managed with React Hook Form",
    ],
    correctAnswer: 0,
    explanation:
      "React Hook Form allows nested fields to be registered using dot notation, enabling deep form structures.",
  },
  {
    id: 8,
    title: "How do you submit a form programmatically?",
    code: null,
    options: [
      "Trigger an event on the form element",
      "Call `handleSubmit` directly with the submission callback",
      "Use `setValue` to simulate submission",
      "Submit the form using a hidden button",
    ],
    correctAnswer: 1,
    explanation:
      "`handleSubmit` can be called programmatically to validate and submit the form without user interaction.",
  },
  {
    id: 9,
    title: "What is the benefit of `useFieldArray`?",
    code: null,
    options: [
      "Handles validation for nested objects",
      "Optimizes performance for large forms",
      "Integrates with schema validation libraries",
      "Manages dynamic arrays of fields efficiently",
    ],
    correctAnswer: 3,
    explanation:
      "`useFieldArray` simplifies working with dynamic arrays of inputs, such as adding or removing items in a list.",
  },
  {
    id: 10,
    title: "How can you debounce validation with React Hook Form?",
    code: null,
    options: [
      "Use the `useDebounce` hook",
      "Add a delay parameter to `register`",
      "React Hook Form doesn't support debounced validation",
      "Use a custom debounce function with `trigger`",
    ],
    correctAnswer: 3,
    explanation:
      "Debounced validation can be achieved by wrapping the `trigger` function in a custom debounce utility.",
  },
]
