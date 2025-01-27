export const zustandIntermediateQuestions = [
  {
    id: 1,
    title: "How do you define a Zustand store with multiple actions?",
    code: null,
    options: [
      "By defining multiple stores and combining them.",
      "By passing multiple functions to the `create` method.",
      "By using `useReducer` inside the store.",
      "Zustand does not support multiple actions in a single store.",
    ],
    correctAnswer: 1,
    explanation:
      "In Zustand, you can define multiple actions within a single store by passing them as functions in the store's definition.",
  },
  {
    id: 2,
    title: "How do you handle async actions in Zustand?",
    code: null,
    options: [
      "By using `setState` inside `async` functions.",
      "Zustand cannot handle async actions.",
      "By using `useEffect` inside the store.",
      "By defining a store that returns a Promise.",
    ],
    correctAnswer: 0,
    explanation:
      "Zustand allows you to define async actions that return a promise. Inside the action, you can perform asynchronous operations, like API calls.",
  },
  {
    id: 3,
    title: "What middleware can be used to handle persistence in Zustand?",
    code: null,
    options: ["persist", "redux-persist", "usePersist", "state-persist"],
    correctAnswer: 0,
    explanation:
      "Zustand provides the `persist` middleware to persist the store data to storage (e.g., localStorage or sessionStorage).",
  },
  {
    id: 4,
    title:
      "How do you access the current state of the store outside of React components?",
    code: null,
    options: [
      "useStore.getState()",
      "store.getState()",
      "getState()",
      "Zustand does not allow access outside of React components.",
    ],
    correctAnswer: 0,
    explanation:
      "You can access the current state of the store outside of React components using `useStore.getState()`.",
  },
  {
    id: 5,
    title:
      "How can you optimize Zustand stores by minimizing unnecessary renders?",
    code: null,
    options: [
      "By wrapping the store in `React.memo`.",
      "By using the `useReducer` hook inside the store.",
      "By using `useEffect` to optimize re-renders.",
      "By using selectors in `useStore` to access only the required part of the state.",
    ],
    correctAnswer: 3,
    explanation:
      "To minimize unnecessary re-renders, you should use selectors in `useStore` to access only the specific parts of the state that the component depends on.",
  },
  {
    id: 6,
    title: "How do you share state between multiple stores in Zustand?",
    code: null,
    options: [
      "By merging store definitions.",
      "By creating separate stores and using `useContext`.",
      "By accessing one store's state inside another store.",
      "By passing state between stores using `props`.",
    ],
    correctAnswer: 2,
    explanation:
      "In Zustand, you can access one store's state inside another store by using `useStore.getState()` or `useStore` from the other store.",
  },
  {
    id: 7,
    title: "What is the purpose of `subscribe` in Zustand?",
    code: null,
    options: [
      "It is used to trigger actions in the store.",
      "It persists the store's state.",
      "It allows you to subscribe to specific state changes.",
      "It allows you to access external data inside the store.",
    ],
    correctAnswer: 2,
    explanation:
      "The `subscribe` function allows you to subscribe to specific state changes and react to those changes in your component.",
  },
  {
    id: 8,
    title: "How do you use Zustand with TypeScript?",
    code: null,
    options: [
      "By creating type definitions for the store's state.",
      "By using `useState` inside the store.",
      "Zustand does not support TypeScript.",
      "By passing types to `create` function.",
    ],
    correctAnswer: 0,
    explanation:
      "Zustand can be used with TypeScript by defining types for the store's state and actions.",
  },
  {
    id: 9,
    title: "What happens if you mutate the state directly in a Zustand store?",
    code: null,
    options: [
      "The store will throw an error.",
      "The state will not trigger re-renders.",
      "Zustand automatically handles mutations.",
      "The component will crash.",
    ],
    correctAnswer: 1,
    explanation:
      "If you mutate the state directly, Zustand will not detect the change and the component will not re-render. Always use the `set` function to update the state.",
  },
  {
    id: 10,
    title: "How can you reset the Zustand store state?",
    code: null,
    options: [
      "By calling `useStore.setState({})`.",
      "By using the `reset` function.",
      "Zustand does not support resetting the state.",
      "By setting the state to `null`.",
    ],
    correctAnswer: 0,
    explanation:
      "You can reset the Zustand store state by calling `useStore.setState({})` to set the state back to its initial value.",
  },
]
