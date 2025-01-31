export const reactQueryExercises = [
  {
    id: 1,
    title: "Basic data fetching",
    objective: "Use the useQuery hook to fetch and display a list of items.",
    codeStarter: `
import { useQuery } from '@tanstack/react-query'

// Step 1: Set up basic query hook
// Step 2: Handle loading and error states
// Step 3: Display fetched data
    `,
    solution: `
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function PostsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {data.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 2,
    title: "Data fetching with parameters",
    objective:
      "Create a query that fetches data based on user input parameters.",
    codeStarter: `
import { useQuery } from '@tanstack/react-query'

// Step 1: Set up query with parameters
// Step 2: Create input field for parameter
// Step 3: Handle parameter changes
    `,
    solution: `
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const fetchUserById = async (userId) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function UserProfile() {
  const [userId, setUserId] = useState(1)

  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUserById(userId),
    enabled: !!userId,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        min="1"
      />
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}
    </div>
  )
}
    `,
  },
  {
    id: 3,
    title: "Basic mutation",
    objective: "Implement a basic mutation to create a new resource.",
    codeStarter: `
import { useMutation } from '@tanstack/react-query'

// Step 1: Set up mutation hook
// Step 2: Create form for new data
// Step 3: Handle mutation states and responses
    `,
    solution: `
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const createPost = async (newPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      setTitle('')
      setBody('')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ title, body, userId: 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
      </div>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create Post'}
      </button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Post created successfully!</div>}
    </form>
  )
}
    `,
  },
  {
    id: 4,
    title: "Infinite Query",
    objective:
      "Implement infinite scrolling using React Query's useInfiniteQuery.",
    codeStarter: `
import { useInfiniteQuery } from '@tanstack/react-query'

// Step 1: Set up infinite query
// Step 2: Implement fetch function with pagination
// Step 3: Add infinite scroll functionality
    `,
    solution: `
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(
    \`https://jsonplaceholder.typicode.com/posts?_page=\${pageParam}&_limit=10\`
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function InfinitePosts() {
  const { ref, inView } = useInView()

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 10 ? pages.length + 1 : undefined
    },
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error: {error.message}</div>

  return (
    <div>
      {data.pages.map((group, i) => (
        <div key={i}>
          {group.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ))}
      <div ref={ref}>
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load more'
          : 'Nothing more to load'}
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 5,
    title: "Optimistic Updates",
    objective: "Implement optimistic updates for a todo list application.",
    codeStarter: `
import { useMutation, useQuery } from '@tanstack/react-query'

// Step 1: Set up query for todos
// Step 2: Implement mutation with optimistic updates
// Step 3: Handle success and error cases
    `,
    solution: `
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

const toggleTodo = async ({ id, completed }) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  })
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

export default function TodoList() {
  const queryClient = useQueryClient()

  const { data: todos, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  const mutation = useMutation({
    mutationFn: toggleTodo,
    onMutate: async ({ id, completed }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] })

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(['todos'])

      // Optimistically update to the new value
      queryClient.setQueryData(['todos'], old => {
        return old.map(todo =>
          todo.id === id ? { ...todo, completed } : todo
        )
      })

      // Return context with the snapshotted value
      return { previousTodos }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => 
              mutation.mutate({
                id: todo.id,
                completed: !todo.completed,
              })
            }
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  )
}
    `,
  },
  {
    id: 6,
    title: "Parallel Queries",
    objective:
      "Implement multiple parallel queries and handle their combined state.",
    codeStarter: `
import { useQueries } from '@tanstack/react-query'

// Step 1: Set up multiple parallel queries
// Step 2: Handle loading and error states
// Step 3: Combine and display data
    `,
    solution: `
import { useQueries, useQuery } from '@tanstack/react-query'

const fetchUser = async (userId) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

const fetchUserPosts = async (userId) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

