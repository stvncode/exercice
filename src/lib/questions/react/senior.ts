export const reactSeniorQuestions = [
  {
    id: 1,
    title:
      "How can you implement server-side rendering (SSR) in a React application?",
    code: null,
    options: [
      "Using the React Profiler API",
      "Using frameworks like Next.js or custom solutions with ReactDOMServer",
      "Using React's Context API",
      "Using Redux Thunk or Redux Saga",
    ],
    correctAnswer: 1,
    explanation:
      "Server-side rendering in React can be implemented using frameworks like Next.js, which abstracts the complexity of SSR, or with ReactDOMServer's `renderToString` or `renderToPipeableStream` methods for custom solutions.",
  },
  {
    id: 2,
    title: "What problem does React Concurrent Mode solve?",
    code: null,
    options: [
      "Improves server-side rendering performance",
      "Makes React applications fully synchronous",
      "Improves user experience by enabling React to work on multiple tasks simultaneously",
      "Enables developers to write asynchronous components",
    ],
    correctAnswer: 2,
    explanation:
      "React Concurrent Mode improves user experience by allowing React to pause, interrupt, and prioritize rendering tasks to ensure the interface remains responsive.",
  },
  {
    id: 3,
    title:
      "How can you prevent performance bottlenecks in a React application with frequently updated state?",
    code: null,
    options: [
      "Use React.memo and avoid unnecessary re-renders",
      "Always use Redux for state management",
      "Use class components instead of functional components",
      "Disable React's strict mode",
    ],
    correctAnswer: 0,
    explanation:
      "React.memo, along with other techniques like memoizing expensive computations (useMemo) and preventing unnecessary state updates, helps optimize performance in React applications.",
  },
  {
    id: 4,
    title: "What is the difference between `useLayoutEffect` and `useEffect`?",
    code: null,
    options: [
      "`useLayoutEffect` runs after rendering, while `useEffect` runs before rendering",
      "`useLayoutEffect` runs synchronously after DOM mutations, while `useEffect` runs asynchronously after rendering",
      "`useLayoutEffect` is deprecated in React",
      "`useLayoutEffect` runs only during SSR",
    ],
    correctAnswer: 1,
    explanation:
      "`useLayoutEffect` runs synchronously after DOM mutations and before the browser paints, making it suitable for layout measurements or DOM updates. `useEffect` runs asynchronously after rendering.",
  },
  {
    id: 5,
    title: "What are React portals, and when would you use them?",
    code: null,
    options: [
      "A feature for creating reusable components",
      "A way to render children into a different part of the DOM tree",
      "A mechanism to optimize rendering performance",
      "A replacement for Context API",
    ],
    correctAnswer: 1,
    explanation:
      "React portals allow you to render children into a different part of the DOM tree (outside the parent DOM hierarchy), often used for modals, tooltips, or overlays.",
  },
  {
    id: 6,
    title: "What will this code output?",
    code: `function App() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
      }, []);

      console.log(count);
      return <div>{count}</div>;
    }`,
    options: [
      "0, and the app renders 2",
      "0, and the app renders 1",
      "The app throws an error",
      "React warns about multiple state updates",
    ],
    correctAnswer: 0,
    explanation:
      "The initial log will show `0` because the state update is batched asynchronously. After the component mounts, `count` will be updated twice (to 2), and the DOM will reflect the final value.",
  },
  {
    id: 7,
    title: "How can you ensure type safety in a React application?",
    code: null,
    options: [
      "By using JavaScript and avoiding TypeScript",
      "By using PropTypes or TypeScript",
      "By using React.memo and useCallback",
      "By creating custom hooks",
    ],
    correctAnswer: 1,
    explanation:
      "Type safety can be ensured using TypeScript for static type checking or PropTypes to validate prop types at runtime.",
  },
  {
    id: 8,
    title: "What is React Suspense, and how does it work?",
    code: null,
    options: [
      "A mechanism to lazy-load components and handle async data fetching",
      "A tool for measuring rendering performance",
      "A replacement for React.memo",
      "A feature for server-side rendering optimization",
    ],
    correctAnswer: 0,
    explanation:
      "React Suspense is used to lazy-load components and manage asynchronous data fetching by pausing rendering until the data or resource is ready.",
  },
  {
    id: 9,
    title: "What is the significance of `renderToPipeableStream` in React 18?",
    code: null,
    options: [
      "It improves client-side rendering performance",
      "It allows streaming SSR for improved performance and flexibility",
      "It replaces React.memo in React 18",
      "It optimizes hydration of client-side apps",
    ],
    correctAnswer: 1,
    explanation:
      "`renderToPipeableStream` is a React 18 feature that enables streaming server-side rendering (SSR), allowing partial HTML to be sent to the browser while the rest of the app is being processed.",
  },
  {
    id: 10,
    title: "How do you handle accessibility in React applications?",
    code: null,
    options: [
      "By using semantic HTML and React ARIA attributes",
      "By using Redux for state management",
      "By avoiding third-party libraries",
      "By disabling strict mode",
    ],
    correctAnswer: 0,
    explanation:
      "Accessibility in React is handled by using semantic HTML, React's ARIA attributes, and libraries like `react-aria` to ensure compatibility with screen readers and other assistive technologies.",
  },
]
