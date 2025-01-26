export const zustandSeniorQuestions = [
  {
    id: 1,
    title: "How can you implement optimistic updates with Zustand?",
    code: `
      const useStore = create((set) => ({
        count: 0,
        increment: (optimisticValue) => {
          set({ count: optimisticValue });
          fetch('/api/increment')
            .then(() => set((state) => ({ count: state.count + 1 })))
            .catch(() => set((state) => ({ count: state.count - 1 })));
        },
      }));
    `,
    options: [
      "By directly setting the state optimistically and rolling back if the action fails.",
      "By using `useEffect` to handle optimistic updates.",
      "By using middleware to handle optimistic updates.",
      "Optimistic updates cannot be implemented in Zustand.",
    ],
    correctAnswer: 0,
    explanation:
      "Optimistic updates in Zustand can be implemented by directly setting the state optimistically, and then either committing the change or rolling it back based on the outcome of the asynchronous operation.",
  },
  {
    id: 2,
    title: "How can you compose multiple stores in Zustand to share state?",
    code: `
      const useFirstStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }));

      const useSecondStore = create((set) => ({
        incrementBy: (value) => set((state) => ({ count: state.count + value })),
      }));

      const useCombinedStore = (set) => ({
        ...useFirstStore(set),
        ...useSecondStore(set),
      });
    `,
    options: [
      "By merging the store functions using `create`.",
      "By using `combine` function from Zustand.",
      "By creating separate stores and using `useContext`.",
      "By defining stores as separate entities and combining their states manually.",
    ],
    correctAnswer: 0,
    explanation:
      "Zustand allows you to compose multiple stores by merging their definitions using the `create` function. This way, you can share state across stores.",
  },
  {
    id: 3,
    title: "How can you use Zustand with server-side rendering (SSR)?",
    code: `
      const useStore = create((set) => ({
        userData: null,
        setUserData: (data) => set({ userData: data }),
      }));

      // Server-side render handling
      if (typeof window === 'undefined') {
        useStore.getState().setUserData(serverData);
      }
    `,
    options: [
      "By initializing the store in the component's server-rendered code.",
      "By using Zustand's `persist` middleware to save state.",
      "By using Zustand's built-in SSR support.",
      "Zustand is not compatible with SSR.",
    ],
    correctAnswer: 0,
    explanation:
      "You can use Zustand in a server-side rendering (SSR) environment by initializing and setting the state on the server side, ensuring that the state is transferred to the client when needed.",
  },
  {
    id: 4,
    title: "How would you implement a derived state in Zustand?",
    code: `
      const useStore = create((set) => ({
        count: 0,
        get doubleCount() {
          return useStore.getState().count * 2;
        },
      }));
    `,
    options: [
      "By creating a getter method that computes the derived state from the base state.",
      "By using selectors to derive new state.",
      "By using `useEffect` to calculate derived state.",
      "Zustand does not support derived state.",
    ],
    correctAnswer: 0,
    explanation:
      "In Zustand, derived state can be implemented using getter methods or selectors that compute the state based on the existing store state.",
  },
  {
    id: 5,
    title: "How can you handle error boundaries in Zustand actions?",
    code: `
      const useStore = create((set) => ({
        fetchData: async () => {
          try {
            const data = await fetch('/api/data');
            set({ data });
          } catch (error) {
            set({ error });
          }
        },
      }));
    `,
    options: [
      "By using `try-catch` blocks inside the actions to handle errors.",
      "By using a custom `ErrorBoundary` component in the store.",
      "By implementing a global error handler in Zustand.",
      "Zustand does not handle errors within actions.",
    ],
    correctAnswer: 0,
    explanation:
      "Error handling inside actions in Zustand can be done using `try-catch` blocks to catch errors during asynchronous operations and store them in the state.",
  },
  {
    id: 6,
    title:
      "How do you manage multiple stores with Zustand without prop drilling?",
    code: null,
    options: [
      "By using `useStore` and combining multiple stores with `combine`.",
      "By using `useStore` to access individual stores separately in components.",
      "By using context to share the store state across the application.",
      "By passing store states as props down to child components.",
    ],
    correctAnswer: 0,
    explanation:
      "You can manage multiple stores without prop drilling by combining them using Zustand's `create` function or by accessing multiple stores directly in components via the `useStore` hook.",
  },
  {
    id: 7,
    title: "What are the benefits of using `immer` middleware in Zustand?",
    code: null,
    options: [
      "It allows for immutable updates to the store's state using mutable operations.",
      "It automatically persists store state to `localStorage`.",
      "It provides a higher-level API for state management.",
      "It helps with handling async actions.",
    ],
    correctAnswer: 0,
    explanation:
      "The `immer` middleware in Zustand allows you to update the store's state immutably using mutable operations, making state management easier and more intuitive.",
  },
  {
    id: 8,
    title: "How can you trigger side effects after state changes in Zustand?",
    code: `
      const useStore = create((set) => ({
        count: 0,
        increment: () => {
          set((state) => ({ count: state.count + 1 }));
          // Side effect: Log to console after update
          console.log('Count updated:', state.count);
        },
      }));
    `,
    options: [
      "By using `useEffect` to listen to store state changes.",
      "By manually adding side effects inside the actions.",
      "By using the `subscribe` method to trigger side effects.",
      "Zustand does not allow side effects.",
    ],
    correctAnswer: 1,
    explanation:
      "Side effects in Zustand can be triggered manually inside actions, such as logging to the console or making an API call after state updates.",
  },
  {
    id: 9,
    title: "How can you manage a Zustand store with multiple reducers?",
    code: `
      const useStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }));
    `,
    options: [
      "By combining reducers inside a single store function.",
      "By using multiple stores and combining their reducers manually.",
      "By using the `combineReducers` function.",
      "Zustand does not support multiple reducers.",
    ],
    correctAnswer: 0,
    explanation:
      "You can manage multiple reducers by defining several state management functions inside a single store function and calling them based on the action.",
  },
  {
    id: 10,
    title:
      "What performance optimizations can you make with Zustand in large applications?",
    code: null,
    options: [
      "Use selectors and memoization to reduce re-renders.",
      "Use `useContext` to manage state globally.",
      "Split large stores into multiple smaller stores and use context to manage them.",
      "Zustand is not optimized for large applications.",
    ],
    correctAnswer: 0,
    explanation:
      "To optimize performance in large applications, use selectors and memoization to avoid unnecessary re-renders when parts of the state change.",
  },
]
