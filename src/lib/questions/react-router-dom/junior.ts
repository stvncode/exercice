export const reactRouterDomJuniorQuestions = [
  {
    id: 1,
    title: "What is the main purpose of React Router?",
    code: null,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 2,
    explanation:
      "React Router is primarily used to handle navigation and routing in a React application, enabling developers to create single-page applications with multiple views.",
  },
  {
    id: 2,
    title: "Which component is used to define a route in React Router?",
    code: null,
    options: ["<Route>", "<Router>", "<Link>", "<Navigate>"],
    correctAnswer: 0,
    explanation:
      "The <Route> component is used to define individual routes and associate them with a specific component to render.",
  },
  {
    id: 3,
    title: "How do you navigate to a different route programmatically?",
    code: null,
    options: ["useNavigate", "useHistory", "useRouteMatch", "useParams"],
    correctAnswer: 0,
    explanation:
      "The useNavigate hook from React Router allows programmatic navigation in a React application.",
  },
  {
    id: 4,
    title: "What does the <Link> component do?",
    code: null,
    options: [
      "Submit forms",
      "Fetch API data",
      "Navigate between routes",
      "Style the application",
    ],
    correctAnswer: 2,
    explanation:
      "The <Link> component is used to navigate between routes in React Router without causing a full-page reload.",
  },
  {
    id: 5,
    title: "Which component wraps the entire application to enable routing?",
    code: null,
    options: ["<BrowserRouter>", "<Route>", "<Switch>", "<Redirect>"],
    correctAnswer: 0,
    explanation:
      "The <BrowserRouter> component wraps the entire application and enables routing using React Router.",
  },
  {
    id: 6,
    title: "What is the default behavior of React Router when matching routes?",
    code: null,
    options: [
      "Matches the full path only",
      "Matches from the end of the path",
      "Matches partially from the start of the path",
      "Ignores all path matching",
    ],
    correctAnswer: 2,
    explanation:
      "React Router matches routes partially from the start of the path by default. You can use the 'exact' prop for exact matches.",
  },
  {
    id: 7,
    title: "Which component is used to render a fallback for unmatched routes?",
    code: null,
    options: ["<Fallback>", "<NotFound>", "<Route path='*'>", "<Redirect>"],
    correctAnswer: 2,
    explanation:
      "The <Route path='*'> component is used to render a fallback for all unmatched routes in React Router.",
  },
  {
    id: 8,
    title: "What is the purpose of the 'exact' prop in <Route>?",
    code: null,
    options: [
      "To prevent partial matches",
      "To enable navigation",
      "To allow nested routes",
      "To redirect to a different path",
    ],
    correctAnswer: 0,
    explanation:
      "The 'exact' prop ensures that the route matches only the full path and not partially matching paths.",
  },
  {
    id: 9,
    title: "What is the default behavior of <Switch>?",
    code: null,
    options: [
      "Render all matching routes",
      "Render only the first matching route",
      "Redirect unmatched routes",
      "Enable dynamic imports",
    ],
    correctAnswer: 1,
    explanation:
      "The <Switch> component renders only the first route that matches the current URL.",
  },
  {
    id: 10,
    title: "Which hook provides access to route parameters?",
    code: null,
    options: ["useParams", "useHistory", "useNavigate", "useMatch"],
    correctAnswer: 0,
    explanation:
      "The useParams hook allows access to dynamic route parameters in React Router.",
  },
]
