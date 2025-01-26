export const reactRouterDomJuniorQuestions = [
  {
    id: 1,
    title: "What is the main purpose of React Router?",
    code: `// What does React Router help with in a React application?
  
    A) State management
    B) Handling user authentication
    C) Navigation and routing
    D) Styling components`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 2,
    explanation:
      "React Router is primarily used to handle navigation and routing in a React application, enabling developers to create single-page applications with multiple views.",
  },
  {
    id: 2,
    title: "Which component is used to define a route in React Router?",
    code: `// Which of the following is used to define routes?
  
    A) <Route>
    B) <Router>
    C) <Link>
    D) <Navigate>`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "The <Route> component is used to define individual routes and associate them with a specific component to render.",
  },
  {
    id: 3,
    title: "How do you navigate to a different route programmatically?",
    code: `// Which of the following can programmatically navigate to a route?
  
    A) useNavigate
    B) useHistory
    C) useRouteMatch
    D) useParams`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "The useNavigate hook from React Router allows programmatic navigation in a React application.",
  },
  {
    id: 4,
    title: "What does the <Link> component do?",
    code: `// What is the purpose of the <Link> component?
  
    A) Submit forms
    B) Fetch API data
    C) Navigate between routes
    D) Style the application`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 2,
    explanation:
      "The <Link> component is used to navigate between routes in React Router without causing a full-page reload.",
  },
  {
    id: 5,
    title: "Which component wraps the entire application to enable routing?",
    code: `// What is the parent component for routing in React Router?
  
    A) <BrowserRouter>
    B) <Route>
    C) <Switch>
    D) <Redirect>`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "The <BrowserRouter> component wraps the entire application and enables routing using React Router.",
  },
  {
    id: 6,
    title: "What is the default behavior of React Router when matching routes?",
    code: `// How does React Router match routes by default?
  
    A) Matches the full path only
    B) Matches from the end of the path
    C) Matches partially from the start of the path
    D) Ignores all path matching`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 2,
    explanation:
      "React Router matches routes partially from the start of the path by default. You can use the 'exact' prop for exact matches.",
  },
  {
    id: 7,
    title: "Which component is used to render a fallback for unmatched routes?",
    code: `// What is used to display a fallback for unmatched routes?
  
    A) <Fallback>
    B) <NotFound>
    C) <Route path="*">
    D) <Redirect>`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 2,
    explanation:
      "The <Route path='*'> component is used to render a fallback for all unmatched routes in React Router.",
  },
  {
    id: 8,
    title: "What is the purpose of the 'exact' prop in <Route>?",
    code: `// Why would you use the 'exact' prop in a <Route>?
  
    A) To prevent partial matches
    B) To enable navigation
    C) To allow nested routes
    D) To redirect to a different path`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "The 'exact' prop ensures that the route matches only the full path and not partially matching paths.",
  },
  {
    id: 9,
    title: "What is the default behavior of <Switch>?",
    code: `// How does <Switch> behave in React Router?
  
    A) Renders all matching routes
    B) Renders only the first matching route
    C) Redirects unmatched routes
    D) Enables dynamic imports`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 1,
    explanation:
      "The <Switch> component renders only the first route that matches the current URL.",
  },
  {
    id: 10,
    title: "Which hook provides access to route parameters?",
    code: `// How can you access dynamic route parameters?
  
    A) useParams
    B) useHistory
    C) useNavigate
    D) useMatch`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "The useParams hook allows access to dynamic route parameters in React Router.",
  },
]
