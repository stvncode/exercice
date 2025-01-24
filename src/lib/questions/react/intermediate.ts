export const reactIntermediateQuestions = [
  {
    id: 1,
    title: "What is the purpose of React.memo?",
    code: null,
    options: [
      "To prevent unnecessary re-renders of a component by memoizing its props",
      "To cache the result of a function call",
      "To optimize API calls in React",
      "To enable component lifecycle hooks in functional components",
    ],
    correctAnswer: 0,
    explanation:
      "React.memo is a higher-order component that prevents re-rendering if the component’s props haven’t changed, improving performance.",
  },
  {
    id: 2,
    title:
      "How does React's reconciliation algorithm determine if it should update the DOM?",
    code: null,
    options: [
      "By comparing the real DOM with the virtual DOM",
      "By comparing the previous and current virtual DOM trees",
      "By tracking changes to component state",
      "By re-rendering all components regardless of changes",
    ],
    correctAnswer: 1,
    explanation:
      "React's reconciliation algorithm uses a diffing process to compare the old and new virtual DOM trees and applies only the necessary updates to the real DOM.",
  },
  {
    id: 3,
    title: "What is the difference between `useMemo` and `useCallback`?",
    code: null,
    options: [
      "`useMemo` memoizes values, while `useCallback` memoizes functions",
      "`useMemo` memoizes functions, while `useCallback` memoizes values",
      "They are interchangeable in React",
      "`useMemo` replaces `useEffect`, and `useCallback` replaces event handlers",
    ],
    correctAnswer: 0,
    explanation:
      "`useMemo` is used to memoize expensive values or computations, while `useCallback` is used to memoize functions to avoid unnecessary re-creations.",
  },
  {
    id: 4,
    title: "What will happen in this code?",
    code: `const [state, setState] = useState(0);

    const increment = () => {
      setState((prev) => prev + 1);
      setState((prev) => prev + 1);
    };

    increment();`,
    options: [
      "state will be 1",
      "state will be 2",
      "React will throw an error",
      "The result is unpredictable",
    ],
    correctAnswer: 1,
    explanation:
      "Using the functional form of `setState`, each update works with the latest state, resulting in `state` being incremented twice to 2.",
  },
  {
    id: 5,
    title: "How can you manage global state in a React application?",
    code: null,
    options: [
      "Using React's Context API",
      "Using Redux",
      "Using third-party libraries like Zustand or Recoil",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Global state can be managed using React's Context API or state management libraries like Redux, Zustand, or Recoil depending on the complexity of the app.",
  },
  {
    id: 6,
    title: "What is the output of the following code?",
    code: `function App() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        setCount(count + 1);
      }, [count]);

      return <div>{count}</div>;
    }`,
    options: [
      "The app will crash due to an infinite loop",
      "The app will display 0",
      "The app will display 1",
      "The app will throw a React warning",
    ],
    correctAnswer: 0,
    explanation:
      "The `useEffect` depends on `count` and updates it, triggering another render. This causes an infinite loop.",
  },
  {
    id: 7,
    title: "What does the React Profiler API allow you to do?",
    code: null,
    options: [
      "Profile server-side rendering performance",
      "Measure performance of rendering and re-rendering components",
      "Optimize build sizes for production",
      "Identify memory leaks in React applications",
    ],
    correctAnswer: 1,
    explanation:
      "React Profiler helps measure the rendering and re-rendering performance of components to identify bottlenecks.",
  },
  {
    id: 8,
    title: "What will this code output?",
    code: `const App = () => {
      const [name, setName] = useState("React");

      useEffect(() => {
        setName("React");
      }, []);

      console.log(name);
      return <div>{name}</div>;
    };`,
    options: [
      "Logs 'React' twice, renders 'React'",
      "Logs 'React' once, renders 'React'",
      "Infinite loop of 'React'",
      "No logs, renders 'React'",
    ],
    correctAnswer: 1,
    explanation:
      "The `useEffect` sets the state to the same value ('React'), so no re-render is triggered, and it logs 'React' only once.",
  },
  {
    id: 9,
    title: "How can you optimize a component rendering large lists of data?",
    code: null,
    options: [
      "Using React.memo",
      "Using React.lazy",
      "Using windowing libraries like react-window",
      "Using Suspense",
    ],
    correctAnswer: 2,
    explanation:
      "Libraries like `react-window` or `react-virtualized` are used for windowing, rendering only a small subset of data visible on the screen.",
  },
  {
    id: 10,
    title: "What is the purpose of the dependency array in `useEffect`?",
    code: null,
    options: [
      "It determines when the effect should re-run",
      "It specifies which variables to ignore during the effect execution",
      "It prevents the effect from running during the initial render",
      "It ensures the effect always runs after every render",
    ],
    correctAnswer: 0,
    explanation:
      "The dependency array tells React to re-run the effect only when the values in the array change. An empty array runs the effect only on mount.",
  },
]
