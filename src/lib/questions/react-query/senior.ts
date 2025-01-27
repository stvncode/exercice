export const reactQuerySeniorQuestions = [
  {
    id: 1,
    title: "How would you implement background refetching with React Query?",
    code: null,
    options: [
      "By using the `onSuccess` callback",
      "By using a manual `setInterval` inside `useQuery`",
      "By using the `enabled` option with dynamic conditions",
      "By using the `refetchOnWindowFocus` and `refetchInterval` options",
    ],
    correctAnswer: 3,
    explanation:
      "`refetchOnWindowFocus` and `refetchInterval` are the recommended ways to implement background refetching to keep data fresh.",
  },
  {
    id: 2,
    title: "What is the purpose of `QueryClient` in React Query?",
    code: null,
    options: [
      "It manages the global state for queries",
      "It handles the retry behavior for failed queries",
      "It manages the error boundaries of queries",
      "It manages the cache and background data synchronization",
    ],
    correctAnswer: 3,
    explanation:
      "`QueryClient` is responsible for managing the cache, background synchronization, and other internal aspects like retries for queries and mutations.",
  },
  {
    id: 3,
    title:
      "How would you globally configure retry behavior for all queries in React Query?",
    code: null,
    options: [
      "By using the `useQuery` hook's `retry` option for each query",
      "By using the `QueryClient` configuration to set `retry` globally",
      "By setting `retry` in the `ReactQueryConfigProvider`",
      "By using `useMutation` with a retry option",
    ],
    correctAnswer: 1,
    explanation:
      "You can set global retry behavior by passing the `retry` option when initializing the `QueryClient`. This ensures retry behavior is consistent for all queries.",
  },
  {
    id: 4,
    title: "What does the `onSuccess` callback of a mutation allow you to do?",
    code: null,
    options: [
      "Handle side effects before the mutation executes",
      "Execute code after the mutation has successfully completed, such as invalidating queries",
      "Automatically refetch data after the mutation",
      "Update the mutation state when it fails",
    ],
    correctAnswer: 1,
    explanation:
      "`onSuccess` allows you to perform actions like invalidating or updating the cache after a mutation has successfully completed.",
  },
  {
    id: 5,
    title:
      "How can you ensure that multiple mutations are executed sequentially in React Query?",
    code: null,
    options: [
      "By chaining them in a single `onSuccess` callback",
      "By using `mutateAsync` with `await` to handle them sequentially",
      "By using `useMutation` with `onMutate` for each mutation",
      "By using `useMutation` in a `useEffect` hook",
    ],
    correctAnswer: 1,
    explanation:
      "You can use `mutateAsync` with `await` to execute mutations sequentially by awaiting the previous mutation before proceeding with the next one.",
  },
  {
    id: 6,
    title:
      "How would you implement pagination in a list with React Query that supports infinite scrolling?",
    code: null,
    options: [
      "By using `useInfiniteQuery` to manage paginated data and fetch more pages",
      "By using `useQuery` with `page` and `limit` parameters",
      "By using a global cache and invalidating pages as needed",
      "By manually updating the cache after each scroll event",
    ],
    correctAnswer: 0,
    explanation:
      "`useInfiniteQuery` is the React Query hook designed for handling infinite scrolling and pagination, supporting fetching additional pages as needed.",
  },
  {
    id: 7,
    title: "How do you handle concurrent data fetching in React Query?",
    code: null,
    options: [
      "By using multiple `useQuery` hooks and React's Suspense",
      "By using `Promise.all` inside `useEffect`",
      "By combining queries in a single `useQuery` hook",
      "By using `useMutation` to fetch data concurrently",
    ],
    correctAnswer: 0,
    explanation:
      "You can handle concurrent data fetching by using multiple `useQuery` hooks together and leveraging React Suspense for smooth data handling.",
  },
  {
    id: 8,
    title:
      "How do you implement a custom cache key for dynamic queries in React Query?",
    code: null,
    options: [
      "By using the `setQueryData` method to manually configure keys",
      "By passing a dynamic key array as the query key in `useQuery`",
      "By using `useQuery`'s `queryKey` option",
      "By manually managing query keys with `queryClient`",
    ],
    correctAnswer: 2,
    explanation:
      "You can pass a dynamic array as the query key to `useQuery` to ensure that React Query handles the data for each unique set of parameters.",
  },
  {
    id: 9,
    title:
      "How do you perform optimistic updates for a mutation that modifies a list of items in React Query?",
    code: null,
    options: [
      "By using `onMutate` to modify the cache before the mutation resolves",
      "By using `onSuccess` to immediately update the UI",
      "By using `onSettled` to refetch data after the mutation",
      "By using `mutateAsync` with a delay",
    ],
    correctAnswer: 0,
    explanation:
      "Optimistic updates in React Query can be handled using `onMutate`, where you can immediately modify the cache to reflect the expected result of a mutation before the server response.",
  },
  {
    id: 10,
    title:
      "What does the `getNextPageParam` function do in `useInfiniteQuery`?",
    code: null,
    options: [
      "It defines when to stop fetching new pages",
      "It fetches the initial data for pagination",
      "It defines how to get the next page's parameters, typically from the response",
      "It controls when to invalidate the current query",
    ],
    correctAnswer: 2,
    explanation:
      "`getNextPageParam` is used to define how to retrieve the next page's parameters from the query's response, enabling infinite scrolling.",
  },
]
