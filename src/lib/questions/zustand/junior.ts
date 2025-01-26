export const zustandJuniorQuestions = [
  {
    id: 1,
    title: "What is Zustand?",
    code: null,
    options: [
      "A state management library for React.",
      "A UI framework for building React applications.",
      "A CSS preprocessor.",
      "A component library for React.",
    ],
    correctAnswer: 0,
    explanation:
      "Zustand is a small, fast, and scalable state management library for React. It allows you to create stores and manage state in a simple way.",
  },
  {
    id: 2,
    title: "Which hook do you use to get the store's state in Zustand?",
    code: null,
    options: ["useStore", "useState", "useSelector", "useContext"],
    correctAnswer: 0,
    explanation:
      "In Zustand, you use the `useStore` hook to access the state from the store in your React components.",
  },
  {
    id: 3,
    title: "How do you define a store in Zustand?",
    code: null,
    options: [
      "const useStore = createStore();",
      "const useStore = create((set) => ({ ... }))",
      "const useStore = new Store();",
      "const useStore = create();",
    ],
    correctAnswer: 1,
    explanation:
      "In Zustand, you define a store using the `create` function that takes a setter function where you define the state and actions.",
  },
  {
    id: 4,
    title: "What is the purpose of the `set` function in Zustand?",
    code: null,
    options: [
      "To update the state of the store.",
      "To fetch data from an API.",
      "To reset the state.",
      "To subscribe to the store.",
    ],
    correctAnswer: 0,
    explanation:
      "The `set` function in Zustand is used to update the state of the store. It is called inside the store's definition to modify the state.",
  },
  {
    id: 5,
    title: "How do you access a part of the store's state in Zustand?",
    code: null,
    options: [
      "useStore('count')",
      "useStore(state => state.count)",
      "getStore('count')",
      "useStore({ count })",
    ],
    correctAnswer: 1,
    explanation:
      "To access a part of the store's state, you use the `useStore` hook and pass a function that selects the part of the state you need.",
  },
  {
    id: 6,
    title: "How do you trigger an action inside the store?",
    code: null,
    options: [
      "By calling `store.action()`.",
      "By calling `useStore` with the action name.",
      "By calling the action directly from the store: `useStore.getState().action()`.",
      "Actions are triggered automatically.",
    ],
    correctAnswer: 2,
    explanation:
      "In Zustand, actions can be triggered directly by accessing them through the store instance with `useStore.getState().action()`.",
  },
  {
    id: 7,
    title: "How can you persist Zustand store data to `localStorage`?",
    code: null,
    options: [
      "Zustand automatically persists data to `localStorage`.",
      "You need to manually store data in `localStorage` using actions.",
      "You need to use a middleware like `persist` in Zustand.",
      "Zustand doesn't support persistence.",
    ],
    correctAnswer: 2,
    explanation:
      "Zustand provides a middleware called `persist` that helps to persist store data to `localStorage` or any other storage.",
  },
  {
    id: 8,
    title: "What is the default state in a Zustand store?",
    code: null,
    options: [
      "An empty object.",
      "An empty array.",
      "A boolean value `false`.",
      "There is no default state.",
    ],
    correctAnswer: 3,
    explanation:
      "Zustand does not have a default state. You define the initial state when creating the store.",
  },
  {
    id: 9,
    title: "How do you subscribe to state changes in Zustand?",
    code: null,
    options: [
      "By using the `subscribe` method.",
      "By using `useEffect`.",
      "By using `useStore` with a function to select state.",
      "By using the `observer` HOC.",
    ],
    correctAnswer: 2,
    explanation:
      "In Zustand, you can subscribe to state changes by using the `useStore` hook and passing a selector function.",
  },
  {
    id: 10,
    title: "What is the role of `get` in Zustand?",
    code: null,
    options: [
      "It accesses the state of the store inside an action.",
      "It gets the state directly from the store.",
      "It fetches data from an API.",
      "It is used to update the store's state.",
    ],
    correctAnswer: 0,
    explanation:
      "`get` is a function that allows you to access the store's current state from within an action. It helps you read the current state before updating it.",
  },
]