export default function UserDashboard() {
  const userIds = [1, 2, 3] // Example user IDs

  const userQueries = useQueries({
    queries: userIds.map(id => ({
      queryKey: ['user', id],
      queryFn: () => fetchUser(id),
    })),
  })

  const postQueries = useQueries({
    queries: userIds.map(id => ({
      queryKey: ['posts', id],
      queryFn: () => fetchUserPosts(id),
    })),
  })

  const isLoading = [...userQueries, ...postQueries].some(query => query.isLoading)
  const isError = [...userQueries, ...postQueries].some(query => query.isError)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading data</div>

  return (
    <div>
      {userIds.map((id, index) => (
        <div key={id}>
          <h2>{userQueries[index].data.name}'s Posts</h2>
          <div>
            {postQueries[index].data.map(post => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
    `,
  },
  {
    id: 7,
    title: "Dependent Queries",
    objective:
      "Implement dependent queries where one query depends on the result of another.",
    codeStarter: `
import { useQuery } from '@tanstack/react-query'

// Step 1: Set up first query
// Step 2: Create dependent query
// Step 3: Handle loading states and data display
    `,
    solution: `
import { useQuery } from '@tanstack/react-query'

const fetchUser = async (userId) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

const fetchUserAlbums = async (userId) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/albums?userId=\${userId}\`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

export default function UserAlbums() {
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['user', 1],
    queryFn: () => fetchUser(1),
  })

  const { data: albums, isLoading: albumsLoading } = useQuery({
    queryKey: ['albums', user?.id],
    queryFn: () => fetchUserAlbums(user.id),
    enabled: !!user?.id,
  })

  if (userLoading) return <div>Loading user...</div>
  if (albumsLoading) return <div>Loading albums...</div>

  return (
    <div>
      <h1>{user.name}'s Albums</h1>
      <div>
        {albums?.map(album => (
          <div key={album.id}>
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 8,
    title: "Custom Query Hook with Background Updates",
    objective:
      "Create a custom query hook that implements background updates and polling.",
    codeStarter: `
import { useQuery } from '@tanstack/react-query'

// Step 1: Create custom query hook
// Step 2: Implement background updates
// Step 3: Add polling functionality
    `,
    solution: `
import { useQuery, useQueryClient } from '@tanstack/react-query'

const fetchStockPrice = async (symbol) => {
  const response = await fetch(\`https://api.example.com/stocks/\${symbol}\`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

function useStockPrice(symbol) {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['stock', symbol],
    queryFn: () => fetchStockPrice(symbol),
    refetchInterval: 5000, // Poll every 5 seconds
    refetchOnWindowFocus: true,
    staleTime: 1000 * 30, // Data is fresh for 30 seconds
    onSuccess: (data) => {
      // Update any related queries
      queryClient.setQueryData(['stockSummary', symbol], old => ({
        ...old,
        lastPrice: data.price
      }))
    }
  })
}

export default function StockTracker() {
  const symbols = ['AAPL', 'GOOGL', 'MSFT']
  
  return (
    <div>
      {symbols.map(symbol => (
        <StockPrice key={symbol} symbol={symbol} />
      ))}
    </div>
  )
}

function StockPrice({ symbol }) {
  const { data, isLoading, error } = useStockPrice(symbol)

  if (isLoading) return <div>Loading {symbol}...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>{symbol}</h2>
      <p>Current Price: \${data.price}</p>
      <p>Last Updated: {new Date(data.timestamp).toLocaleTimeString()}</p>
    </div>
  )
}
    `,
  },
  {
    id: 9,
    title: "Complex Mutation with File Upload and Progress",
    objective:
      "Implement a mutation that handles file uploads with progress tracking and cancellation.",
    codeStarter: `
import { useMutation } from '@tanstack/react-query'

// Step 1: Set up mutation with upload progress
// Step 2: Implement cancellation
// Step 3: Handle multiple file uploads
    `,
    solution: `
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useRef } from 'react'

const uploadFiles = async ({ files, onProgress }) => {
  const formData = new FormData()
  Array.from(files).forEach(file => formData.append('files', file))

  const controller = new AbortController()
  const response = await fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData,
    signal: controller.signal,
    onUploadProgress: progressEvent => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      )
      onProgress(percentCompleted)
    }
  })

  if (!response.ok) throw new Error('Upload failed')
  return response.json()
}

export default function FileUploader() {
  const [progress, setProgress] = useState(0)
  const [selectedFiles, setSelectedFiles] = useState([])
  const abortControllerRef = useRef(null)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: ({ files }) => 
      uploadFiles({ 
        files,
        onProgress: setProgress,
        signal: abortControllerRef.current?.signal
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] })
      setSelectedFiles([])
      setProgress(0)
    },
    onError: (error) => {
      if (error.name === 'AbortError') {
        console.log('Upload cancelled')
      }
    }
  })

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files))
  }

  const handleUpload = () => {
    abortControllerRef.current = new AbortController()
    mutation.mutate({ files: selectedFiles })
  }

  const handleCancel = () => {
    abortControllerRef.current?.abort()
    setProgress(0)
  }

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        disabled={mutation.isPending}
      />
      
      {selectedFiles.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>
            ))}
          </ul>
        </div>
      )}

      {progress > 0 && (
        <div>
          <progress value={progress} max="100" />
          <p>{progress}% uploaded</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={mutation.isPending || selectedFiles.length === 0}
      >
        Upload
      </button>

      {mutation.isPending && (
        <button onClick={handleCancel}>Cancel Upload</button>
      )}

      {mutation.isError && (
        <div>Upload failed: {mutation.error.message}</div>
      )}

      {mutation.isSuccess && (
        <div>Upload completed successfully!</div>
      )}
    </div>
  )
}
    `,
  },
  {
    id: 10,
    title: "Advanced Cache Management with Offline Support",
    objective:
      "Implement a complex caching strategy with offline support and background synchronization.",
    codeStarter: `
import { useQuery, useMutation } from '@tanstack/react-query'

// Step 1: Set up persistent cache
// Step 2: Implement offline support
// Step 3: Add background sync
    `,
    solution: `
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { persist, createIndexedDBPersistor } from '@tanstack/query-persist-client-core'
import { useState, useEffect } from 'react'

// Persistence configuration
const persistor = createIndexedDBPersistor({
  name: 'my-app-cache',
  version: 1
})

// Network status hook
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

// Custom hook for todos with offline support
function useTodos() {
  const isOnline = useOnlineStatus()
  const queryClient = useQueryClient()

  // Queue for storing offline mutations
  const [offlineQueue, setOfflineQueue] = useState([])

  // Main query
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch('https://api.example.com/todos')
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    networkMode: 'offlineFirst'
  })

  // Mutation
  const mutation = useMutation({
    mutationFn: async (todo) => {
      const response = await fetch('https://api.example.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      })
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
    onMutate: async (newTodo) => {
      if (!isOnline) {
        // Store mutation in offline queue
        setOfflineQueue(queue => [...queue, newTodo])
        
        // Optimistically update cache
        const previousTodos = queryClient.getQueryData(['todos'])
        queryClient.setQueryData(['todos'], old => [...old, { ...newTodo, id: Date.now() }])
        
        return { previousTodos }
      }
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  // Background sync when coming back online
  useEffect(() => {
    if (isOnline && offlineQueue.length > 0) {
      Promise.all(
        offlineQueue.map(todo => mutation.mutateAsync(todo))
      ).then(() => {
        setOfflineQueue([])
      })
    }
  }, [isOnline, offlineQueue])

  return {
    todos: query.data,
    isLoading: query.isLoading,
    error: query.error,
    addTodo: mutation.mutate,
    isOnline,
    pendingOfflineChanges: offlineQueue.length
  }
}

export default function TodoApp() {
  const {
    todos,
    isLoading,
    error,
    addTodo,
    isOnline,
    pendingOfflineChanges
  } = useTodos()

  const [newTodoText, setNewTodoText] = useState('')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <div>
        Connection Status: {isOnline ? 'Online' : 'Offline'}
        {pendingOfflineChanges > 0 && (
          <span> ({pendingOfflineChanges} changes pending)</span>
        )}
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        addTodo({ text: newTodoText, completed: false })
        setNewTodoText('')
      }}>
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos?.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                addTodo({ ...todo, completed: !todo.completed })
              }}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
    `,
  },
]
