export const reactHookFormIntermediateQuestions = [
  {
    id: 1,
    title: "How can you validate a field asynchronously in React Hook Form?",
    code: null,
    options: [
      "Using the `validate` function in `register`",
      "Using the `useAsyncValidation` hook",
      "With the `formState` object",
      "React Hook Form doesn't support async validation",
    ],
    correctAnswer: 0,
    explanation:
      "React Hook Form allows asynchronous validation by passing an async function to the `validate` property in the `register` method.",
  },
  {
    id: 2,
    title: "How can you conditionally display fields based on form values?",
    code: null,
    options: [
      "Using `useWatch` or `watch` to monitor form values",
      "By wrapping the fields in a conditional render function",
      "Using the `formState` object",
      "It's not possible to conditionally render fields",
    ],
    correctAnswer: 0,
    explanation:
      "The `watch` and `useWatch` hooks are used to monitor form values and conditionally render fields accordingly.",
  },
  {
    id: 3,
    title: "What is `useController` used for in React Hook Form?",
    code: null,
    options: [
      "To manually control the form's state and re-renders",
      "To bind custom components to the form state",
      "To handle form submission",
      "To track changes in form inputs",
    ],
    correctAnswer: 1,
    explanation:
      "`useController` allows you to bind custom input components (e.g., third-party components like `React Select`) to the form state.",
  },
  {
    id: 4,
    title: "How do you handle nested form values in React Hook Form?",
    code: null,
    options: [
      "Use dot notation in `register`",
      "Use an array for nested values",
      "Use the `useNestedForm` hook",
      "React Hook Form doesn't support nested values",
    ],
    correctAnswer: 0,
    explanation:
      "React Hook Form supports nested values by using dot notation in the `register` method.",
  },
  {
    id: 5,
    title: "What is the purpose of `shouldUnregister` in React Hook Form?",
    code: null,
    options: [
      "Determines if fields are removed from the form state when unmounted",
      "Keeps fields mounted even when unmounted from the DOM",
      "Improves performance by caching form fields",
      "Handles conditional rendering of components",
    ],
    correctAnswer: 0,
    explanation:
      "The `shouldUnregister` option determines if inputs should be removed from the form state when they are unmounted.",
  },
  {
    id: 6,
    title: "How do you handle multiple forms in a single component?",
    code: null,
    options: [
      "Use `useForm` for each form instance",
      "Use a single `useForm` instance for all forms",
      "Pass form data to child components",
      "React Hook Form doesn't support multiple forms",
    ],
    correctAnswer: 0,
    explanation:
      "Each form should have its own `useForm` instance to manage its state independently.",
  },
  {
    id: 7,
    title: "How do you handle dynamic fields with React Hook Form?",
    code: null,
    options: [
      "Map over dynamic fields and register them individually",
      "Use the `useDynamicFields` hook",
      "Dynamic fields are not supported in React Hook Form",
      "Attach dynamic fields to a parent form",
    ],
    correctAnswer: 0,
    explanation:
      "Dynamic fields can be handled by mapping over the field data and using `register` for each field.",
  },
  {
    id: 8,
    title: "What is `defaultValues` in React Hook Form?",
    code: null,
    options: [
      "Sets the initial values of form fields",
      "Applies validation rules globally",
      "Defines the default behavior of form submission",
      "Specifies default error messages",
    ],
    correctAnswer: 0,
    explanation:
      "`defaultValues` initializes the form fields with specified values.",
  },
  {
    id: 9,
    title: "How can you trigger validation manually?",
    code: null,
    options: [
      "Using the `trigger` function",
      "Calling `validate` directly on inputs",
      "Using the `useValidation` hook",
      "React Hook Form doesn't support manual validation",
    ],
    correctAnswer: 0,
    explanation:
      "The `trigger` function allows you to programmatically validate individual fields or the entire form.",
  },
  {
    id: 10,
    title: "How can you programmatically set form values?",
    code: null,
    options: [
      "Using `setValue` from `useForm`",
      "Directly modifying the input value",
      "Using `useState`",
      "React Hook Form doesn't support this functionality",
    ],
    correctAnswer: 0,
    explanation:
      "`setValue` is a method provided by React Hook Form to programmatically update form values.",
  },
]
