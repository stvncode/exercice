export const reactJuniorQuestions = [
  {
    id: 1,
    title: "What is the main purpose of React.StrictMode?",
    code: null,
    options: [
      "To enforce type checking at runtime",
      "To identify potential problems in an application during development",
      "To improve application performance in production",
      "To enforce React best practices in production",
    ],
    correctAnswer: 1,
    explanation:
      "StrictMode is a development-only feature that helps identify potential problems like unsafe lifecycles, legacy API usage, and other development-time issues.",
  },
  {
    id: 2,
    title: "Which hook should you use to perform side effects in a component?",
    code: `// Which option is correct for making an API call?
  
  A) useEffect(() => { fetchData() }, [])
  B) useState(() => { fetchData() })
  C) useMemo(() => { fetchData() }, [])
  D) useCallback(() => { fetchData() }, [])`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "useEffect is designed for handling side effects like API calls, subscriptions, or manual DOM manipulations.",
  },
  {
    id: 3,
    title: "What's wrong with this code?",
    code: `const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
    setCount(count + 1)
  }`,
    options: [
      "Nothing, it works as expected",
      "It will increment by 2",
      "State updates are batched, so count only increases by 1",
      "useState cannot be used with numbers",
    ],
    correctAnswer: 2,
    explanation:
      "Due to React's state batching, both setCount calls use the same count value. To increment twice, use the functional update form: setCount(prev => prev + 1)",
  },
  {
    id: 4,
    title: "What does the `key` prop help React achieve?",
    code: null,
    options: [
      "Improves rendering speed of components",
      "Identifies which items in a list have changed",
      "Binds data to a component",
      "Tracks component state across re-renders",
    ],
    correctAnswer: 1,
    explanation:
      "The `key` prop is used by React to identify which items in a list have changed, been added, or removed, enabling efficient updates.",
  },
  {
    id: 5,
    title: "What will this code log?",
    code: `const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(count);
    }, []);

    setCount(1);`,
    options: [
      "0, then 1",
      "1 only",
      "0 only",
      "Nothing, because useEffect has an empty dependency array",
    ],
    correctAnswer: 2,
    explanation:
      "The `useEffect` only runs once on mount because of the empty dependency array, so it logs 0. Subsequent state updates do not trigger it.",
  },
  {
    id: 6,
    title: "What is the difference between `useState` and `useReducer`?",
    code: null,
    options: [
      "useState is for global state, useReducer is for local state",
      "useState is for simple state, useReducer is for complex state logic",
      "useReducer replaces Redux",
      "They both are identical in usage",
    ],
    correctAnswer: 1,
    explanation:
      "`useState` is suitable for simple state transitions, while `useReducer` is more suited for complex state logic with multiple actions.",
  },
  {
    id: 7,
    title: "Why should you avoid updating state directly in React?",
    code: `const [count, setCount] = useState(0);

    // What happens if we do this?
    count = 5;`,
    options: [
      "React will throw an error",
      "The state won't update and the component won't re-render",
      "The state will update, but React will warn about bad practices",
      "The state will update and the component will re-render",
    ],
    correctAnswer: 1,
    explanation:
      "State in React is immutable. Directly mutating it won't trigger a re-render. Use the `setState` or `setCount` function instead.",
  },
  {
    id: 8,
    title:
      "What will happen if you call `setState` inside `useEffect` without dependencies?",
    code: `useEffect(() => {
      setState(1);
    });`,
    options: [
      "The component will crash",
      "The component will re-render infinitely",
      "The state will update once",
      "React will warn about missing dependencies",
    ],
    correctAnswer: 1,
    explanation:
      "Without a dependency array, `useEffect` runs after every render, which causes `setState` to trigger another render, resulting in an infinite loop.",
  },
  {
    id: 9,
    title: "What is the output of the following code?",
    code: `function App() {
      const [state] = useState({ name: "React" });

      state.name = "Vue";
      console.log(state.name);
    }`,
    options: [
      `"React"`,
      `"Vue"`,
      "React will throw an error",
      "React warns about state immutability",
    ],
    correctAnswer: 1,
    explanation:
      "React won't stop you from mutating objects stored in state, but it won't track those changes. Always treat state as immutable.",
  },
  {
    id: 10,
    title: "What happens if you forget to pass a dependency to `useEffect`?",
    code: `useEffect(() => {
      console.log("Effect runs");
    });`,
    options: [
      "The effect runs only once",
      "The effect runs after every render",
      "The effect never runs",
      "React throws an error",
    ],
    correctAnswer: 1,
    explanation:
      "Without a dependency array, `useEffect` runs after every render. Pass an empty array to make it run only once on mount.",
  },
  {
    id: 11,
    title: "What is the purpose of `useMemo`?",
    code: null,
    options: [
      "To memoize functions",
      "To memoize values to avoid expensive recalculations",
      "To memoize components",
      "To memoize state updates",
    ],
    correctAnswer: 1,
    explanation:
      "`useMemo` is used to memoize values, preventing expensive recalculations on every render.",
  },
  {
    id: 12,
    title: "What is the difference between `useCallback` and `useMemo`?",
    code: null,
    options: [
      "useCallback memoizes functions, useMemo memoizes values",
      "useCallback memoizes values, useMemo memoizes functions",
      "They are identical in functionality",
      "useCallback is for state, useMemo is for effects",
    ],
    correctAnswer: 0,
    explanation:
      "`useCallback` is used to memoize functions, while `useMemo` is used to memoize values.",
  },
  {
    id: 13,
    title: "What is the purpose of `React.Fragment`?",
    code: null,
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To create reusable components",
      "To improve performance",
      "To enforce type checking",
    ],
    correctAnswer: 0,
    explanation:
      "`React.Fragment` allows you to group multiple elements without adding extra nodes to the DOM.",
  },
  {
    id: 14,
    title: "What is the purpose of `React.PureComponent`?",
    code: null,
    options: [
      "To optimize functional components",
      "To optimize class components by preventing unnecessary re-renders",
      "To enforce immutability",
      "To replace `React.Component`",
    ],
    correctAnswer: 1,
    explanation:
      "`React.PureComponent` is used to optimize class components by preventing unnecessary re-renders when props and state haven't changed.",
  },
  {
    id: 15,
    title: "What is the purpose of `React.memo`?",
    code: null,
    options: [
      "To memoize class components",
      "To memoize functional components to prevent unnecessary re-renders",
      "To memoize state updates",
      "To memoize effects",
    ],
    correctAnswer: 1,
    explanation:
      "`React.memo` is used to memoize functional components, preventing unnecessary re-renders when props haven't changed.",
  },
  {
    id: 16,
    title: "What is the purpose of `useRef`?",
    code: null,
    options: [
      "To create a reference to a DOM element or persist values across renders",
      "To manage state in functional components",
      "To perform side effects",
      "To memoize values",
    ],
    correctAnswer: 0,
    explanation:
      "`useRef` is used to create a reference to a DOM element or to persist values across renders without triggering re-renders.",
  },
  {
    id: 17,
    title: "What is the purpose of `useContext`?",
    code: null,
    options: [
      "To manage global state",
      "To share state between components without prop drilling",
      "To replace Redux",
      "To manage local state",
    ],
    correctAnswer: 1,
    explanation:
      "`useContext` is used to share state between components without prop drilling.",
  },
  {
    id: 18,
    title: "What is the purpose of `useReducer`?",
    code: null,
    options: [
      "To manage global state",
      "To manage complex state logic with multiple actions",
      "To replace `useState`",
      "To perform side effects",
    ],
    correctAnswer: 1,
    explanation:
      "`useReducer` is used to manage complex state logic with multiple actions.",
  },
  {
    id: 19,
    title: "What is the purpose of `useLayoutEffect`?",
    code: null,
    options: [
      "To perform side effects after the DOM has been updated",
      "To perform side effects before the DOM has been updated",
      "To replace `useEffect`",
      "To memoize values",
    ],
    correctAnswer: 1,
    explanation:
      "`useLayoutEffect` is used to perform side effects before the DOM has been updated.",
  },
  {
    id: 20,
    title: "What is the purpose of `useImperativeHandle`?",
    code: null,
    options: [
      "To customize the instance value exposed to parent components",
      "To manage state in functional components",
      "To perform side effects",
      "To memoize values",
    ],
    correctAnswer: 0,
    explanation:
      "`useImperativeHandle` is used to customize the instance value exposed to parent components.",
  },
  {
    id: 21,
    title: "What is the purpose of `useDebugValue`?",
    code: null,
    options: [
      "To debug custom hooks in React DevTools",
      "To debug functional components",
      "To debug class components",
      "To debug state updates",
    ],
    correctAnswer: 0,
    explanation:
      "`useDebugValue` is used to debug custom hooks in React DevTools.",
  },
  {
    id: 22,
    title: "What is the purpose of `useTransition`?",
    code: null,
    options: [
      "To manage state transitions",
      "To manage concurrent rendering",
      "To manage side effects",
      "To manage state updates",
    ],
    correctAnswer: 1,
    explanation:
      "`useTransition` is used to manage concurrent rendering in React.",
  },
  {
    id: 23,
    title: "What is the purpose of `useDeferredValue`?",
    code: null,
    options: [
      "To defer state updates",
      "To defer rendering of components",
      "To defer side effects",
      "To defer state transitions",
    ],
    correctAnswer: 1,
    explanation:
      "`useDeferredValue` is used to defer rendering of components in React.",
  },
  {
    id: 24,
    title: "What is the purpose of `useId`?",
    code: null,
    options: [
      "To generate unique IDs for components",
      "To generate unique IDs for state updates",
      "To generate unique IDs for side effects",
      "To generate unique IDs for state transitions",
    ],
    correctAnswer: 0,
    explanation:
      "`useId` is used to generate unique IDs for components in React.",
  },
  {
    id: 25,
    title: "What is the purpose of `useSyncExternalStore`?",
    code: null,
    options: [
      "To sync external stores with React state",
      "To sync external stores with React effects",
      "To sync external stores with React transitions",
      "To sync external stores with React updates",
    ],
    correctAnswer: 0,
    explanation:
      "`useSyncExternalStore` is used to sync external stores with React state.",
  },
]
