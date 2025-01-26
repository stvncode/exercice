export const reactQueryJuniorQuestions = [
  {
    id: 1,
    title: "What is React Query used for?",
    code: null,
    options: [
      "Handling HTTP requests in React",
      "State management library",
      "Global state management",
      "Making API calls and caching the results",
    ],
    correctAnswer: 3,
    explanation:
      "React Query is primarily used for data fetching, caching, synchronization, and more for React applications, especially API data management.",
  },
  {
    id: 2,
    title: "What hook does React Query provide for fetching data?",
    code: null,
    options: ["useState", "useEffect", "useQuery", "useMutation"],
    correctAnswer: 2,
    explanation:
      "The useQuery hook is provided by React Query to fetch data and handle its loading, error, and success states.",
  },
  {
    id: 3,
    title: "Which of the following can `useQuery` return?",
    code: null,
    options: [
      "Loading, Error, and Data",
      "Data and Mutate function",
      "State and Dispatch",
      "Only the fetched data",
    ],
    correctAnswer: 0,
    explanation:
      "`useQuery` returns an object containing loading, error, and data properties, allowing easy access to the query's state.",
  },
  {
    id: 4,
    title: "What does `useQuery` require as its first argument?",
    code: null,
    options: [
      "Query key",
      "Mutation function",
      "Query function",
      "Callback function",
    ],
    correctAnswer: 0,
    explanation:
      "`useQuery` requires a query key, which uniquely identifies the query and helps with caching and refetching.",
  },
  {
    id: 5,
    title:
      "Which of the following is the correct way to define a query function in React Query?",
    code: `
    import { useQuery } from "react-query";

    const fetchData = () => { fetch("/api/data") };
    
    export default function Component() {
      const { data, error } = useQuery("dataQuery", fetchData);
      return <div>{data}</div>;
    }
    `,
    options: [
      "Query function must return a promise",
      "Query function must return an array",
      "Query function must return an object",
      "Query function must be a sync function",
    ],
    correctAnswer: 0,
    explanation:
      "A query function in React Query must return a promise, as it handles asynchronous fetching of data.",
  },
  {
    id: 6,
    title: "How do you handle loading state in a component using React Query?",
    code: null,
    options: [
      "By checking if `data` is undefined",
      "By using `isLoading` or `isFetching` properties from `useQuery`",
      "By setting a state variable manually",
      "By using the `useEffect` hook",
    ],
    correctAnswer: 1,
    explanation:
      "`useQuery` provides the `isLoading` and `isFetching` properties to help you track the loading state directly.",
  },
  {
    id: 7,
    title: "What will happen if the query key changes in React Query?",
    code: null,
    options: [
      "The data will remain cached",
      "The data will be refetched automatically",
      "The data will be deleted",
      "The query will return an error",
    ],
    correctAnswer: 1,
    explanation:
      "When the query key changes, React Query will automatically refetch the data to ensure that the correct data is displayed.",
  },
  {
    id: 8,
    title: "How do you update the cache after a mutation in React Query?",
    code: null,
    options: [
      "By using `useMutation` with `onSuccess` or `onSettled` to invalidate or update the cache",
      "By using `useQuery`'s `refetch` method",
      "By manually updating the query data with `setQueryData`",
      "By passing a callback to the mutation",
    ],
    correctAnswer: 0,
    explanation:
      "React Query provides `onSuccess` and `onSettled` in `useMutation` to allow you to update or invalidate the cache after a mutation.",
  },
  {
    id: 9,
    title:
      "Which of the following is a method provided by React Query to manually invalidate a query?",
    code: null,
    options: [
      "queryClient.invalidateQueries()",
      "useQuery.invalidate()",
      "queryClient.refetchQueries()",
      "useMutation.invalidate()",
    ],
    correctAnswer: 0,
    explanation:
      "React Query's `queryClient.invalidateQueries()` method allows you to manually invalidate a query to trigger a refetch of data.",
  },
  {
    id: 10,
    title:
      "How do you make a query not automatically refetch when a component remounts?",
    code: null,
    options: [
      "Set `refetchOnWindowFocus` to false",
      "Set `staleTime` to a very high value",
      "Set `cacheTime` to 0",
      "Use `skip` in the query function",
    ],
    correctAnswer: 1,
    explanation:
      "By setting `staleTime` to a high value, React Query will not consider the data stale, and it will not automatically refetch.",
  },
]
