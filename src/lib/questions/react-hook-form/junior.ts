export const reactHookFormJuniorQuestions = [
  {
    id: 1,
    title: "What is React Hook Form primarily used for?",
    code: null,
    options: [
      "Building forms and handling validations",
      "Rendering UI components",
      "Performing animations",
      "Managing global state",
    ],
    correctAnswer: 3,
    explanation:
      "React Hook Form is a library designed for building forms in React applications with easy validation and minimal performance impact.",
  },
  {
    id: 2,
    title: "How do you register an input with React Hook Form?",
    code: null,
    options: [
      "With the `useFormContext` hook",
      "Using `useController`",
      "By manually binding the input",
      "Using the `register` function",
    ],
    correctAnswer: 3,
    explanation:
      "React Hook Form uses the `register` function to bind inputs to the form state.",
  },
  {
    id: 3,
    title: "What does `handleSubmit` do?",
    code: null,
    options: [
      "Submits the form data directly to a server",
      "Validates the form and triggers a callback with valid data",
      "Only prevents default form submission",
      "Performs client-side validation but ignores errors",
    ],
    correctAnswer: 1,
    explanation:
      "`handleSubmit` validates the form and triggers the provided callback function with the valid data.",
  },
  {
    id: 4,
    title: "What is `formState` used for?",
    code: null,
    options: [
      "Managing the lifecycle of the form",
      "Rendering the UI components",
      "Tracking the validation status, submission, and touched fields",
      "Handling API calls from the form",
    ],
    correctAnswer: 2,
    explanation:
      "`formState` is an object that tracks the validation, submission status, and other states of the form.",
  },
  {
    id: 5,
    title: "How do you initialize default form values?",
    code: null,
    options: [
      "Using `useState`",
      "With the `defaultValues` option in `useForm`",
      "Directly binding values to inputs",
      "Using the `register` function with initial values",
    ],
    correctAnswer: 1,
    explanation:
      "The `defaultValues` option in `useForm` sets the initial values of the form fields.",
  },
  {
    id: 6,
    title: "How do you reset a form in React Hook Form?",
    code: null,
    options: [
      "Calling `resetForm()`",
      "Using the `reset` function from `useForm`",
      "Reloading the page",
      "Calling `clearState()`",
    ],
    correctAnswer: 1,
    explanation:
      "React Hook Form provides the `reset` function to clear the form state and optionally reset to default values.",
  },
  {
    id: 7,
    title: "Which hook is used to watch specific form values?",
    code: null,
    options: ["useForm", "useWatch", "useController", "useValues"],
    correctAnswer: 1,
    explanation:
      "`useWatch` is a React Hook Form utility that allows you to monitor specific form values or the entire form.",
  },
  {
    id: 8,
    title: "How do you apply validations to a field?",
    code: null,
    options: [
      "Using `useValidation`",
      "Providing rules inside `register`",
      "Attaching `validate` manually",
      "Using custom hooks",
    ],
    correctAnswer: 1,
    explanation:
      "Validation rules can be provided inside the `register` function for each input field.",
  },
  {
    id: 9,
    title: "What does `errors` represent in React Hook Form?",
    code: null,
    options: [
      "Tracks the validation state of the form fields",
      "Tracks changes in form values",
      "Manages form submission status",
      "Stores default values of the form",
    ],
    correctAnswer: 0,
    explanation:
      "`errors` contains information about fields that failed validation, including error messages.",
  },
  {
    id: 10,
    title: "What does the `required` option in `register` do?",
    code: null,
    options: [
      "Marks a field as optional",
      "Ensures the field must have a value",
      "Applies additional CSS styling",
      "Overrides the default validation",
    ],
    correctAnswer: 1,
    explanation:
      "`required` is a validation rule that ensures the field must have a value to pass validation.",
  },
]
