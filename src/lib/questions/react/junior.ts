import { Question } from "@/features/layout/QuestionViewer"

export const reactJuniorQuestions: Question[] = [
  {
    id: 1,
    title: "What is the correct way to render a list of items in React?",
    options: [
      "Using a for loop inside JSX",
      "Using Array.map() with a unique key prop",
      "Using Array.forEach()",
      "Using a while loop inside JSX",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "Array.map() with unique keys is the React-recommended way to render lists. Keys help React identify which items have changed, been added, or been removed, optimizing the rendering process.",
  },
  {
    id: 2,
    title: "What's the difference between state and props?",
    options: [
      "There is no difference",
      "Props are immutable and controlled by parent components, state is mutable and controlled by the component itself",
      "State is immutable, props are mutable",
      "Props are only for class components, state is only for functional components",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "Props are read-only and passed from parent components, while state is internal to a component and can be updated using setState or the state updater function from useState.",
  },
  {
    id: 3,
    title: "What happens when you call setState?",
    options: [
      "The component immediately updates",
      "The state updates synchronously",
      "React schedules a render update and will batch multiple setState calls",
      "The DOM updates directly",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "setState is asynchronous - React will batch multiple setState calls for performance and schedule a render update, rather than performing immediate updates.",
  },
  {
    id: 4,
    title: "What is the purpose of useEffect?",
    options: [
      "To create side effects in components",
      "To handle synchronous operations only",
      "To replace componentDidMount in class components",
      "To perform side effects in response to component lifecycle events or dependency changes",
    ],
    code: null,
    correctAnswer: 3,
    explanation:
      "useEffect is used for handling side effects in response to component mounting, updating, or unmounting, as well as when specific dependencies change.",
  },
  {
    id: 5,
    title: "Why should you not call hooks inside conditions?",
    options: [
      "It's allowed but not recommended",
      "Hooks must be called in the same order every render to maintain state correctly",
      "It makes the code harder to read",
      "React doesn't support conditional hooks",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "React relies on the order of hook calls to maintain state correctly between renders. Conditional hook calls can break this order and cause bugs.",
  },
  {
    id: 6,
    title: "What is the virtual DOM?",
    options: [
      "A direct copy of the real DOM",
      "A lightweight copy of the real DOM used for performance optimization",
      "The actual browser DOM",
      "A database for storing DOM elements",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "The virtual DOM is a lightweight JavaScript representation of the actual DOM, used by React to optimize rendering performance through diffing.",
  },
  {
    id: 7,
    title: "What is the correct way to handle form submission in React?",
    options: [
      "Let the form handle submission naturally",
      "Use preventDefault() and handle the submission with JavaScript",
      "Disable the submit button",
      "Remove the form tag entirely",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "To handle form submissions in React, you should prevent the default form submission behavior and handle it with JavaScript to maintain control over the form data and submission process.",
  },
  {
    id: 8,
    title: "What is the purpose of React.Fragment?",
    options: [
      "To create HTML fragments",
      "To group multiple elements without adding extra nodes to the DOM",
      "To split components into smaller pieces",
      "To improve performance",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "React.Fragment allows you to group multiple children elements without adding extra nodes to the DOM, helping maintain clean HTML structure.",
  },
  {
    id: 9,
    title:
      "What is the difference between controlled and uncontrolled components?",
    options: [
      "There is no difference",
      "Controlled components have their state managed by React, uncontrolled components maintain their own state",
      "Uncontrolled components are deprecated",
      "Controlled components are faster",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "Controlled components have their form data controlled by React state, while uncontrolled components maintain their own state internally using the DOM.",
  },
  {
    id: 10,
    title: "When does React re-render a component?",
    options: [
      "Only when props change",
      "Only when state changes",
      "When props change, state changes, or parent component re-renders",
      "Only when forced with forceUpdate()",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "React re-renders a component when its props change, its state changes, or when its parent component re-renders.",
  },
  {
    id: 11,
    title: "What is prop drilling and why is it considered a problem?",
    options: [
      "A feature for passing props deeply",
      "A performance optimization technique",
      "Passing props through multiple levels of components that don't need them",
      "A way to drill into component internals",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "Prop drilling occurs when props are passed through multiple components that don't need them, making code harder to maintain and understand.",
  },
  {
    id: 12,
    title: "What is the purpose of the key prop in lists?",
    options: [
      "It's optional and only for debugging",
      "To style list items differently",
      "To help React identify which items have changed, been added, or removed",
      "To make lists faster",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "Keys help React identify which items in a list have changed, been added, or removed, enabling efficient updates and re-rendering.",
  },
  {
    id: 13,
    title: "What is the difference between useState and useRef?",
    options: [
      "They are the same thing",
      "useState causes re-renders when updated, useRef doesn't",
      "useRef is deprecated",
      "useState is only for strings",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "useState triggers a re-render when its value changes, while useRef maintains a mutable value that doesn't cause re-renders when it changes.",
  },
  {
    id: 14,
    title: "How do you pass data from child to parent component?",
    options: [
      "Using state",
      "It's not possible",
      "By passing a callback function as a prop from parent to child",
      "Using global variables",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "To pass data from child to parent, you pass a callback function as a prop from the parent to the child, which the child can call with the data.",
  },
  {
    id: 15,
    title: "What is the purpose of React.StrictMode?",
    options: [
      "To enforce strict typing",
      "To identify potential problems in an application",
      "To improve performance",
      "To prevent runtime errors",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "StrictMode helps identify potential problems in an application by enabling additional checks and warnings during development.",
  },
  {
    id: 16,
    title: "What is the default behavior of form submission in React?",
    options: [
      "Nothing happens",
      "The page refreshes",
      "The form data is automatically sent to a server",
      "React prevents the default behavior",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "By default, form submission causes a page refresh. This is why we typically use preventDefault() in form submission handlers.",
  },
  {
    id: 17,
    title: "What is the correct way to update state based on previous state?",
    options: [
      "Directly modify the state variable",
      "Use the setter function with a callback that receives previous state",
      "Create a new variable and set it",
      "Use global variables",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "When updating state based on its previous value, you should use the setter function with a callback to ensure you're working with the most current state value.",
  },
  {
    id: 18,
    title: "What is the purpose of useEffect's cleanup function?",
    options: [
      "To clean up memory",
      "To prevent memory leaks and cancel subscriptions",
      "To improve performance",
      "To reset state",
    ],
    code: null,
    correctAnswer: 1,
    explanation:
      "The cleanup function in useEffect is used to clean up side effects, prevent memory leaks, and cancel subscriptions when a component unmounts or dependencies change.",
  },
  {
    id: 19,
    title: "What happens if you don't provide a dependency array to useEffect?",
    options: [
      "The effect never runs",
      "The effect runs only once",
      "The effect runs after every render",
      "React throws an error",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "If no dependency array is provided, the effect will run after every render of the component.",
  },
  {
    id: 20,
    title: "What is the purpose of the children prop?",
    options: [
      "To create child components",
      "To pass data between siblings",
      "To render content between component opening and closing tags",
      "To improve performance",
    ],
    code: null,
    correctAnswer: 2,
    explanation:
      "The children prop allows components to render content that is placed between their opening and closing tags, enabling component composition.",
  },
]
