import { App } from "@/App"
import {
  Framer,
  Home,
  Inbox,
  Playwright,
  React,
  ReactHookForm,
  ReactQuery,
  ReactRouterDom,
  ShadcnUI,
  TailwindCSS,
  TSBelt,
  TypeScript,
  Zod,
  Zustand,
} from "@/pages"
import Error404 from "@/pages/404"
import { createBrowserRouter, RouteObject } from "react-router-dom"

const baseRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/react",
    element: <React />,
  },
  {
    path: "/react-router-dom",
    element: <ReactRouterDom />,
  },
  {
    path: "/react-query",
    element: <ReactQuery />,
  },
  {
    path: "/react-hook-form",
    element: <ReactHookForm />,
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
