export const reactRouterDomSeniorQuestions = [
  {
    id: 1,
    title: "How can you handle route-based code splitting?",
    code: null,
    options: [
      "A) Using React.lazy with <Route>",
      "B) Wrapping routes in Suspense",
      "C) Dynamically importing route components",
      "D) All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Route-based code splitting is achieved by dynamically importing components with React.lazy and wrapping them in Suspense.",
  },
  {
    id: 2,
    title: "How do you implement protected routes?",
    code: `// What should be done for route protection?
  
    A) Wrap routes in a higher-order component.
    B) Use a state to check authentication.
    C) Conditionally render <Navigate> for unauthorized access.
    D) All of the above`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 3,
    explanation:
      "Protected routes are implemented by checking authentication and rendering <Navigate> for unauthorized users.",
  },
  {
    id: 3,
    title: "How do you configure a basename in <BrowserRouter>?",
    code: null,
    options: [
      "A) Add a 'basename' prop to <BrowserRouter>",
      "B) Use the 'path' attribute",
      "C) Configure the 'state' property",
      "D) Set 'basename' in the root <Route>",
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
      "A) Use <Route path='*'> in the parent route",
      "B) Define a 404 route in each level",
      "C) Wrap the nested routes in <Switch>",
      "D) Use <Redirect>",
    ],
    correctAnswer: 0,
    explanation:
      "For nested routes, a <Route path='*'> in the parent route handles unmatched paths effectively.",
  },
  {
    id: 5,
    title: "How do you handle route transitions with animations?",
    code: `// What is required for animated transitions?
  
    A) React Transition Group
    B) Wrapping routes in <CSSTransition>
    C) Using <Switch> with animations
    D) Both A and B`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 3,
    explanation:
      "React Transition Group enables route transitions by wrapping routes in <CSSTransition> or <Transition> components.",
  },
  {
    id: 6,
    title: "What does the 'caseSensitive' option in <Route> do?",
    code: null,
    options: [
      "A) Matches paths case-sensitively",
      "B) Ignores path matching",
      "C) Only works for dynamic routes",
      "D) None of the above",
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
      "A) Use React.lazy for components",
      "B) Split routes into separate files",
      "C) Use dynamic imports",
      "D) All of the above",
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
      "A) Define routes declaratively",
      "B) Replace <Route> components",
      "C) Simplify route configuration",
      "D) All of the above",
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
      "A) Check roles in a custom hook",
      "B) Conditionally render <Navigate>",
      "C) Use a higher-order component",
      "D) All of the above",
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
      "A) Use the useSearchParams hook",
      "B) Parse them from useLocation",
      "C) Pass them via the 'state' property",
      "D) Both A and B",
    ],
    correctAnswer: 3,
    explanation:
      "Query parameters can be accessed using the useSearchParams hook or parsed from useLocation in React Router.",
  },
]
