import { App } from "@/App"
import {
  Dashboard,
  Framer,
  Home,
  Inbox,
  Playwright,
  React,
  ReactExercices,
  ReactHookForm,
  ReactIntermediate,
  ReactJunior,
  ReactQuery,
  ReactRouterDom,
  ReactRouterDomExercices,
  ReactRouterDomIntermediate,
  ReactRouterDomJunior,
  ReactRouterDomSenior,
  ReactSenior,
  ShadcnUI,
  TailwindCSS,
  TSBelt,
  TypeScript,
  Zod,
  Zustand,
} from "@/pages"
import Error404 from "@/pages/404"
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom"

const baseRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/react",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <React />,
      },
      {
        path: "/react/junior",
        element: <ReactJunior />,
      },
      {
        path: "/react/intermediate",
        element: <ReactIntermediate />,
      },
      {
        path: "/react/senior",
        element: <ReactSenior />,
      },
      {
        path: "/react/exercises",
        element: <ReactExercices />,
      },
    ],
  },
  {
    path: "/react-hook-form",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ReactHookForm />,
      },
      {
        path: "/react-hook-form/junior",
        element: <ReactHookForm />,
      },
      {
        path: "/react-hook-form/intermediate",
        element: <ReactHookForm />,
      },
      {
        path: "/react-hook-form/senior",
        element: <ReactHookForm />,
      },
      {
        path: "/react-hook-form/exercises",
        element: <ReactHookForm />,
      },
    ],
  },
  {
    path: "/react-query",
    element: <ReactQuery />,
  },
  {
    path: "/react-router-dom",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ReactRouterDom />,
      },
      {
        path: "/react-router-dom/junior",
        element: <ReactRouterDomJunior />,
      },
      {
        path: "/react-router-dom/intermediate",
        element: <ReactRouterDomIntermediate />,
      },
      {
        path: "/react-router-dom/senior",
        element: <ReactRouterDomSenior />,
      },
      {
        path: "/react-router-dom/exercises",
        element: <ReactRouterDomExercices />,
      },
    ],
  },
  {
    path: "/shadcn-ui",
    element: <ShadcnUI />,
  },
  {
    path: "/tailwind-css",
    element: <TailwindCSS />,
  },
  {
    path: "/typescript",
    element: <TypeScript />,
  },
  {
    path: "/framer",
    element: <Framer />,
  },
  {
    path: "/playwright",
    element: <Playwright />,
  },
  {
    path: "/ts-belt",
    element: <TSBelt />,
  },
  {
    path: "/zod",
    element: <Zod />,
  },
  {
    path: "/zustand",
    element: <Zustand />,
  },
]

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: baseRoutes,
    },
  ])
