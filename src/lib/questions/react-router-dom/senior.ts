export const reactRouterDomSeniorQuestions = [
  {
    id: 1,
    title: "How can you handle route-based code splitting?",
    code: null,
    options: [
      "Using React.lazy with <Route>",
      "Wrapping routes in Suspense",
      "Dynamically importing route components",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Route-based code splitting is achieved by dynamically importing components with React.lazy and wrapping them in Suspense.",
  },
  {
    id: 2,
    title: "How do you implement protected routes?",
    code: null,
    options: [
      "Wrap routes in a higher-order component",
      "Use a state to check authentication",
      "Conditionally render <Navigate> for unauthorized access",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Protected routes are implemented by checking authentication and rendering <Navigate> for unauthorized users.",
  },
  {
    id: 3,
    title: "How do you configure a basename in <BrowserRouter>?",
    code: null,
    options: [
      "Add a 'basename' prop to <BrowserRouter>",
      "Use the 'path' attribute",
      "Configure the 'state' property",
      "Set 'basename' in the root <Route>",
    ],
    correctAnswer: 0,
    explanation:
      "The 'basename' prop in <BrowserRouter> allows you to specify a base URL for all routes.",
  },
  {
    id: 4,
    title: "How do you handle 404 pages in nested routes?",
    code: null,
    options: [
      "Use <Route path='*'> in the parent route",
      "Define a 404 route in each level",
      "Wrap the nested routes in <Switch>",
      "Use <Redirect>",
    ],
    correctAnswer: 0,
    explanation:
      "For nested routes, a <Route path='*'> in the parent route handles unmatched paths effectively.",
  },
  {
    id: 5,
    title: "How do you handle route transitions with animations?",
    code: null,
    options: [
      "React Transition Group",
      "Wrapping routes in <CSSTransition>",
      "Using <Switch> with animations",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "React Transition Group enables route transitions by wrapping routes in <CSSTransition> or <Transition> components.",
  },
  {
    id: 6,
    title: "What does the 'caseSensitive' option in <Route> do?",
    code: null,
    options: [
      "Matches paths case-sensitively",
      "Ignores path matching",
      "Only works for dynamic routes",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The 'caseSensitive' option ensures that paths are matched in a case-sensitive manner.",
  },
  {
    id: 7,
    title: "How do you optimize route loading in large apps?",
    code: null,
    options: [
      "Use React.lazy for components",
      "Split routes into separate files",
      "Use dynamic imports",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Optimizing route loading in large apps involves code splitting, dynamic imports, and lazy loading components.",
  },
  {
    id: 8,
    title: "What is the purpose of useRoutes?",
    code: null,
    options: [
      "Define routes declaratively",
      "Replace <Route> components",
      "Simplify route configuration",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "The useRoutes hook simplifies route configuration by allowing routes to be defined declaratively in a single array.",
  },
  {
    id: 9,
    title: "How do you implement route guards for roles?",
    code: null,
    options: [
      "Check roles in a custom hook",
      "Conditionally render <Navigate>",
      "Use a higher-order component",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Role-based route guards are implemented by checking user roles and conditionally rendering <Navigate> or using HOCs.",
  },
  {
    id: 10,
    title: "How do you handle query parameters?",
    code: null,
    options: [
      "Use the useSearchParams hook",
      "Parse them from useLocation",
      "Pass them via the 'state' property",
      "Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "Query parameters can be accessed using the useSearchParams hook or parsed from useLocation in React Router.",
  },
]
