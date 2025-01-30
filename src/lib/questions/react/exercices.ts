export const reactExercises = [
  {
    id: 1,
    title: "Create a Basic Button Component",
    objective:
      "Build a reusable button component with basic props and styling.",
    codeStarter: `
import React from 'react'

// Step 1: Create a Button component that accepts children
// Step 2: Add onClick prop
// Step 3: Add basic styling with Tailwind
    `,
    solution: `
import React from 'react'

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
    >
      {children}
    </button>
  )
}

export default Button
    `,
  },
  {
    id: 2,
    title: "Create a Counter Component",
    objective: "Build a counter using useState and event handling.",
    codeStarter: `
import React, { useState } from 'react'

// Step 1: Initialize state for counter
// Step 2: Create increment and decrement functions
// Step 3: Add reset functionality
// Step 4: Use the Button component from Exercise 1
    `,
    solution: `
import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Count: {count}</h2>
      <div className="space-x-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}

export default Counter
    `,
  },
  {
    id: 3,
    title: "Create a Simple Form",
    objective: "Build a form with controlled inputs and basic validation.",
    codeStarter: `
import React, { useState } from 'react'

// Step 1: Create state for form fields
// Step 2: Handle input changes
// Step 3: Add form submission
// Step 4: Implement basic validation
    `,
    solution: `
import React, { useState } from 'react'
import Button from './Button'

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.username) {
      newErrors.username = 'Username is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      setFormData({ username: '', email: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="p-2 border rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default SimpleForm
    `,
  },
  {
    id: 4,
    title: "Create a Todo List",
    objective: "Build a todo list with add, toggle, and delete functionality.",
    codeStarter: `
import React, { useState } from 'react'

// Step 1: Create state for todos
// Step 2: Implement add todo functionality
// Step 3: Add toggle completion feature
// Step 4: Implement delete todo feature
    `,
    solution: `
import React, { useState } from 'react'
import Button from './Button'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="p-4">
      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 border rounded mr-2"
          placeholder="Add todo..."
        />
        <Button type="submit">Add</Button>
      </form>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-2 border rounded">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            </div>
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
    `,
  },
  {
    id: 5,
    title: "Create a Data Fetching Component",
    objective:
      "Build a component that fetches and displays data with loading and error states.",
    codeStarter: `
import React, { useState, useEffect } from 'react'

// Step 1: Set up state for data, loading, and error
// Step 2: Implement data fetching with useEffect
// Step 3: Create loading state UI
// Step 4: Handle and display errors
    `,
    solution: `
import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const posts = await response.json()
        setData(posts.slice(0, 5))
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div className="p-4">Loading...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="space-y-4">
        {data.map(post => (
          <li key={post.id} className="border p-4 rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetcher
    `,
  },
  {
    id: 6,
    title: "Create a Custom Hook",
    objective: "Build a custom hook for handling window resize events.",
    codeStarter: `
import { useState, useEffect } from 'react'

// Step 1: Create useWindowSize hook
// Step 2: Handle window resize events
// Step 3: Clean up event listeners
// Step 4: Create a component that uses the hook
    `,
    solution: `
import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

const ResponsiveComponent = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <div className="mt-4">
        {width < 640 && <p>Mobile view</p>}
        {width >= 640 && width < 1024 && <p>Tablet view</p>}
        {width >= 1024 && <p>Desktop view</p>}
      </div>
    </div>
  )
}

export default ResponsiveComponent
    `,
  },
  {
    id: 7,
    title: "Create a Context Provider",
    objective:
      "Implement a theme context with a provider and consumer components.",
    codeStarter: `
import React, { createContext, useContext, useState } from 'react'

// Step 1: Create theme context
// Step 2: Create theme provider component
// Step 3: Create custom hook to use theme
// Step 4: Create theme toggler component
    `,
    solution: `
import React, { createContext, useContext, useState } from 'react'
import Button from './Button'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={\`p-4 \${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }\`}>
      <p>Current theme: {theme}</p>
      <Button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </Button>
    </div>
  )
}

export default ThemeToggler
    `,
  },
  {
    id: 8,
    title: "Create a Compound Component",
    objective:
      "Build a compound component pattern for a custom select component.",
    codeStarter: `
import React, { createContext, useContext, useState } from 'react'

// Step 1: Create Select context
// Step 2: Create main Select component
// Step 3: Create Option sub-component
// Step 4: Implement select functionality
    `,
    solution: `
import React, { createContext, useContext, useState } from 'react'

const SelectContext = createContext()

const Select = ({ children, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggle = () => setIsOpen(prev => !prev)

  const select = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect?.(option)
  }

  return (
    <SelectContext.Provider value={{ isOpen, selectedOption, select }}>
      <div className="relative inline-block text-left">
        <div
          onClick={toggle}
          className="border rounded p-2 cursor-pointer min-w-[200px]"
        >
          {selectedOption?.label || 'Select an option...'}
        </div>
        
        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border rounded shadow-lg">
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  )
}

const Option = ({ value, children }) => {
  const { select, selectedOption } = useContext(SelectContext)
  const isSelected = selectedOption?.value === value

  return (
    <div
      onClick={() => select({ value, label: children })}
      className={\`p-2 cursor-pointer hover:bg-gray-100 \${
        isSelected ? 'bg-blue-50' : ''
      }\`}
    >
      {children}
    </div>
  )
}

Select.Option = Option

// Example usage:
const SelectExample = () => {
  const handleSelect = (option) => {
    console.log('Selected:', option)
  }

  return (
    <div className="p-4">
      <Select onSelect={handleSelect}>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  )
}

export default SelectExample
    `,
  },
  {
    id: 9,
    title: "Create a Higher-Order Component",
    objective:
      "Implement a HOC that adds loading and error handling capabilities to any component.",
    codeStarter: `
import React, { useState } from 'react'

// Step 1: Create withLoader HOC
// Step 2: Add loading state handling
// Step 3: Add error state handling
// Step 4: Apply HOC to a component
    `,
    solution: `
import React, { useState } from 'react'

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent({ isLoading, error, ...props }) {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        </div>
      )
    }

    if (error) {
      return (
        <div className="p-4 text-red-500 bg-red-50 rounded">
          Error: {error.message}
        </div>
      )
    }

    return <WrappedComponent {...props} />
  }
}

// Example usage:
const UserProfile = ({ user }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

const UserProfileWithLoader = withLoader(UserProfile)

const UserProfileExample = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  React.useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setUser({
        name: 'John Doe',
        email: 'john@example.com'
      })
    }, 2000)
  }, [])

  return (
    <UserProfileWithLoader
      isLoading={isLoading}
      error={error}
      user={user}
    />
  )
}

export default UserProfileExample
    `,
  },
  {
    id: 10,
    title: "Create a Custom Hook with Reducer",
    objective:
      "Build a complex state management solution using useReducer and custom hooks for a shopping cart.",
    codeStarter: `
import React, { useReducer } from 'react'

// Step 1: Create cart reducer with actions
// Step 2: Implement custom hook with reducer
// Step 3: Add cart operations
// Step 4: Create shopping cart component
    `,
    solution: `
import React, { useReducer, createContext, useContext } from 'react'
import Button from './Button'

const initialState = {
  items: [],
  total: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        }
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      }
    }

    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload)
      if (!item) return state

      if (item.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - item.price
        }
      }

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - item.price
      }
    }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

const useCartActions = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return {
    state,
    addItem,
    removeItem,
    clearCart
  }
}

export const CartProvider = ({ children }) => {
  const cart = useCartActions()

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

const ShoppingCart = () => {
  const { state, addItem, removeItem, clearCart } = useCart()

  // Sample products
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <div className="space-y-2">
            {products.map(product => (
              <div key={product.id} className="flex justify-between items-center p-2 border rounded">
                <div>
                  <h3>{product.name}</h3>
                  <p>\${product.price}</p>
                </div>
                <Button onClick={() => addItem(product)}>Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {state.items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {state.items.map(item => (
                <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: \${item.price * item.quantity}</p>
                  </div>
                  <div className="space-x-2">
                    <Button onClick={() => addItem(item)}>+</Button>
                    <Button onClick={() => removeItem(item.id)}>-</Button>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <p className="font-bold">Total: \${state.total}</p>
                <Button onClick={clearCart}>Clear Cart</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
    `,
  },
]
