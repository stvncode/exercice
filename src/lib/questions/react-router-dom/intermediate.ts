export const reactRouterDomIntermediateQuestions = [
  {
    id: 1,
    title: "How do you redirect to another route in React Router?",
    code: `// Which method is used to redirect programmatically?
  
    A) <Navigate to="/path" />
    B) <Redirect to="/path" />
    C) useHistory().push("/path")
    D) Both A and B`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 3,
    explanation:
      "React Router v6 uses <Navigate> for redirection, while <Redirect> was used in older versions. Both methods are valid depending on the version.",
  },
  {
    id: 2,
    title: "How do you handle nested routes in React Router?",
    code: null,
    options: [
      "A) By using <Outlet>",
      "B) By using nested <Route> components",
      "C) By defining all routes in one <Route>",
      "D) Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "Nested routes are handled using nested <Route> components in conjunction with the <Outlet> component for rendering child routes.",
  },
  {
    id: 3,
    title: "What does the <Outlet> component do in React Router?",
    code: `// What is the purpose of <Outlet>?
  
    A) It provides a placeholder for child routes to render.
    B) It navigates between routes.
    C) It handles 404 errors.
    D) It is used for redirection.`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "The <Outlet> component acts as a placeholder for rendering the child components of a parent route.",
  },
  {
    id: 4,
    title: "What is the use of the 'path' attribute in <Route>?",
    code: null,
    options: [
      "A) It defines the URL pattern for the route.",
      "B) It specifies the component to render.",
      "C) It handles navigation logic.",
      "D) It defines the redirect path.",
    ],
    correctAnswer: 0,
    explanation:
      "The 'path' attribute defines the URL pattern that the <Route> should match.",
  },
  {
    id: 5,
    title: "How do you pass state between routes?",
    code: `// How can you pass state when navigating?
  
    A) Through the 'state' property in useNavigate
    B) By using query parameters
    C) By passing props to <Link> or <Navigate>
    D) All of the above`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 3,
    explanation:
      "You can pass state using the 'state' property in navigation or query parameters, depending on the requirements.",
  },
  {
    id: 6,
    title: "Which hook replaces useHistory in React Router v6?",
    code: null,
    options: [
      "A) useNavigate",
      "B) useLocation",
      "C) useParams",
      "D) useRouteMatch",
    ],
    correctAnswer: 0,
    explanation:
      "React Router v6 replaced useHistory with useNavigate for programmatic navigation.",
  },
  {
    id: 7,
    title: "How do you access the current route's location?",
    code: null,
    options: [
      "A) useLocation",
      "B) useHistory",
      "C) useParams",
      "D) useRouteMatch",
    ],
    correctAnswer: 0,
    explanation:
      "The useLocation hook provides access to the current route's location object, including the pathname and state.",
  },
  {
    id: 8,
    title: "What is the difference between <HashRouter> and <BrowserRouter>?",
    code: `// Which of the following is true?
  
    A) <HashRouter> uses a hash in the URL for navigation.
    B) <BrowserRouter> uses the History API for navigation.
    C) <BrowserRouter> requires server-side configuration.
    D) All of the above`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 3,
    explanation:
      "HashRouter uses a hash for navigation, while BrowserRouter uses the History API and may require server-side configuration for non-root paths.",
  },
  {
    id: 9,
    title: "How do you add parameters to a route?",
    code: `// What syntax is used for dynamic route parameters?
  
    A) '/path/:param'
    B) '/path/*'
    C) '/path?param=value'
    D) '/path:[param]'`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation:
      "Dynamic route parameters are defined using the '/path/:param' syntax.",
  },
  {
    id: 10,
    title: "What does useMatch do?",
    code: null,
    options: [
      "A) Checks if a route matches the current URL.",
      "B) Retrieves dynamic route parameters.",
      "C) Redirects to another route.",
      "D) Returns the state of the current route.",
    ],
    correctAnswer: 0,
    explanation:
      "The useMatch hook checks if a route matches the current URL and returns the match details.",
  },
]
