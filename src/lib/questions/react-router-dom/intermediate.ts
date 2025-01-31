export const reactRouterDomIntermediateQuestions = [
  {
    id: 1,
    title: "How do you redirect to another route in React Router?",
    code: null,
    options: [
      "<Navigate to='/path' />",
      "<Redirect to='/path' />",
      "useHistory().push('/path')",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "React Router v6 uses <Navigate> for redirection, while <Redirect> was used in older versions. Both methods are valid depending on the version.",
  },
  {
    id: 2,
    title: "How do you handle nested routes in React Router?",
    code: null,
    options: [
      "By using <Outlet>",
      "By using nested <Route> components",
      "By defining all routes in one <Route>",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "Nested routes are handled using nested <Route> components in conjunction with the <Outlet> component for rendering child routes.",
  },
  {
    id: 3,
    title: "What does the <Outlet> component do in React Router?",
    code: null,
    options: [
      "It provides a placeholder for child routes to render.",
      "It navigates between routes.",
      "It handles 404 errors.",
      "It is used for redirection.",
    ],
    correctAnswer: 0,
    explanation:
      "The <Outlet> component acts as a placeholder for rendering the child components of a parent route.",
  },
  {
    id: 4,
    title: "What is the use of the 'path' attribute in <Route>?",
    code: null,
    options: [
      "It defines the URL pattern for the route.",
      "It specifies the component to render.",
      "It handles navigation logic.",
      "It defines the redirect path.",
    ],
    correctAnswer: 0,
    explanation:
      "The 'path' attribute defines the URL pattern that the <Route> should match.",
  },
  {
    id: 5,
    title: "How do you pass state between routes?",
    code: null,
    options: [
      "Through the 'state' property in useNavigate",
      "By using query parameters",
      "By passing props to <Link> or <Navigate>",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "You can pass state using the 'state' property in navigation or query parameters, depending on the requirements.",
  },
  {
    id: 6,
    title: "Which hook replaces useHistory in React Router v6?",
    code: null,
    options: ["useNavigate", "useLocation", "useParams", "useRouteMatch"],
    correctAnswer: 0,
    explanation:
      "React Router v6 replaced useHistory with useNavigate for programmatic navigation.",
  },
  {
    id: 7,
    title: "How do you access the current route's location?",
    code: null,
    options: ["useLocation", "useHistory", "useParams", "useRouteMatch"],
    correctAnswer: 0,
    explanation:
      "The useLocation hook provides access to the current route's location object, including the pathname and state.",
  },
  {
    id: 8,
    title: "What is the difference between <HashRouter> and <BrowserRouter>?",
    code: null,
    options: [
      "<HashRouter> uses a hash in the URL for navigation.",
      "<BrowserRouter> uses the History API for navigation.",
      "<BrowserRouter> requires server-side configuration.",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "HashRouter uses a hash for navigation, while BrowserRouter uses the History API and may require server-side configuration for non-root paths.",
  },
  {
    id: 9,
    title: "How do you add parameters to a route?",
    code: null,
    options: [
      "'path/:param'",
      "'path/*'",
      "'path?param=value'",
      "'path:[param]'",
    ],
    correctAnswer: 0,
    explanation:
      "Dynamic route parameters are defined using the '/path/:param' syntax.",
  },
  {
    id: 10,
    title: "What does useMatch do?",
    code: null,
    options: [
      "Checks if a route matches the current URL.",
      "Retrieves dynamic route parameters.",
      "Redirects to another route.",
      "Returns the state of the current route.",
    ],
    correctAnswer: 0,
    explanation:
      "The useMatch hook checks if a route matches the current URL and returns the match details.",
  },
]
