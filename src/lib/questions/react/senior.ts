export const reactSeniorQuestions = [
  {
    id: 1,
    title:
      "How would you debug a memory leak in a React component caused by improper cleanup of subscriptions or timers?",
    code: `useEffect(() => {
  const interval = setInterval(() => {
    // Do something
  }, 1000);
  return () => clearInterval(interval);
}, []);`,
    options: [
      "Use React DevTools Profiler to identify leaking components",
      "Add all subscriptions/timers to a global array and clear them in componentWillUnmount",
      "Replace useEffect with useLayoutEffect",
      "Use WeakMap to store subscriptions",
    ],
    correctAnswer: 0,
    explanation:
      "React DevTools Profiler can track component memory allocation. Always return cleanup functions in useEffect (as shown), and verify all resources are released.",
  },
  {
    id: 2,
    title:
      "How would you optimize a deeply nested context that causes unnecessary re-renders?",
    code: `const MyContext = React.createContext();

const App = () => {
  const [value, setValue] = useState({ data: null });
  return (
    <MyContext.Provider value={{ value, setValue }}>
      <ChildComponent />
    </MyContext.Provider>
  );
};`,
    options: [
      "Split context into multiple providers (state + dispatch)",
      "Memoize the context value with useMemo",
      "Use React.memo on consumer components",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Combining memoization, context splitting, and React.memo prevents unnecessary re-renders caused by context value changes.",
  },
  {
    id: 3,
    title: "What's wrong with this Suspense implementation for data fetching?",
    code: `function App() {
  const data = fetchData(); // Throws promise
  return <div>{data}</div>;
}`,
    options: [
      "Missing Error Boundary to handle promise rejections",
      "Suspense should wrap the component throwing the promise",
      "fetchData() should be called in useEffect",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "Suspense requires Error Boundaries for error handling and proper promise wrapping. Directly throwing in render without Suspense boundaries is unsafe.",
  },
  {
    id: 4,
    title:
      "How would you implement a performant infinite scroll list with React?",
    code: null,
    options: [
      "Use windowing (e.g., react-window) with Intersection Observer",
      "Implement manual DOM measurement with refs",
      "Use CSS grid virtualization",
      "Debounce scroll events with requestAnimationFrame",
    ],
    correctAnswer: 0,
    explanation:
      "Windowing libraries like react-window render only visible items. Intersection Observer efficiently tracks scroll position without constant event listeners.",
  },
  {
    id: 5,
    title: "What's the problem with this state management approach?",
    code: `const GlobalStateContext = React.createContext();

const App = () => {
  const [state, setState] = useState(/* complex object */);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      <DeepTree />
    </GlobalStateContext.Provider>
  );
};`,
    options: [
      "Nested components will re-render unnecessarily when state updates",
      "No way to access state outside components",
      "Missing memoization of context value",
      "Both A and C",
    ],
    correctAnswer: 3,
    explanation:
      "The context value object is recreated on every render, causing unnecessary consumer re-renders. Memoize with useMemo: `value={useMemo(() => ({ state, setState }), [state])}`.",
  },
  {
    id: 6,
    title:
      "How would you implement type-safe React components with complex props in TypeScript?",
    code: `type Props<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};`,
    options: [
      "Use React.FC with generics: const List: React.FC<Props<T>> = ...",
      "Avoid React.FC and use function declarations with type parameters",
      "Use discriminated unions for props",
      "All are valid approaches",
    ],
    correctAnswer: 1,
    explanation:
      "Using function declarations with type parameters (`function List<T>({ items, renderItem }: Props<T>)`) provides better type inference than React.FC with generics.",
  },
  {
    id: 7,
    title: "What's the issue with this React.memo implementation?",
    code: `const MemoizedComponent = React.memo(({ data }) => (
  <div>{data.value}</div>
));`,
    options: [
      "Missing custom comparison function for data prop",
      "data prop is an object and will cause unnecessary re-renders",
      "React.memo only works with class components",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "React.memo shallowly compares props. If `data` is a new object reference each render, it will re-render unnecessarily. Provide a custom comparison function.",
  },
  {
    id: 8,
    title:
      "How would you implement a performant drag-and-drop list with React?",
    code: null,
    options: [
      "Use CSS transforms for smooth updates and avoid state changes during drag",
      "Store positions in Redux and update on every mouse move",
      "Use requestAnimationFrame with direct DOM manipulation",
      "Implement a custom React renderer",
    ],
    correctAnswer: 0,
    explanation:
      "CSS transforms handle visual updates efficiently. Delay state updates until drag ends to avoid excessive re-renders during movement.",
  },
  {
    id: 9,
    title: "What's wrong with this custom hook implementation?",
    code: `const useAPI = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, []);
  return data;
};`,
    options: [
      "Missing cleanup for in-flight requests",
      "No error handling",
      "URL changes aren't tracked in dependencies",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "The hook doesn't handle URL changes, errors, or cancel pending requests. Use AbortController for cleanup and include [url] in dependencies.",
  },
  {
    id: 10,
    title:
      "How would you implement A/B testing in React without causing hydration mismatches?",
    code: null,
    options: [
      "Render different variants on the client only using useEffect",
      "Use CSS display: none for hidden variants",
      "Store variant in cookies and render server-side with Next.js",
      "Use React Portals for dynamic rendering",
    ],
    correctAnswer: 0,
    explanation:
      "Server-side rendering requires hydration matching. Decide A/B variants client-side in useEffect to avoid SSR mismatches.",
  },
  {
    id: 11,
    title: "What's the problem with this React-Redux implementation?",
    code: `const mapState = (state) => ({ items: state.items });
const ConnectedComponent = connect(mapState)(MyComponent);`,
    options: [
      "mapState creates new object references causing unnecessary re-renders",
      "Should use useSelector hook instead",
      "Missing memoization of mapState",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "connect with mapState can cause re-renders if selector returns new references. Use memoized selectors with Reselect or switch to useSelector with shallow equality checks.",
  },
  {
    id: 12,
    title:
      "How would you implement code splitting for routes in a Next.js application?",
    code: null,
    options: [
      "Use next/dynamic with loading states",
      "Configure splitChunks in webpack",
      "Use React.lazy with Suspense",
      "Both A and C",
    ],
    correctAnswer: 0,
    explanation:
      "Next.js requires next/dynamic for SSR-compatible code splitting. React.lazy only works in client-side rendered apps.",
  },
  {
    id: 13,
    title: "What's the issue with this React concurrent mode implementation?",
    code: `function App() {
  const [resource] = useState(() => createResource(fetchData()));
  return (
    <Suspense fallback={<Loader />}>
      <DataComponent resource={resource} />
    </Suspense>
  );
}`,
    options: [
      "createResource should be called outside useState",
      "Missing transition to mark updates as non-urgent",
      "Suspense fallback isn't properly styled",
      "DataComponent should use useTransition",
    ],
    correctAnswer: 1,
    explanation:
      "Concurrent mode requires useTransition to batch state updates and prioritize rendering. Directly throwing promises without transitions can cause flickering.",
  },
  {
    id: 14,
    title: "How would you optimize a React app loading 1000+ components?",
    code: null,
    options: [
      "Virtualize lists and memoize components",
      "Use Web Workers for rendering",
      "Implement shouldComponentUpdate with deep equality checks",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation:
      "Windowing (virtualization) and memoization are most effective. Web Workers add complexity and don't solve main thread rendering bottlenecks.",
  },
  {
    id: 15,
    title: "What's wrong with this React Server Components implementation?",
    code: `// server-component.js
export default function ServerComponent() {
  const data = fetch('...'); // Server-side fetch
  return <ClientComponent data={data} />;
}

// client-component.js
'use client';
export default function ClientComponent({ data }) {
  return <div>{data}</div>;
}`,
    options: [
      "Server Components can't pass data to Client Components",
      "Data isn't serializable over the network",
      "Client Components can't receive props from Server Components",
      "Server Components shouldn't be directly nested in Client Components",
    ],
    correctAnswer: 1,
    explanation:
      "Data passed from Server to Client Components must be serializable (JSON). Functions/classes won't transfer. Use React Server Component payload format.",
  },
  {
    id: 16,
    title: "How would you implement a type-safe Redux store with TypeScript?",
    code: `type Action = { type: 'ADD'; payload: number } | { type: 'RESET' };`,
    options: [
      "Use discriminated unions for actions",
      "Implement type guards in reducers",
      "Use the satisfies operator for action creators",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Discriminated unions enable type-safe reducers. Type guards and satisfies (TS 4.9+) provide end-to-end type safety.",
  },
  {
    id: 17,
    title: "What's the problem with this React Query implementation?",
    code: `function App() {
  const { data } = useQuery(['todos'], fetchTodos);
  return <div>{data.map(renderItem)}</div>;
}`,
    options: [
      "Missing error handling and loading states",
      "Data could be undefined on initial render",
      "Query key isn't serializable",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "React Query returns data as undefined initially. Always check data existence: `data?.map()` and handle loading/error states.",
  },
  {
    id: 18,
    title: "How would you implement a micro-frontend architecture with React?",
    code: null,
    options: [
      "Use Module Federation with Webpack 5",
      "Implement iframe-based isolation",
      "Use single-spa for framework-agnostic integration",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Module Federation enables shared dependencies. single-spa handles routing between apps. iframes provide isolation but are heavy.",
  },
  {
    id: 19,
    title: "What's wrong with this React performance optimization?",
    code: `const ExpensiveComponent = React.memo(({ data }) => (
  <div>{calculateExpensiveValue(data)}</div>
));`,
    options: [
      "calculateExpensiveValue should be memoized with useMemo",
      "React.memo doesn't prevent expensive calculations in render",
      "data prop changes too frequently",
      "All of the above",
    ],
    correctAnswer: 1,
    explanation:
      "React.memo prevents re-renders but doesn't optimize calculations during render. Memoize the calculation itself with useMemo.",
  },
  {
    id: 20,
    title: "How would you secure a React app against XSS attacks?",
    code: null,
    options: [
      "Sanitize all user inputs with DOMPurify",
      "Avoid dangerouslySetInnerHTML",
      "Use CSP headers and nonce values",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Combining input sanitization, avoiding dangerous APIs, and Content Security Policy provides defense-in-depth against XSS.",
  },
  {
    id: 21,
    title: "What's the issue with this React Testing Library implementation?",
    code: `test('clicks button', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Submit'));
  expect(axios.post).toHaveBeenCalled();
});`,
    options: [
      "Missing waitFor for async operations",
      "Testing implementation details (axios mocking)",
      "No cleanup after test",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "Testing Library discourages mocking implementation details. Use MSW for API mocking and waitFor for async assertions.",
  },
  {
    id: 22,
    title: "How would you implement real-time updates in a React app?",
    code: null,
    options: [
      "Use WebSocket with SWR/React Query for state synchronization",
      "Poll API every 5 seconds with useEffect",
      "Use Redux with socket middleware",
      "All are valid approaches",
    ],
    correctAnswer: 3,
    explanation:
      "WebSockets + SWR/React Query provide efficient real-time sync. Polling is less efficient. Redux middleware works but adds complexity.",
  },
  {
    id: 23,
    title: "What's wrong with this React Router implementation?",
    code: `function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}`,
    options: [
      "Layout won't render for 404 routes",
      "The catch-all route should be outside Layout",
      "Missing BrowserRouter wrapper",
      "Both B and C",
    ],
    correctAnswer: 1,
    explanation:
      "The catch-all (*) route inherits the Layout. To show a different layout for 404s, place it outside the main Route hierarchy.",
  },
  {
    id: 24,
    title: "How would you implement a design system in React?",
    code: null,
    options: [
      "Use styled-components with theme provider",
      "Build components with Storybook and Chromatic",
      "Implement atomic design principles",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "A robust design system requires theming (styled-components), documentation (Storybook), testing (Chromatic), and architecture (atomic design).",
  },
  {
    id: 25,
    title: "What's the problem with this React Profiler implementation?",
    code: `function App() {
  return (
    <Profiler id="app" onRender={(id, phase, actualTime) => {
      console.log({ phase, actualTime });
    }}>
      <Component />
    </Profiler>
  );
}`,
    options: [
      "Profiler adds significant performance overhead",
      "Missing production guard for profiling",
      "onRender callback isn't memoized",
      "All of the above",
    ],
    correctAnswer: 1,
    explanation:
      "Profiling should be disabled in production. Wrap the Profiler in a condition: `if (process.env.NODE_ENV === 'development')`.",
  },
]
