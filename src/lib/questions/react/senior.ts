import { Question } from "@/features/layout/QuestionViewer"

export const reactSeniorQuestions: Question[] = [
  {
    id: 1,
    title:
      "What are the implications of React's concurrent mode and how does it affect component lifecycle?",
    options: [
      "It introduces new rendering behaviors including interruptible rendering and priority-based updates",
      "It only affects rendering speed",
      "It's just a performance optimization",
      "It only affects error handling",
    ],
    correctAnswer: 0,
    explanation:
      "Concurrent Mode enables React to work on multiple versions of the UI simultaneously, interrupt and resume rendering based on priority, and handle background updates without blocking the main thread.",
    code: null,
  },
  {
    id: 2,
    title:
      "How would you implement a custom reconciliation algorithm for a specific use case?",
    options: [
      "It's not possible to customize reconciliation",
      "By implementing shouldComponentUpdate only",
      "By using custom diffing logic with React.memo and useMemo with custom equality functions",
      "By modifying React's source code",
    ],
    correctAnswer: 2,
    explanation:
      "Custom reconciliation can be implemented through careful use of custom equality functions in React.memo and useMemo, allowing fine-grained control over when components and values should update.",
    code: null,
  },
  {
    id: 3,
    title:
      "What are the performance implications of using React.createPortal for modal rendering?",
    options: [
      "Portals have no performance impact",
      "Portals can impact performance due to event delegation and React's event system traversal",
      "Portals always improve performance",
      "Portals only affect DOM structure",
    ],
    correctAnswer: 1,
    explanation:
      "While portals help with DOM structure, they can impact performance due to React's event system needing to traverse the React tree even though the DOM structure is different, requiring careful consideration of event handling and rendering optimization.",
    code: null,
  },
  {
    id: 4,
    title: "How would you implement a custom scheduler for React updates?",
    options: [
      "Using requestIdleCallback or a custom priority queue with React's scheduler package",
      "Using setTimeout only",
      "Using setInterval",
      "It's not possible",
    ],
    correctAnswer: 0,
    explanation:
      "Custom scheduling can be implemented using React's scheduler package along with requestIdleCallback or a custom priority queue, allowing fine-grained control over when updates occur based on priority and available time.",
    code: null,
  },
  {
    id: 5,
    title:
      "What are the implications of using shared state management libraries with React's concurrent features?",
    options: [
      "They always work together seamlessly",
      "External state management can conflict with concurrent rendering, requiring specific integration patterns",
      "They cannot be used together",
      "Only Redux is compatible",
    ],
    correctAnswer: 1,
    explanation:
      "External state management libraries need to be carefully integrated with concurrent features to avoid tearing and ensure consistency across interrupted renders, often requiring specific patterns or adaptors.",
    code: null,
  },
  {
    id: 6,
    title:
      "How would you implement a custom rendering pipeline for React components?",
    options: [
      "It's not possible",
      "Using custom renderers with reconciler package and implementing host config",
      "Modifying ReactDOM",
      "Using third-party libraries",
    ],
    correctAnswer: 1,
    explanation:
      "Custom rendering pipelines can be implemented using React's reconciler package and implementing a host config that defines how React elements should be created, updated, and removed in your target platform.",
    code: null,
  },
  {
    id: 7,
    title:
      "What are the security implications of using dangerouslySetInnerHTML with user-generated content?",
    options: [
      "There are no security implications",
      "It only affects performance",
      "It can lead to XSS attacks if content isn't properly sanitized and CSP isn't properly configured",
      "It only affects rendering",
    ],
    correctAnswer: 2,
    explanation:
      "dangerouslySetInnerHTML can lead to XSS vulnerabilities if user content isn't properly sanitized. Proper CSP configuration and sanitization libraries are crucial for security.",
    code: null,
  },
  {
    id: 8,
    title:
      "How would you implement a custom state management solution that integrates with React's concurrent features?",
    options: [
      "Using global variables",
      "Using Context API",
      "Using Redux",
      "By implementing a subscription model that's aware of concurrent rendering and can handle interrupted renders",
    ],
    correctAnswer: 3,
    explanation:
      "A concurrent-safe state management solution needs to handle interrupted renders, implement proper subscription patterns, and possibly use React's useMutableSource or similar primitives.",
    code: null,
  },
  {
    id: 9,
    title:
      "What are the implications of using refs for state management in concurrent mode?",
    options: [
      "Refs can lead to race conditions and inconsistent state in concurrent rendering",
      "Refs are always safe to use",
      "Refs are deprecated in concurrent mode",
      "Refs only affect DOM elements",
    ],
    correctAnswer: 0,
    explanation:
      "Refs can lead to race conditions in concurrent mode as they bypass React's rendering system. Care must be taken to ensure ref updates don't conflict with concurrent rendering.",
    code: null,
  },
  {
    id: 10,
    title:
      "How would you implement a custom hook that handles complex async operations with proper cleanup?",
    options: [
      "Using promises",
      "Using async/await",
      "Using a combination of refs, state, and cleanup functions to handle race conditions and memory leaks",
      "Using basic useEffect",
    ],
    correctAnswer: 2,
    explanation:
      "Complex async hooks require careful handling of cleanup, race conditions, and potential memory leaks using refs to track the latest call, proper cleanup functions, and state management.",
    code: null,
  },
  {
    id: 11,
    title:
      "What are the performance implications of using context for frequent updates?",
    options: [
      "Context updates are always batched",
      "Context only affects direct consumers",
      "Context updates can cause unnecessary re-renders in the component tree if not properly optimized",
      "Context is always fast",
    ],
    correctAnswer: 2,
    explanation:
      "Context updates can cause re-renders of all consumers and their children unless carefully optimized using techniques like context splitting, memoization, and selective updates.",
    code: null,
  },
  {
    id: 12,
    title:
      "How would you implement a custom error boundary that handles async errors?",
    options: [
      "Using window.onerror",
      "Implementing getDerivedStateFromError and componentDidCatch with async error tracking",
      "Using try/catch",
      "Using error events",
    ],
    correctAnswer: 1,
    explanation:
      "Custom error boundaries for async operations require careful implementation of error lifecycle methods and possibly integration with async error tracking systems.",
    code: null,
  },
  {
    id: 13,
    title:
      "What are the implications of using imperative handle patterns with concurrent features?",
    options: [
      "They always work together",
      "Only affects class components",
      "Imperative handles need to be designed to handle potential interrupted renders and state inconsistencies",
      "They cannot be used together",
    ],
    correctAnswer: 2,
    explanation:
      "Imperative handles in concurrent mode need to be designed to handle interrupted renders and potential state inconsistencies, possibly requiring synchronization mechanisms.",
    code: null,
  },
  {
    id: 14,
    title:
      "How would you implement a custom rendering optimization for a complex virtualized list?",
    options: [
      "Using pagination",
      "Implementing windowing with intersection observer and custom scheduling for render optimization",
      "Using React.memo",
      "Using CSS",
    ],
    correctAnswer: 1,
    explanation:
      "Complex virtualized lists require careful implementation of windowing, intersection observer usage, and custom scheduling to optimize rendering and memory usage.",
    code: null,
  },
  {
    id: 15,
    title:
      "What are the security implications of using refs to store sensitive data?",
    options: [
      "Only affects rendering",
      "Refs can expose sensitive data to memory and need proper cleanup and security considerations",
      "Only affects performance",
      "Refs are always secure",
    ],
    correctAnswer: 1,
    explanation:
      "Storing sensitive data in refs requires careful consideration of memory exposure, proper cleanup, and potential security implications in different JavaScript environments.",
    code: null,
  },
  {
    id: 16,
    title: "How would you implement a custom suspense cache for data fetching?",
    options: [
      "Using localStorage",
      "Using regular caching",
      "Implementing a cache that integrates with Suspense, handles concurrent requests, and manages resources",
      "Using global state",
    ],
    correctAnswer: 2,
    explanation:
      "A custom suspense cache needs to handle concurrent requests, resource management, and integration with React's Suspense mechanism while maintaining consistency.",
    code: null,
  },
  {
    id: 17,
    title:
      "What are the implications of using shared mutable state in concurrent mode?",
    options: [
      "Shared mutable state can lead to race conditions and inconsistencies in concurrent rendering",
      "Only affects hooks",
      "Only affects class components",
      "Mutable state is fine",
    ],
    correctAnswer: 0,
    explanation:
      "Shared mutable state in concurrent mode can lead to race conditions and inconsistencies as React may interrupt and restart rendering, requiring careful state management patterns.",
    code: null,
  },
  {
    id: 18,
    title:
      "How would you implement a custom scheduling strategy for expensive computations?",
    options: [
      "Using async/await",
      "Using time slicing with requestIdleCallback and custom priority queue management",
      "Using setTimeout",
      "Using Web Workers only",
    ],
    correctAnswer: 1,
    explanation:
      "Custom scheduling for expensive computations requires implementation of time slicing, priority queue management, and possibly integration with Web Workers for optimal performance.",
    code: null,
  },
  {
    id: 19,
    title:
      "What are the performance implications of using dynamic imports with Suspense?",
    options: [
      "Only affects code splitting",
      "Can impact initial load time and memory usage if not properly implemented with chunking strategies",
      "Always improves performance",
      "No performance impact",
    ],
    correctAnswer: 1,
    explanation:
      "Dynamic imports with Suspense require careful consideration of chunking strategies, loading priorities, and cache implementation to optimize performance and memory usage.",
    code: null,
  },
  {
    id: 20,
    title:
      "How would you implement a custom rendering strategy for server-side streaming?",
    options: [
      "Using static generation",
      "Using regular SSR",
      "Implementing streaming with selective hydration and progressive enhancement",
      "Using client-side rendering",
    ],
    correctAnswer: 2,
    explanation:
      "Server-side streaming requires implementation of selective hydration, progressive enhancement, and careful handling of state and events during the streaming process.",
    code: null,
  },
]
