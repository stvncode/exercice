export const reactQueryIntermediateQuestions = [
  {
    id: 1,
    title:
      "How do you prevent React Query from refetching data when the component remounts?",
    code: null,
    options: [
      "Set `cacheTime` to 0",
      "Set the `staleTime` to Infinity",
      "Set `refetchOnWindowFocus` to false",
      "Use `useMemo` hook",
    ],
    correctAnswer: 1,
    explanation:
      "Setting `staleTime` to Infinity will make the data never considered stale, preventing a refetch when the component remounts.",
  },
  {
    id: 2,
    title:
      "What is the purpose of `onSuccess` and `onError` callbacks in `useMutation`?",
    code: null,
    options: [
      "To refetch queries after mutation",
      "To execute additional queries after mutation",
      "To manage loading and error states",
      "To handle side effects like updating local state or UI after mutation",
    ],
    correctAnswer: 3,
    explanation:
      "`onSuccess` and `onError` allow you to run functions after a mutation succeeds or fails, for example, to update the UI or trigger other queries.",
  },
  {
    id: 3,
    title:
      "What is the difference between `useQuery` and `useMutation` in React Query?",
    code: null,
    options: [
      "`useQuery` is used for caching data, and `useMutation` for caching data updates",
      "`useQuery` is for HTTP requests, and `useMutation` is for caching responses",
      "`useQuery` is used for data fetching, and `useMutation` is used for updating data",
      "`useQuery` automatically updates the UI, while `useMutation` does not",
    ],
    correctAnswer: 2,
    explanation:
      "`useQuery` is used for fetching data, while `useMutation` is used for updating or creating data (e.g., via POST, PUT, DELETE).",
  },
  {
    id: 4,
    title: "How would you handle pagination with React Query?",
    code: null,
    options: [
      "By using `useQuery` with pagination parameters like `page` and `limit`",
      "By using the `usePaginate` hook",
      "By manually managing the state of pages",
      "By using a state management library for pagination",
    ],
    correctAnswer: 0,
    explanation:
      "React Query allows pagination by passing parameters like `page` and `limit` to `useQuery`. It will manage fetching data for each page efficiently.",
  },
  {
    id: 5,
    title:
      "What happens when the `refetchInterval` option is set in `useQuery`?",
    code: null,
    options: [
      "It sets the cache timeout for the query",
      "It triggers a refetch of the data every specified number of milliseconds",
      "It prevents the query from refetching when a component remounts",
      "It increases the query's cacheTime",
    ],
    correctAnswer: 1,
    explanation:
      "`refetchInterval` will automatically refetch the data every X milliseconds, ideal for use cases such as real-time data.",
  },
  {
    id: 6,
    title:
      "What is the difference between `cacheTime` and `staleTime` in React Query?",
    code: null,
    options: [
      "`cacheTime` controls how long the query data is kept in the cache, and `staleTime` controls when the data is considered stale.",
      "`cacheTime` is used to trigger a refetch, while `staleTime` controls query retries",
      "`cacheTime` defines the maximum amount of time a query can live in the cache",
      "`staleTime` sets how long the query can stay stale",
    ],
    correctAnswer: 0,
    explanation:
      "`cacheTime` is how long the data stays in the cache, while `staleTime` is how long it remains fresh before being marked stale and triggering a refetch.",
  },
  {
    id: 7,
    title: "How do you handle optimistic updates with React Query?",
    code: null,
    options: [
      "By using the `useMutation` hook with `onSuccess`",
      "By using the `useQuery` hook with `refetch`",
      "By using the `onMutate` callback and updating the cache before the mutation resolves",
      "By using a global state for optimistic updates",
    ],
    correctAnswer: 2,
    explanation:
      "Optimistic updates in React Query are handled using `onMutate`, where you can immediately update the cache before the mutation resolves.",
  },
  {
    id: 8,
    title: "How do you handle dependent queries in React Query?",
    code: null,
    options: [
      "By using the `useDependentQuery` hook",
      "By using the `enabled` option in `useQuery` to disable the query until a condition is met",
      "By chaining queries using the `useAsync` hook",
      "By combining queries in a single `useQuery`",
    ],
    correctAnswer: 1,
    explanation:
      "To handle dependent queries in React Query, use the `enabled` option in `useQuery` to control when a query should be executed based on conditions.",
  },
  {
    id: 9,
    title: "What does `onSettled` do in a `useMutation`?",
    code: null,
    options: [
      "It only runs when the mutation fails",
      "It runs after the mutation succeeds or fails, regardless of the outcome",
      "It runs only after the mutation is successful",
      "It runs before the mutation is triggered",
    ],
    correctAnswer: 1,
    explanation:
      "`onSettled` is a callback in `useMutation` that runs after a mutation has either succeeded or failed, allowing you to perform actions like invalidating queries.",
  },
  {
    id: 10,
    title: "How do you fetch data for a query that uses dynamic parameters?",
    code: null,
    options: [
      "By passing dynamic parameters in the query key, which is an array",
      "By using `setQueryData` to update the query",
      "By passing parameters as part of the mutation function",
      "By using the `enabled` option to trigger the fetch",
    ],
    correctAnswer: 0,
    explanation:
      "You can pass dynamic parameters by using an array as the query key in `useQuery`, where the array elements can be dynamic values.",
  },
]
