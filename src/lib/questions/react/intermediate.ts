export const reactIntermediateQuestions = [
  {
    id: 1,
    title: "How can you optimize performance in a large React application?",
    code: null,
    options: [
      "Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders",
      "Use Redux for all state management",
      "Avoid using hooks entirely",
      "Use class components instead of functional components",
    ],
    correctAnswer: 0,
    explanation:
      "React.memo, useMemo, and useCallback are tools to optimize performance by preventing unnecessary re-renders and recalculations.",
  },
  {
    id: 2,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setData(response));
  }, []);

  return <List data={data} />;
}`,
    options: [
      "The effect will run on every render, causing performance issues",
      "The effect will only run once, but it doesn't handle errors",
      "The effect doesn't clean up after itself",
      "The effect should use useCallback",
    ],
    correctAnswer: 1,
    explanation:
      "The code doesn't handle errors from the API call. You should add a try-catch block or use .catch() to handle errors.",
  },
  {
    id: 3,
    title: "What is the output of this code, and why?",
    code: `function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
    return () => console.log("Cleanup ran");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}`,
    options: [
      "Effect ran, Cleanup ran, Effect ran",
      "Effect ran, Cleanup ran",
      "Effect ran",
      "Nothing, because the effect doesn't run",
    ],
    correctAnswer: 0,
    explanation:
      "The effect runs on mount and every time `count` changes. The cleanup runs before the effect runs again.",
  },
  {
    id: 4,
    title: "What is wrong with this code, and how would you fix it?",
    code: `function App() {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateName = () => {
    user.name = "Jane";
    setUser(user);
  };

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}`,
    options: [
      "The state update won't trigger a re-render because the object is mutated directly",
      "The state update will work, but it's not a best practice",
      "The state update will throw an error",
      "The state update will trigger a re-render, but it's inefficient",
    ],
    correctAnswer: 0,
    explanation:
      "React state should be treated as immutable. Use `setUser({ ...user, name: 'Jane' })` to fix this.",
  },
  {
    id: 5,
    title:
      "What is the purpose of the `key` prop in a list, and what happens if you don't use it?",
    code: null,
    options: [
      "It improves performance and helps React identify which items have changed",
      "It binds data to the list items",
      "It prevents re-renders of the list",
      "It is optional and has no effect on rendering",
    ],
    correctAnswer: 0,
    explanation:
      "The `key` prop helps React identify which items have changed, been added, or been removed. Without it, React may re-render the entire list inefficiently.",
  },
  {
    id: 6,
    title: "What is the difference between `useEffect` and `useLayoutEffect`?",
    code: null,
    options: [
      "useEffect runs after the DOM is painted, while useLayoutEffect runs before",
      "useEffect is for side effects, while useLayoutEffect is for layout calculations",
      "useEffect is asynchronous, while useLayoutEffect is synchronous",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "useEffect runs after the DOM is painted, while useLayoutEffect runs before. useEffect is asynchronous, while useLayoutEffect is synchronous.",
  },
  {
    id: 7,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
    options: [
      "The state updates are batched, so `count` only increments once",
      "The state updates are asynchronous, so `count` increments twice",
      "The state updates are synchronous, so `count` increments twice",
      "The state updates are batched, but `count` increments twice",
    ],
    correctAnswer: 0,
    explanation:
      "React batches state updates, so `count` only increments once. Use the functional form of `setCount` to fix this: `setCount(prev => prev + 1)`.",
  },
  {
    id: 8,
    title:
      "What is the purpose of `React.forwardRef`, and when would you use it?",
    code: null,
    options: [
      "To forward refs to child components, especially for reusable components",
      "To create a reference to a DOM element",
      "To memoize refs",
      "To replace `useRef`",
    ],
    correctAnswer: 0,
    explanation:
      "`React.forwardRef` is used to forward refs to child components, especially when creating reusable components like input fields or modals.",
  },
  {
    id: 9,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => setData(response));
  });

  return <div>{data ? data.name : "Loading..."}</div>;
}`,
    options: [
      "The effect runs on every render, causing an infinite loop",
      "The effect doesn't handle errors",
      "The effect doesn't clean up after itself",
      "The effect should use useCallback",
    ],
    correctAnswer: 0,
    explanation:
      "The effect runs on every render because it has no dependency array. Add an empty dependency array (`[]`) to fix this.",
  },
  {
    id: 10,
    title:
      "What is the purpose of `useReducer`, and when would you use it over `useState`?",
    code: null,
    options: [
      "To manage complex state logic with multiple actions",
      "To replace Redux",
      "To manage global state",
      "To manage local state",
    ],
    correctAnswer: 0,
    explanation:
      "`useReducer` is used to manage complex state logic with multiple actions, while `useState` is better for simple state management.",
  },
  {
    id: 11,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
    options: [
      "The `increment` function doesn't update `count` correctly because `count` is stale",
      "The `increment` function should use `useMemo` instead of `useCallback`",
      "The `increment` function should be defined outside the component",
      "The `increment` function should use `useEffect`",
    ],
    correctAnswer: 0,
    explanation:
      "The `increment` function uses a stale `count` value because the dependency array is empty. Add `count` to the dependency array to fix this.",
  },
  {
    id: 12,
    title: "What is the purpose of `React.memo`, and when would you use it?",
    code: null,
    options: [
      "To prevent unnecessary re-renders of functional components",
      "To memoize class components",
      "To memoize state updates",
      "To memoize effects",
    ],
    correctAnswer: 0,
    explanation:
      "`React.memo` is used to prevent unnecessary re-renders of functional components when their props haven't changed.",
  },
  {
    id: 13,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{count}</p>;
}`,
    options: [
      "The `count` value is stale because the effect dependency array is empty",
      "The interval isn't cleared properly",
      "The effect should use `useCallback`",
      "The effect should use `useMemo`",
    ],
    correctAnswer: 0,
    explanation:
      "The `count` value is stale because the effect dependency array is empty. Use the functional form of `setCount` to fix this: `setCount(prev => prev + 1)`.",
  },
  {
    id: 14,
    title:
      "What is the purpose of `useImperativeHandle`, and when would you use it?",
    code: null,
    options: [
      "To customize the instance value exposed to parent components",
      "To manage state in functional components",
      "To perform side effects",
      "To memoize values",
    ],
    correctAnswer: 0,
    explanation:
      "`useImperativeHandle` is used to customize the instance value exposed to parent components, especially when using `forwardRef`.",
  },
  {
    id: 15,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => setData(response));
  }, []);

  return <div>{data.name}</div>;
}`,
    options: [
      "The code will throw an error if `data` is null",
      "The effect doesn't handle errors",
      "The effect doesn't clean up after itself",
      "The effect should use `useCallback`",
    ],
    correctAnswer: 0,
    explanation:
      "The code will throw an error if `data` is null. Add a conditional check: `{data ? data.name : 'Loading...'}`.",
  },
  {
    id: 16,
    title: "What is the purpose of `useContext`, and when would you use it?",
    code: null,
    options: [
      "To share state between components without prop drilling",
      "To manage global state",
      "To replace Redux",
      "To manage local state",
    ],
    correctAnswer: 0,
    explanation:
      "`useContext` is used to share state between components without prop drilling.",
  },
  {
    id: 17,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
    options: [
      "The state update is asynchronous, so `count` may not update immediately",
      "The state update is batched, so `count` may not update immediately",
      "The state update is synchronous, so `count` updates immediately",
      "The state update is batched, but `count` updates immediately",
    ],
    correctAnswer: 1,
    explanation:
      "React batches state updates, so `count` may not update immediately. Use the functional form of `setCount` to fix this: `setCount(prev => prev + 1)`.",
  },
  {
    id: 18,
    title: "What is the purpose of `useMemo`, and when would you use it?",
    code: null,
    options: [
      "To memoize values to avoid expensive recalculations",
      "To memoize functions",
      "To memoize components",
      "To memoize state updates",
    ],
    correctAnswer: 0,
    explanation:
      "`useMemo` is used to memoize values to avoid expensive recalculations on every render.",
  },
  {
    id: 19,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}`,
    options: [
      "The effect runs on every render, causing performance issues",
      "The effect runs only once, but it doesn't handle errors",
      "The effect doesn't clean up after itself",
      "The effect should use `useCallback`",
    ],
    correctAnswer: 0,
    explanation:
      "The effect runs on every render because `count` is in the dependency array. Use `useMemo` or `useCallback` to fix this.",
  },
  {
    id: 20,
    title: "What is the purpose of `useCallback`, and when would you use it?",
    code: null,
    options: [
      "To memoize functions to prevent unnecessary re-renders",
      "To memoize values",
      "To memoize components",
      "To memoize state updates",
    ],
    correctAnswer: 0,
    explanation:
      "`useCallback` is used to memoize functions to prevent unnecessary re-renders.",
  },
  {
    id: 21,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}`,
    options: [
      "The effect runs only once, but it doesn't handle errors",
      "The effect runs on every render, causing performance issues",
      "The effect doesn't clean up after itself",
      "The effect should use `useCallback`",
    ],
    correctAnswer: 0,
    explanation:
      "The effect runs only once, but it doesn't handle errors. Add a try-catch block or use .catch() to fix this.",
  },
  {
    id: 22,
    title: "What is the purpose of `useRef`, and when would you use it?",
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
    id: 23,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}`,
    options: [
      "The effect runs on every render, causing performance issues",
      "The effect runs only once, but it doesn't handle errors",
      "The effect doesn't clean up after itself",
      "The effect should use `useCallback`",
    ],
    correctAnswer: 0,
    explanation:
      "The effect runs on every render because `count` is in the dependency array. Use `useMemo` or `useCallback` to fix this.",
  },
  {
    id: 24,
    title:
      "What is the purpose of `useLayoutEffect`, and when would you use it?",
    code: null,
    options: [
      "To perform side effects before the DOM is painted",
      "To perform side effects after the DOM is painted",
      "To replace `useEffect`",
      "To memoize values",
    ],
    correctAnswer: 0,
    explanation:
      "`useLayoutEffect` is used to perform side effects before the DOM is painted.",
  },
  {
    id: 25,
    title: "What is the problem with this code, and how would you fix it?",
    code: `function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}`,
    options: [
      "The effect runs on every `count` change, causing unnecessary re-renders",
      "The effect should use `useMemo` instead of `useEffect`",
      "The effect doesn't clean up after itself",
      "The effect is missing a dependency",
    ],
    correctAnswer: 0,
    explanation:
      "The effect runs every time `count` changes, which may cause unnecessary side effects. If the effect doesn't need to react to `count`, remove `count` from the dependency array. If it does, ensure the effect is optimized.",
  },
]
