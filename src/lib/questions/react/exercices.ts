export const reactExercises = [
  {
    id: 1,
    title: "Create a Counter Component",
    objective:
      "Implement a functional React component with state to create a simple counter.",
    codeStarter: `
  import React from "react"
  
  export default function Counter() {
    // Step 1: Initialize state for the counter
  
    // Step 2: Implement increment and decrement functions
  
    return (
      <div>
        <h1>Counter: {/* Display the counter value */}</h1>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function Counter() {
    const [count, setCount] = useState(0)
  
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  }
  `,
  },
  {
    id: 2,
    title: "Fix the Greeting Component",
    objective: "Debug a React component that uses props incorrectly.",
    codeStarter: `
  import React from "react"
  
  export default function Greeting(props) {
    return <h1>Welcome, {props.name}</h1>
  }
  
  // Usage
  <Greeting title="John Doe" />
  `,
    solution: `
  import React from "react"
  
  export default function Greeting(props) {
    return <h1>Welcome, {props.name}</h1>
  
  // Usage
  <Greeting name="John Doe" />
  `,
  },
  {
    id: 3,
    title: "Create a Simple Button Component",
    objective:
      "Create a functional component for a simple button that accepts a label as a prop.",
    codeStarter: `
  import React from "react"
  
  export default function Button(props) {
    return (
      <button>
        {/* Display the label passed via props */}
      </button>
    )
  }
  `,
    solution: `
  import React from "react"
  
  export default function Button(props) {
    return (
      <button>
        {props.label}
      </button>
    )
  }
  `,
  },
  {
    id: 4,
    title: "Toggle Theme Component",
    objective:
      "Implement a component that toggles between light and dark themes using a button.",
    codeStarter: `
  import React, { useState } from "react"
  
  export default function ThemeToggle() {
    // Step 1: Initialize state for theme
  
    return (
      <div>
        <p>Current theme: {/* Display theme here */}</p>
        <button>{/* Toggle theme */}</button>
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
  
    const toggleTheme = () => setIsDark(!isDark)
  
    return (
      <div>
        <p>Current theme: {isDark ? "Dark" : "Light"}</p>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    )
  }
  `,
  },
  {
    id: 5,
    title: "Create a Simple List Component",
    objective:
      "Create a component that takes an array of items and displays them as an unordered list.",
    codeStarter: `
  import React from "react"
  
  export default function ItemList(props) {
    return (
      <ul>
        {/* Render list items here */}
      </ul>
    )
  }
  `,
    solution: `
  import React from "react"
  
  export default function ItemList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
  `,
  },
  {
    id: 6,
    title: "Display Current Time Component",
    objective:
      "Create a component that displays the current time, updating every second.",
    codeStarter: `
  import React, { useState, useEffect } from "react"
  
  export default function Clock() {
    // Step 1: Initialize state for current time
  
    useEffect(() => {
      // Step 2: Set up an interval to update time every second
    }, [])
  
    return (
      <div>
        <p>Current time: {/* Display time here */}</p>
      </div>
    )
  }
  `,
    solution: `
  import React, { useState, useEffect } from "react"
  
  export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, 1000)
  
      return () => clearInterval(intervalId)
    }, [])
  
    return (
      <div>
        <p>Current time: {time}</p>
      </div>
    )
  }
  `,
  },
  {
    id: 7,
    title: "Conditional Rendering with Props",
    objective:
      "Create a component that conditionally renders a message based on a `show` prop.",
    codeStarter: `
  import React from "react"
  
  export default function Message(props) {
    return (
      <div>
        {/* Display a message based on the value of props.show */}
      </div>
    )
  }
  `,
    solution: `
  import React from "react"
  
  export default function Message(props) {
    return (
      <div>
        {props.show ? "Hello, World!" : "Goodbye, World!"}
      </div>
    )
  }
  `,
  },
  {
    id: 8,
    title: "Form Validation",
    objective:
      "Create a form component with validation that requires a user to enter a valid email address before submitting.",
    codeStarter: `
  import React, { useState } from "react"
  
  export default function EmailForm() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
  
    const handleSubmit = () => {
      // Step 1: Validate email
    }
  
    return (
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        {error && <p>{error}</p>}
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function EmailForm() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
  
    const handleSubmit = () => {
      if (!email.includes("@")) {
        setError("Please enter a valid email address.")
      } else {
        setError("")
        // Handle form submission
      }
    }
  
    return (
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        {error && <p>{error}</p>}
      </div>
    )
  }
  `,
  },
  {
    id: 9,
    title: "Fetch Data from API",
    objective:
      "Create a component that fetches data from an API and displays it.",
    codeStarter: `
  import React, { useEffect, useState } from "react"
  
  export default function FetchData() {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      // Step 1: Fetch data from an API
    }, [])
  
    return (
      <div>
        {/* Display the fetched data */}
      </div>
    )
  }
  `,
    solution: `
  import React, { useEffect, useState } from "react"
  
  export default function FetchData() {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])
  
    return (
      <div>
        {data ? (
          data.map((item) => <p key={item.id}>{item.title}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
  `,
  },
  {
    id: 10,
    title: "Create a Dynamic List with Delete Functionality",
    objective:
      "Create a dynamic list that allows the user to add and remove items.",
    codeStarter: `
  import React, { useState } from "react"
  
  export default function DynamicList() {
    const [items, setItems] = useState([])
  
    const handleAddItem = () => {
      // Step 1: Add a new item to the list
    }
  
    const handleDeleteItem = (id) => {
      // Step 2: Remove an item from the list
    }
  
    return (
      <div>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {/* Render items here with delete buttons */}
        </ul>
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function DynamicList() {
    const [items, setItems] = useState([])
  
    const handleAddItem = () => {
      setItems([...items, { id: Date.now(), name: \`Item \${items.length + 1}\` }])
    }
  
    const handleDeleteItem = (id) => {
      setItems(items.filter((item) => item.id !== id))
    }
  
    return (
      <div>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  `,
  },
  {
    id: 11,
    title: "Pagination Component",
    objective:
      "Create a pagination component that allows the user to navigate through multiple pages of data.",
    codeStarter: `
  import React, { useState } from "react"
  
  export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)
  
    const handlePrev = () => {
      // Step 1: Go to the previous page
    }
  
    const handleNext = () => {
      // Step 2: Go to the next page
    }
  
    return (
      <div>
        <button onClick={handlePrev}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)
  
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
  
    const handleNext = () => {
      setCurrentPage(currentPage + 1)
    }
  
    return (
      <div>
        <button onClick={handlePrev}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    )
  }
  `,
  },
  {
    id: 12,
    title: "Form with Multiple Inputs",
    objective: "Create a form that collects a user’s name, email, and message.",
    codeStarter: `
  import React, { useState } from "react"
  
  export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    })
  
    const handleChange = (e) => {
      // Step 1: Update form data when the user types
    }
  
    const handleSubmit = () => {
      // Step 2: Handle form submission
    }
  
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value
      })
    }
  
    const handleSubmit = () => {
      console.log(formData)
    }
  
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }
  `,
  },
  {
    id: 13,
    title: "Create a Modal Component",
    objective:
      "Create a modal component that can be opened and closed by the user.",
    codeStarter: `
  import React, { useState } from "react"
  
  export default function Modal() {
    // Step 1: Initialize state for modal visibility
  
    return (
      <div>
        <button>{/* Open modal */}</button>
        {/** Modal content */}
      </div>
    )
  }
  `,
    solution: `
  import React, { useState } from "react"
  
  export default function Modal() {
    const [isOpen, setIsOpen] = useState(false)
  
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <div className="modal">
            <p>This is a modal!</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        )}
      </div>
    )
  }
  `,
  },
]
