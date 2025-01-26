export const reactQueryExercises = [
  {
    id: 1,
    title: "Basic Query to Fetch Data",
    objective: "Create a React Query to fetch data from an API.",
    codeStarter: `
  import { useQuery } from "react-query";

  export default function App() {
    // Step 1: Define a query function to fetch data
    // Step 2: Use useQuery to call the function

    return (
      <div>
        <h1>Data</h1>
        {/* Render data or loading state */}
      </div>
    );
  }
  `,
    solution: `
  import { useQuery } from "react-query";

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  export default function App() {
    const { data, isLoading } = useQuery("posts", fetchData);

    return (
      <div>
        <h1>Data</h1>
        {isLoading ? <p>Loading...</p> : <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>}
      </div>
    );
  }
  `,
  },
  {
    id: 2,
    title: "Mutating Data",
    objective: "Use React Query to perform a POST request to create new data.",
    codeStarter: `
  import { useMutation, useQueryClient } from "react-query";

  export default function App() {
    const queryClient = useQueryClient();

    // Step 1: Define a mutation function
    // Step 2: Use useMutation for the function and update the cache on success

    return (
      <div>
        <button>Create Post</button>
      </div>
    );
  }
  `,
    solution: `
  import { useMutation, useQueryClient } from "react-query";

  const createPost = async (newPost) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    });
    return res.json();
  };

  export default function App() {
    const queryClient = useQueryClient();
    const mutation = useMutation(createPost, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      }
    });

    return (
      <div>
        <button
          onClick={() => mutation.mutate({ title: "New Post", body: "Content" })}
        >
          Create Post
        </button>
      </div>
    );
  }
  `,
  },
  {
    id: 3,
    title: "Polling with React Query",
    objective: "Implement polling using React Query.",
    codeStarter: `
  import { useQuery } from "react-query";

  export default function App() {
    // Step 1: Use useQuery and enable polling by setting refetchInterval

    return (
      <div>
        <h1>Data</h1>
        {/* Display data */}
      </div>
    );
  }
  `,
    solution: `
  import { useQuery } from "react-query";

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  export default function App() {
    const { data } = useQuery("posts", fetchData, { refetchInterval: 5000 });

    return (
      <div>
        <h1>Data</h1>
        <ul>
          {data?.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `,
  },
  {
    id: 4,
    title: "Dependent Queries",
    objective: "Fetch data that depends on another query.",
    codeStarter: `
  import { useQuery } from "react-query";

  export default function App() {
    const userId = 1;

    // Step 1: Create a user query
    // Step 2: Use the user query's result in another query

    return (
      <div>
        <h1>User Details</h1>
        {/* Display user details */}
      </div>
    );
  }
  `,
    solution: `
  import { useQuery } from "react-query";

  const fetchUser = async (userId) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    return res.json();
  };

  const fetchPosts = async (userId) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`);
    return res.json();
  };

  export default function App() {
    const { data: user } = useQuery(["user", 1], () => fetchUser(1));
    const { data: posts } = useQuery(["posts", user?.id], () => fetchPosts(user.id), {
      enabled: !!user
    });

    return (
      <div>
        <h1>User Details</h1>
        <p>{user?.name}</p>
        <h2>Posts</h2>
        <ul>
          {posts?.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `,
  },
  {
    id: 5,
    title: "Error Handling in Queries",
    objective: "Handle errors in React Query and display error messages.",
    codeStarter: `
  import { useQuery } from "react-query";

  export default function App() {
    // Step 1: Fetch data and handle errors
    // Step 2: Display error messages

    return (
      <div>
        <h1>Data</h1>
      </div>
    );
  }
  `,
    solution: `
  import { useQuery } from "react-query";

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint");
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  };

  export default function App() {
    const { data, error, isError } = useQuery("posts", fetchData);

    return (
      <div>
        <h1>Data</h1>
        {isError ? <p>Error: {error.message}</p> : <p>{JSON.stringify(data)}</p>}
      </div>
    );
  }
  `,
  },
  {
    id: 6,
    title: "Custom Query Hooks",
    objective: "Create a custom hook for reusable queries.",
    codeStarter: `
  import { useQuery } from "react-query";

  export const usePosts = () => {
    // Step 1: Define and return a query
  };

  export default function App() {
    // Step 2: Use the custom hook
  }
  `,
    solution: `
  import { useQuery } from "react-query";

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  export const usePosts = () => {
    return useQuery("posts", fetchPosts);
  };

  export default function App() {
    const { data } = usePosts();

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {data?.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `,
  },
  {
    id: 7,
    title: "Optimistic Updates",
    objective:
      "Perform an optimistic update while mutating data using React Query.",
    codeStarter: `
  import { useMutation, useQueryClient } from "react-query";

  export default function App() {
    const queryClient = useQueryClient();

    // Step 1: Create a mutation function with optimistic updates
    return <button>Delete Item</button>;
  }
  `,
    solution: `
  import { useMutation, useQueryClient } from "react-query";

  const deleteItem = async (id) => {
    await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
      method: "DELETE"
    });
  };

  export default function App() {
    const queryClient = useQueryClient();

    const mutation = useMutation(deleteItem, {
      onMutate: async (id) => {
        await queryClient.cancelQueries("posts");
        const previousPosts = queryClient.getQueryData("posts");
        queryClient.setQueryData("posts", (old) =>
          old.filter((post) => post.id !== id)
        );
        return { previousPosts };
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData("posts", context.previousPosts);
      },
      onSettled: () => {
        queryClient.invalidateQueries("posts");
      }
    });

    return (
      <div>
        <button onClick={() => mutation.mutate(1)}>Delete Item</button>
      </div>
    );
  }
  `,
  },
  {
    id: 8,
    title: "Infinite Scrolling",
    objective:
      "Implement infinite scrolling using React Query's `useInfiniteQuery`.",
    codeStarter: null,
    solution: `
  import { useInfiniteQuery } from "react-query";

  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${pageParam}&_limit=10\`);
    return res.json();
  };

  export default function App() {
    const {
      data,
      fetchNextPage,
      hasNextPage
    } = useInfiniteQuery("posts", fetchPosts, {
      getNextPageParam: (lastPage, pages) =>
        lastPage.length ? pages.length + 1 : undefined
    });

    return (
      <div>
        {data.pages.map((page, index) => (
          <ul key={index}>
            {page.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ))}
        {hasNextPage && <button onClick={() => fetchNextPage()}>Load More</button>}
      </div>
    );
  }
  `,
  },
  {
    id: 9,
    title: "Paginated Queries",
    objective:
      "Implement pagination using React Query for an API that supports pagination.",
    codeStarter: null,
    solution: `
  import { useQuery } from "react-query";

  const fetchPosts = async (page) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=10\`);
    return res.json();
  };

  export default function App() {
    const [page, setPage] = React.useState(1);
    const { data } = useQuery(["posts", page], () => fetchPosts(page), {
      keepPreviousData: true
    });

    return (
      <div>
        <ul>
          {data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    );
  }
  `,
  },
  {
    id: 10,
    title: "Custom Retry Logic",
    objective: "Customize retry logic in React Query.",
    codeStarter: `
  import { useQuery } from "react-query";

  export default function App() {
    // Step 1: Implement custom retry logic for a query

    return (
      <div>
        <h1>Retry Logic</h1>
      </div>
    );
  }
  `,
    solution: `
  import { useQuery } from "react-query";

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  };

  export default function App() {
    const { data, isError, error } = useQuery("posts", fetchData, {
      retry: (failureCount, error) => {
        if (error.status === 404) return false;
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
    });

    return (
      <div>
        <h1>Retry Logic</h1>
        {isError ? <p>Error: {error.message}</p> : <p>{JSON.stringify(data)}</p>}
      </div>
    );
  }
  `,
  },
]
