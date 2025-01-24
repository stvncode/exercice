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
]
