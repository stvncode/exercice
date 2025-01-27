export const zustandSeniorQuestions = [
  {
    id: 1,
    title: "How can you implement optimistic updates with Zustand?",
    code: null,
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
    code: null,
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
    code: null,
    options: [
      "By using Zustand's `persist` middleware to save state.",
      "By using Zustand's built-in SSR support.",
      "By initializing the store in the component's server-rendered code.",
      "Zustand is not compatible with SSR.",
    ],
    correctAnswer: 2,
    explanation:
      "You can use Zustand in a server-side rendering (SSR) environment by initializing and setting the state on the server side, ensuring that the state is transferred to the client when needed.",
  },
  {
    id: 4,
    title: "How would you implement a derived state in Zustand?",
    code: null,
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
    code: null,
    options: [
      "By using a custom `ErrorBoundary` component in the store.",
      "By implementing a global error handler in Zustand.",
      "Zustand does not handle errors within actions.",
      "By using `try-catch` blocks inside the actions to handle errors.",
    ],
    correctAnswer: 3,
    explanation:
      "Error handling inside actions in Zustand can be done using `try-catch` blocks to catch errors during asynchronous operations and store them in the state.",
  },
  {
    id: 6,
    title:
      "How do you manage multiple stores with Zustand without prop drilling?",
    code: null,
    options: [
      "By using `useStore` to access individual stores separately in components.",
      "By using `useStore` and combining multiple stores with `combine`.",
      "By using context to share the store state across the application.",
      "By passing store states as props down to child components.",
    ],
    correctAnswer: 1,
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
    code: null,
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
    code: null,
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
      "Use `useContext` to manage state globally.",
      "Split large stores into multiple smaller stores and use context to manage them.",
      "Use selectors and memoization to reduce re-renders.",
      "Zustand is not optimized for large applications.",
    ],
    correctAnswer: 2,
    explanation:
      "To optimize performance in large applications, use selectors and memoization to avoid unnecessary re-renders when parts of the state change.",
  },
]
