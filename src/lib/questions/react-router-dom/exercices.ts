export const reactRouterDomExercises = [
  {
    id: 1,
    title: "Create a Simple Router",
    objective: "Set up a basic router with two routes: Home and About.",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        {/* Step 1: Add a <Routes> container */}
        {/* Step 2: Define two routes for Home and About */}
      </Router>
    );
  }

  function Home() {
    return <h1>Welcome to the Home Page</h1>;
  }

  function About() {
    return <h1>About Us</h1>;
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }

  function Home() {
    return <h1>Welcome to the Home Page</h1>;
  }

  function About() {
    return <h1>About Us</h1>;
  }

  export default App;
  `,
  },
  {
    id: 2,
    title: "Add Navigation Links",
    objective:
      "Create a navigation bar to switch between Home and About pages.",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        {/* Step 1: Add navigation links */}
        {/* Step 2: Define two routes for Home and About */}
      </Router>
    );
  }

  function Home() {
    return <h1>Welcome to the Home Page</h1>;
  }

  function About() {
    return <h1>About Us</h1>;
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

  function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }

  function Home() {
    return <h1>Welcome to the Home Page</h1>;
  }

  function About() {
    return <h1>About Us</h1>;
  }

  export default App;
  `,
  },
  {
    id: 3,
    title: "Use Dynamic Routes",
    objective:
      "Create a route to display a user's profile using a dynamic parameter.",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          {/* Step 1: Add a dynamic route for User Profile */}
        </Routes>
      </Router>
    );
  }

  function UserProfile() {
    return <h1>User Profile: {/* Display the user's ID here */}</h1>;
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </Router>
    );
  }

  function UserProfile() {
    const { id } = useParams();
    return <h1>User Profile: {id}</h1>;
  }

  export default App;
  `,
  },
  {
    id: 4,
    title: "Handle 404 Pages",
    objective: "Add a route to handle unmatched paths (404 page).",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          {/* Step 1: Add routes for Home and About */}
          {/* Step 2: Add a wildcard route for 404 */}
        </Routes>
      </Router>
    );
  }

  function NotFound() {
    return <h1>404 - Page Not Found</h1>;
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }

  function NotFound() {
    return <h1>404 - Page Not Found</h1>;
  }

  export default App;
  `,
  },
  {
    id: 5,
    title: "Redirect to Another Page",
    objective: "Set up a redirection from the old '/home' route to '/'.",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          {/* Step 1: Add a redirection from /home to / */}
        </Routes>
      </Router>
    );
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }

  export default App;
  `,
  },
  {
    id: 6,
    title: "Use Query Parameters",
    objective: "Read and display query parameters from the URL.",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    );
  }

  function Search() {
    return <h1>Search Query: {/* Display the query parameter here */}</h1>;
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes, useSearchParams } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    );
  }

  function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    return <h1>Search Query: {query}</h1>;
  }

  export default App;
  `,
  },
  {
    id: 7,
    title: "Implement Nested Routes",
    objective:
      "Add nested routes for a Dashboard with Overview and Settings pages.",
    codeStarter: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          {/* Step 1: Add a parent route for Dashboard */}
          {/* Step 2: Add nested routes for Overview and Settings */}
        </Routes>
      </Router>
    );
  }

  function Dashboard() {
    return <h1>Dashboard</h1>;
  }

  export default App;
  `,
    solution: `
  import React from "react";
  import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="overview" element={<h2>Overview</h2>} />
            <Route path="settings" element={<h2>Settings</h2>} />
          </Route>
        </Routes>
      </Router>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    );
  }

  export default App;
  `,
  },
]
