export const tailwindCSSExercises = [
  {
    id: 1,
    title: "Basic Card Component",
    objective:
      "Create a simple card component with an image, title, and description using Tailwind CSS.",
    codeStarter: `
// Step 1: Create basic card structure
// Step 2: Add image styling
// Step 3: Style text content
    `,
    solution: `
export default function Card() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://picsum.photos/400/300"
        alt="Card image"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">
          Card Title
        </h2>
        <p className="text-gray-600 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 2,
    title: "Responsive Navigation Bar",
    objective:
      "Build a responsive navigation bar with a mobile menu using Tailwind CSS.",
    codeStarter: `
// Step 1: Create desktop navigation
// Step 2: Add mobile menu button
// Step 3: Implement responsive behavior
    `,
    solution: `
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
    `,
  },
  {
    id: 3,
    title: "Form Elements and Validation",
    objective:
      "Style form elements and add validation states using Tailwind CSS.",
    codeStarter: `
// Step 1: Style form inputs
// Step 2: Add validation states
// Step 3: Style error messages
    `,
    solution: `
export default function ContactForm() {
  return (
    <form className="max-w-lg mx-auto p-6 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="john@example.com"
        />
        <p className="mt-1 text-sm text-red-600">Please enter a valid email address</p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Your message here..."
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
    `,
  },
  {
    id: 4,
    title: "Custom Grid Layout",
    objective:
      "Create a responsive grid layout with different column configurations using Tailwind CSS Grid.",
    codeStarter: `
// Step 1: Create basic grid structure
// Step 2: Add responsive breakpoints
// Step 3: Style grid items
    `,
    solution: `
export default function GridLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 h-32 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-white font-bold">1</span>
        </div>
        <div className="bg-blue-500 h-32 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-white font-bold">2</span>
        </div>
        <div className="bg-blue-500 h-32 rounded-lg shadow-md flex items-center justify-center md:col-span-2 lg:col-span-1">
          <span className="text-white font-bold">3</span>
        </div>
        <div className="bg-blue-500 h-32 rounded-lg shadow-md flex items-center justify-center lg:col-span-2">
          <span className="text-white font-bold">4</span>
        </div>
        <div className="bg-blue-500 h-32 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-white font-bold">5</span>
        </div>
        <div className="bg-blue-500 h-32 rounded-lg shadow-md flex items-center justify-center md:col-span-2 lg:col-span-1">
          <span className="text-white font-bold">6</span>
        </div>
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 5,
    title: "Animated Components",
    objective:
      "Create components with hover animations and transitions using Tailwind CSS.",
    codeStarter: `
// Step 1: Add basic hover effects
// Step 2: Implement transitions
// Step 3: Create complex animations
    `,
    solution: `
export default function AnimatedComponents() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Hover Card */}
      <div className="transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
          <h3 className="text-lg font-semibold">Hover Me</h3>
          <p className="text-gray-600">This card scales up on hover</p>
        </div>
      </div>

      {/* Animated Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:-translate-y-1">
        Animated Button
      </button>

      {/* Loading Spinner */}
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>

      {/* Fade-in Text */}
      <div className="group relative overflow-hidden">
        <img
          src="https://picsum.photos/400/300"
          className="w-full h-64 object-cover rounded-lg"
          alt="Image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">Fade In Text</p>
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="relative">
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-12 w-12 bg-blue-500"></span>
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 6,
    title: "Advanced Pricing Table",
    objective:
      "Create a responsive pricing table with hover effects, badges, and feature lists.",
    codeStarter: `
// Step 1: Create pricing card structure
// Step 2: Add responsive design
// Step 3: Implement hover effects and badges
    `,
    solution: `
export default function PricingTable() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-extrabold text-gray-900">$29</span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
            <ul className="space-y-4">
              {['10 Users', '2GB Storage', 'Basic Support'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" 
                       strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 
                             hover:bg-indigo-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="absolute top-0 right-0">
            <div className="bg-indigo-500 text-white text-sm px-4 py-1 rounded-bl-lg">
              Popular
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pro</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-extrabold text-gray-900">$59</span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
            <ul className="space-y-4">
              {['50 Users', '10GB Storage', 'Priority Support', 'Advanced Features'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" 
                       strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 
                             hover:bg-indigo-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-extrabold text-gray-900">$99</span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
            <ul className="space-y-4">
              {['Unlimited Users', 'Unlimited Storage', '24/7 Support', 'Custom Features'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" 
                       strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 
                             hover:bg-indigo-700 transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 7,
    title: "Dashboard Layout",
    objective:
      "Create a responsive dashboard layout with sidebar, header, and content areas.",
    codeStarter: `
// Step 1: Create layout structure
// Step 2: Add responsive sidebar
// Step 3: Style dashboard components
    `,
    solution: `
import { useState } from 'react'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={\`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform 
        transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:inset-auto md:w-64
        \${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      \`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-6">
          {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((item) => (
            
              key={item}
              href="#"
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <span>{item}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen md:pl-64">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center">
              <span className="ml-2">John Doe</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Stats Cards */}
            {['Total Users', 'Revenue', 'Orders'].map((stat) => (
              <div key={stat} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-500 text-sm font-medium">{stat}</h3>
                <p className="mt-2 text-3xl font-bold">1,234</p>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Analytics Overview</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              Chart Placeholder
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Name', 'Status', 'Date'].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3].map((row) => (
                  <tr key={row}>
                    <td className="px-6 py-4 whitespace-nowrap">User {row}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">2024-01-{row}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
    `,
  },
  {
    id: 8,
    title: "Advanced Modal System",
    objective:
      "Create a reusable modal system with animations and different variants.",
    codeStarter: `
// Step 1: Create modal component
// Step 2: Add animations
// Step 3: Implement different modal variants
    `,
    solution: `
import { Fragment, useState } from 'react'

const Modal = ({ isOpen, onClose, variant = 'default', children }) => {
  const variants = {
    default: {
      overlay: 'bg-black bg-opacity-50',
      container: 'bg-white',
      size: 'max-w-lg'
    },
    danger: {
      overlay: 'bg-red-800 bg-opacity-50',
      container: 'bg-red-50',
      size: 'max-w-md'
    },
    fullscreen: {
      overlay: 'bg-white',
      container: 'bg-white',
      size: 'max-w-full h-full'
    }
  }

  const currentVariant = variants[variant]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className={\`fixed inset-0 transition-opacity \${currentVariant.overlay}\`}
           onClick={onClose}
           aria-hidden="true"
      />

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className={\`
          relative \${currentVariant.size} w-full \${currentVariant.container}
          rounded-lg shadow-xl transform transition-all
          animate-modal-enter
        \`}>
          {children}
        </div>
      </div>
    </div>
  )
}

const ModalHeader = ({ children, onClose }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <h3 className="text-lg font-medium">{children}</h3>
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-gray-500 focus:outline-none"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
)

const ModalBody = ({ children }) => (
  <div className="p-6">{children}</div>
)

const ModalFooter = ({ children }) => (
  <div className="flex justify-end gap-2 px-6 py-4 bg-gray-50 rounded-b-lg">
    {children}
  </div>
)

export default function ModalExample() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    variant: 'default'
  })

  const openModal = (variant) => {
    setModalState({ isOpen: true, variant })
  }

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false })
  }

  return (
    <div className="p-8 space-y-4">
      <div className="space-x-4">
        <button
          onClick={() => openModal('default')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Open Default Modal
        </button>
        <button
          onClick={() => openModal('danger')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Open Danger Modal
        </button>
        <button
          onClick={() => openModal('fullscreen')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Open Fullscreen Modal
        </button>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        variant={modalState.variant}
      >
        <ModalHeader onClose={closeModal}>
          {modalState.variant.charAt(0).toUpperCase() + modalState.variant.slice(1)} Modal
        </ModalHeader>
        <ModalBody>
          <p className="text-gray-600">
            This is a {modalState.variant} modal example with custom styling and animations.
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Confirm
          </button>
            Confirm
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
    `,
  },
  {
    id: 9,
    title: "Custom Theme System",
    objective:
      "Create a theme system with color schemes and dynamic styling using Tailwind CSS.",
    codeStarter: `
// Step 1: Set up theme configuration
// Step 2: Create theme context and provider
// Step 3: Implement theme switching
    `,
    solution: `
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

const themes = {
  light: {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-200 hover:bg-gray-300',
    text: 'text-gray-900',
    background: 'bg-white',
    card: 'bg-white shadow-md',
  },
  dark: {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-700 hover:bg-gray-600',
    text: 'text-white',
    background: 'bg-gray-900',
    card: 'bg-gray-800 shadow-md',
  },
  forest: {
    primary: 'bg-green-600 hover:bg-green-700',
    secondary: 'bg-emerald-700 hover:bg-emerald-600',
    text: 'text-emerald-100',
    background: 'bg-green-900',
    card: 'bg-green-800 shadow-md',
  }
}

function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemedApp() {
  const { currentTheme, setCurrentTheme, themes } = useContext(ThemeContext)
  const theme = themes[currentTheme]

  return (
    <div className={\`min-h-screen \${theme.background} \${theme.text} transition-colors duration-200\`}>
      <div className="container mx-auto p-8">
        <div className="flex justify-end space-x-4 mb-8">
          {Object.keys(themes).map((themeName) => (
            <button
              key={themeName}
              onClick={() => setCurrentTheme(themeName)}
              className={\`px-4 py-2 rounded-lg \${
                currentTheme === themeName
                  ? themes[themeName].primary
                  : themes[themeName].secondary
              }\`}
            >
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className={\`\${theme.card} rounded-lg p-6\`}>
              <h3 className="text-xl font-bold mb-4">Card {item}</h3>
              <p className="mb-4">This card adapts to the current theme.</p>
              <button className={\`\${theme.primary} text-white px-4 py-2 rounded-lg\`}>
                Action
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ThemeExample() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )
}
    `,
  },
  {
    id: 10,
    title: "Complex Data Table",
    objective:
      "Build an advanced data table with sorting, filtering, and responsive design.",
    codeStarter: `
// Step 1: Create table structure
// Step 2: Implement sorting and filtering
// Step 3: Add responsive features
    `,
    solution: `
import { useState, useMemo } from 'react'

const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', role: 'User' },
  // ... add more data
]

export default function DataTable() {
  const [data] = useState(initialData)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [filters, setFilters] = useState({ name: '', email: '', status: '', role: '' })
  
  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedAndFilteredData = useMemo(() => {
    let filteredData = data.filter(item => {
      return Object.keys(filters).every(key => {
        return item[key].toLowerCase().includes(filters[key].toLowerCase())
      })
    })

    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }
    return filteredData
  }, [data, sortConfig, filters])

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.keys(filters).map(key => (
          <input
            key={key}
            placeholder={\`Filter by \${key}\`}
            value={filters[key]}
            onChange={e => setFilters({ ...filters, [key]: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        ))}
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(filters).map(key => (
                <th
                  key={key}
                  onClick={() => handleSort(key)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-1">
                    <span>{key}</span>
                    {sortConfig.key === key && (
                      <span>
                        {sortConfig.direction === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedAndFilteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {Object.keys(filters).map(key => (
                  <td key={key} className="px-6 py-4 whitespace-nowrap">
                    {key === 'status' ? (
                      <span className={\`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        \${item.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                        }\`}
                      >
                        {item[key]}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-900">{item[key]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
    `,
  },
]
