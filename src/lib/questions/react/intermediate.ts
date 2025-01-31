import { Question } from "@/features/layout/QuestionViewer"

export const reactIntermediateQuestions: Question[] = [
  {
    id: 1,
    title: "What is the purpose of useMemo and when should it be used?",
    options: [
      "To memoize expensive computations and prevent unnecessary recalculations",
      "To memoize any value",
      "To memoize components",
      "To optimize all functions",
    ],
    correctAnswer: 0,
    explanation:
      "useMemo is used to memoize expensive computations, preventing them from being re-run on every render unless their dependencies change.",
    code: null,
  },
  {
    id: 2,
    title: "How does useCallback differ from useMemo?",
    options: [
      "useMemo is for functions, useCallback is for values",
      "useCallback is for functions, useMemo is for values",
      "useCallback is faster",
      "They are the same",
    ],
    correctAnswer: 1,
    explanation:
      "useCallback memoizes function definitions while useMemo memoizes computed values.",
    code: null,
  },
  {
    id: 3,
    title: "What is the React Suspense component used for?",
    options: [
      "Animation transitions",
      "Error handling only",
      "Loading states only",
      "Handling both lazy loading of components and data fetching with fallback UI",
    ],
    correctAnswer: 3,
    explanation:
      "Suspense allows components to wait for something (code/data) while showing a fallback UI.",
    code: null,
  },
  {
    id: 4,
    title: "What are render props in React?",
    options: [
      "A technique for sharing code between components using a prop whose value is a function",
      "Regular props that render UI",
      "Props that are only used in render methods",
      "A deprecated pattern",
    ],
    correctAnswer: 0,
    explanation:
      "Render props is a technique where a component receives a function prop that returns React elements.",
    code: null,
  },
  {
    id: 5,
    title: "What is the purpose of useLayoutEffect?",
    options: [
      "For optimizing performance",
      "For handling layout calculations before browser paint",
      "It's the same as useEffect",
      "For handling side effects",
    ],
    correctAnswer: 1,
    explanation:
      "useLayoutEffect fires synchronously after DOM mutations but before browser paint.",
    code: null,
  },
  {
    id: 6,
    title: "How does React handle reconciliation?",
    options: [
      "By reloading the page",
      "By comparing virtual DOM trees and updating only what's necessary",
      "By updating all components",
      "By directly manipulating the DOM",
    ],
    correctAnswer: 1,
    explanation:
      "React uses diffing to compare virtual DOM with previous state for minimal updates.",
    code: null,
  },
  {
    id: 7,
    title: "What is the purpose of React.memo?",
    options: [
      "To memoize DOM elements",
      "To prevent re-renders of functional components when props haven't changed",
      "To memoize values",
      "To optimize state updates",
    ],
    correctAnswer: 1,
    explanation:
      "React.memo prevents re-rendering when props remain unchanged.",
    code: null,
  },
  {
    id: 8,
    title: "How do React portals work?",
    options: [
      "They manage state",
      "They render children into a DOM node outside the parent hierarchy",
      "They create new components",
      "They optimize rendering",
    ],
    correctAnswer: 1,
    explanation:
      "Portals render children into a DOM node outside the parent hierarchy.",
    code: null,
  },
  {
    id: 9,
    title: "What is the purpose of useImperativeHandle?",
    options: [
      "To customize the instance value exposed to parent components when using ref",
      "To handle imperative code",
      "To optimize performance",
      "To handle side effects",
    ],
    correctAnswer: 0,
    explanation:
      "useImperativeHandle customizes the instance value exposed through refs.",
    code: null,
  },
  {
    id: 10,
    title: "How does debouncing differ from throttling in React?",
    options: [
      "Throttling is more efficient",
      "Debouncing delays execution until pause, throttling limits execution frequency",
      "They are the same thing",
      "Debouncing is deprecated",
    ],
    correctAnswer: 1,
    explanation:
      "Debouncing delays execution until pause, throttling ensures maximum frequency.",
    code: null,
  },
  {
    id: 11,
    title: "What is the purpose of ErrorBoundary components?",
    options: [
      "To optimize error handling",
      "To handle network errors",
      "To catch JavaScript errors in child components and display fallback UI",
      "To prevent errors",
    ],
    correctAnswer: 2,
    explanation:
      "Error Boundaries catch JavaScript errors in child components and show fallback UI.",
    code: null,
  },
  {
    id: 12,
    title: "How do you implement code-splitting in React?",
    options: [
      "Using webpack only",
      "Using React.lazy() and Suspense",
      "Splitting code manually",
      "Using external libraries",
    ],
    correctAnswer: 1,
    explanation:
      "Code-splitting uses React.lazy() for component imports and Suspense for loading states.",
    code: null,
  },
  {
    id: 13,
    title: "What is the difference between controlled and uncontrolled refs?",
    options: [
      "Controlled refs are managed by React, uncontrolled refs access DOM directly",
      "There is no difference",
      "Uncontrolled refs are deprecated",
      "Controlled refs are faster",
    ],
    correctAnswer: 0,
    explanation:
      "Controlled refs use React's state system, uncontrolled refs directly access DOM.",
    code: null,
  },
  {
    id: 14,
    title: "How does the useReducer hook compare to useState?",
    options: [
      "useState is more powerful",
      "useReducer is for complex state logic and state updates that depend on multiple values",
      "They are the same",
      "useReducer is deprecated",
    ],
    correctAnswer: 1,
    explanation:
      "useReducer handles complex state logic and multi-value dependent updates.",
    code: null,
  },
  {
    id: 15,
    title: "What's the purpose of React.createRef?",
    options: [
      "To create references to DOM elements and class components",
      "To create new components",
      "To clone elements",
      "To optimize rendering",
    ],
    correctAnswer: 0,
    explanation:
      "React.createRef creates references to access DOM elements and class components.",
    code: null,
  },
  {
    id: 16,
    title: "How do you handle side effects in custom hooks?",
    options: [
      "Side effects aren't allowed in custom hooks",
      "Using setState only",
      "Using useEffect and proper cleanup",
      "Using global variables",
    ],
    correctAnswer: 2,
    explanation:
      "Custom hooks handle side effects using useEffect with proper cleanup.",
    code: null,
  },
  {
    id: 17,
    title: "What is the purpose of key in React's reconciliation?",
    options: [
      "To help React track items in lists",
      "For styling",
      "It's optional",
      "For performance only",
    ],
    correctAnswer: 0,
    explanation:
      "Keys help React identify and track items in lists during reconciliation.",
    code: null,
  },
  {
    id: 18,
    title: "How do you optimize context usage?",
    options: [
      "Context is already optimized",
      "Split context into smaller pieces and use React.memo",
      "Don't use context",
      "Use global state instead",
    ],
    correctAnswer: 1,
    explanation:
      "Optimize context by splitting into smaller contexts and using React.memo.",
    code: null,
  },
  {
    id: 19,
    title: "What are synthetic events in React?",
    options: [
      "Native browser events",
      "React's cross-browser wrapper around native events",
      "Regular JavaScript events",
      "Deprecated events",
    ],
    correctAnswer: 1,
    explanation:
      "Synthetic events are React's cross-browser wrapper around native browser events.",
    code: null,
  },
  {
    id: 20,
    title: "How does React batch state updates?",
    options: [
      "It automatically batches multiple state updates in event handlers and hooks",
      "Manual batching is required",
      "It doesn't batch updates",
      "Batching is deprecated",
    ],
    correctAnswer: 0,
    explanation:
      "React automatically batches multiple state updates in event handlers and hooks.",
    code: null,
  },
]
