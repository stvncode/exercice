import { App } from "@/App"
import { Home } from "@/pages"
import Error404 from "@/pages/404"
import { createBrowserRouter, RouteObject } from "react-router-dom"

const baseRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
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
