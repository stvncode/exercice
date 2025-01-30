export const zustandExercises = [
  {
    id: 1,
    title: "Create a basic counter store",
    objective:
      "Implement a Zustand store to manage a counter with increment and decrement actions.",
    codeStarter: `
import create from 'zustand'

// Step 1: Initialize the Zustand store with a 'count' state
// Step 2: Add 'increment' and 'decrement' actions
// Step 3: Use the store in a React component
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default function Counter() {
  const { count, increment, decrement } = useStore()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
    `,
  },
  {
    id: 2,
    title: "Persist store state to localStorage",
    objective:
      "Modify the Zustand store to persist the counter state to `localStorage` and load it when the component mounts.",
    codeStarter: `
import create from 'zustand'

// Step 1: Load initial state from localStorage
// Step 2: Update localStorage when state changes
// Step 3: Create actions for incrementing and decrementing the counter
    `,
    solution: `
import create from 'zustand'

const useStore = create((set, get) => ({
  count: JSON.parse(localStorage.getItem('count') || '0'),
  increment: () => {
    const newCount = get().count + 1
    localStorage.setItem('count', JSON.stringify(newCount))
    set({ count: newCount })
  },
  decrement: () => {
    const newCount = get().count - 1
    localStorage.setItem('count', JSON.stringify(newCount))
    set({ count: newCount })
  },
}))

export default function Counter() {
  const { count, increment, decrement } = useStore()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
    `,
  },
  {
    id: 3,
    title: "Use Zustand with an async API call",
    objective:
      "Create a Zustand store that fetches data from an API and stores the result in the store. Display the data in a component.",
    codeStarter: `
import create from 'zustand'

// Step 1: Initialize store with 'data' and 'isLoading' state
// Step 2: Create an async 'fetchData' action
// Step 3: Use the store in a React component to fetch and display data
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  data: [],
  isLoading: false,
  fetchData: async () => {
    set({ isLoading: true })
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    set({ data, isLoading: false })
  },
}))

export default function DataFetcher() {
  const { data, isLoading, fetchData } = useStore()

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
    `,
  },
  {
    id: 4,
    title: "Create a store with multiple actions",
    objective:
      "Create a Zustand store with multiple actions that manipulate different parts of the state (e.g., user data and app settings).",
    codeStarter: `
import create from 'zustand'

// Step 1: Add 'user' and 'settings' states
// Step 2: Create 'setUser' and 'toggleTheme' actions
// Step 3: Use the store in a component to display and modify state
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  user: { name: '', age: 0 },
  settings: { theme: 'light' },
  setUser: (name, age) => set({ user: { name, age } }),
  toggleTheme: () => set((state) => ({
    settings: { theme: state.settings.theme === 'light' ? 'dark' : 'light' }
  })),
}))

export default function Profile() {
  const { user, settings, setUser, toggleTheme } = useStore()

  return (
    <div>
      <h1>{user.name} - {user.age} years old</h1>
      <button onClick={() => setUser('John Doe', 30)}>Set User</button>
      <p>Theme: {settings.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
    `,
  },
  {
    id: 5,
    title: "Use Zustand with a subscription",
    objective:
      "Create a Zustand store and use a component to subscribe to state changes and rerender.",
    codeStarter: `
import create from 'zustand'

// Step 1: Set up a store with 'count' state and an 'increment' action
// Step 2: Use Zustand's subscription mechanism to update UI on state changes
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

export default function Counter() {
  const count = useStore((state) => state.count)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => useStore.getState().increment()}>Increment</button>
    </div>
  )
}
    `,
  },
  {
    id: 6,
    title: "Implement Zustand with undo functionality",
    objective:
      "Implement undo functionality in a Zustand store that stores a history of state changes and allows reverting to previous states.",
    codeStarter: `
import create from 'zustand'

// Step 1: Add 'history' and 'currentState' to the store
// Step 2: Create 'addHistory' and 'undo' actions
// Step 3: Use the store in a component to demonstrate undo functionality
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  history: [],
  currentState: 0,
  addHistory: (newState) => set((state) => ({
    history: [...state.history, state.currentState],
    currentState: newState,
  })),
  undo: () => set((state) => {
    const lastHistory = state.history.pop() || 0;
    return { history: state.history, currentState: lastHistory };
  }),
}))

export default function Counter() {
  const { currentState, addHistory, undo } = useStore()

  return (
    <div>
      <h1>Current State: {currentState}</h1>
      <button onClick={() => addHistory(currentState + 1)}>Increase</button>
      <button onClick={undo}>Undo</button>
    </div>
  )
}
    `,
  },
  {
    id: 7,
    title: "Use Zustand with localStorage for multiple fields",
    objective:
      "Implement a Zustand store with multiple fields and persist each field to `localStorage` separately.",
    codeStarter: `
import create from 'zustand'

// Step 1: Set up a store with 'name' and 'age' fields
// Step 2: Persist each field to localStorage when updated
// Step 3: Load initial values from localStorage
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  name: localStorage.getItem('name') || '',
  age: Number(localStorage.getItem('age')) || 0,
  setName: (name) => {
    localStorage.setItem('name', name)
    set({ name })
  },
  setAge: (age) => {
    localStorage.setItem('age', age)
    set({ age })
  },
}))

export default function UserForm() {
  const { name, age, setName, setAge } = useStore()

  return (
    <div>
      <h1>Name: {name}, Age: {age}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
    </div>
  )
}
    `,
  },
  {
    id: 8,
    title: "Implement Zustand with a modal state",
    objective:
      "Create a Zustand store to control the visibility of a modal and manage its content.",
    codeStarter: `
import create from 'zustand'

// Step 1: Add 'isModalOpen' and 'modalContent' state
// Step 2: Create 'openModal' and 'closeModal' actions
// Step 3: Use the store in a component to control a modal
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  isModalOpen: false,
  modalContent: '',
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: '' }),
}))

export default function ModalComponent() {
  const { isModalOpen, modalContent, openModal, closeModal } = useStore()

  return (
    <div>
      <button onClick={() => openModal('This is a modal!')}>Open Modal</button>
      {isModalOpen && (
        <div>
          <h2>{modalContent}</h2>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  )
}
    `,
  },
  {
    id: 9,
    title: "Create a Zustand store with a pagination feature",
    objective:
      "Create a Zustand store that manages pagination for a list of items and supports navigating to the next and previous pages.",
    codeStarter: `
import create from 'zustand'

// Step 1: Add 'currentPage', 'pageSize', and 'totalItems' state
// Step 2: Implement 'goToNextPage' and 'goToPrevPage' actions
// Step 3: Use the store to manage pagination in a component
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  currentPage: 1,
  pageSize: 10,
  totalItems: 100,
  goToNextPage: () => set((state) => ({
    currentPage: state.currentPage < Math.ceil(state.totalItems / state.pageSize)
      ? state.currentPage + 1
      : state.currentPage,
  })),
  goToPrevPage: () => set((state) => ({
    currentPage: state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
  })),
}))

export default function Pagination() {
  const { currentPage, goToNextPage, goToPrevPage } = useStore()

  return (
    <div>
      <h1>Page {currentPage}</h1>
      <button onClick={goToPrevPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  )
}
    `,
  },
  {
    id: 10,
    title: "Create a Zustand store with user authentication state",
    objective:
      "Create a Zustand store that manages user authentication, including login, logout, and checking if the user is authenticated.",
    codeStarter: `
import create from 'zustand'

// Step 1: Add 'isAuthenticated' and 'user' state
// Step 2: Implement 'login' and 'logout' actions
// Step 3: Use the store to manage authentication in a component
    `,
    solution: `
import create from 'zustand'

const useStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}))

export default function AuthComponent() {
  const { isAuthenticated, user, login, logout } = useStore()

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'John Doe' })}>Login</button>
      )}
    </div>
  )
}
    `,
  },
]
