import { App } from "@/App"
import {
  Dashboard,
  Framer,
  FramerExercises,
  FramerIntermediate,
  FramerJunior,
  FramerSenior,
  Home,
  Inbox,
  Playwright,
  PlaywrightExercises,
  PlaywrightIntermediate,
  PlaywrightJunior,
  PlaywrightSenior,
  React,
  ReactExercises,
  ReactHookForm,
  ReactIntermediate,
  ReactJunior,
  ReactQuery,
  ReactQueryExercises,
  ReactQueryIntermediate,
  ReactQueryJunior,
  ReactQuerySenior,
  ReactRouterDom,
  ReactRouterDomExercises,
  ReactRouterDomIntermediate,
  ReactRouterDomJunior,
  ReactRouterDomSenior,
  ReactSenior,
  ShadcnUI,
  ShadcnUIExercises,
  ShadcnUIIntermediate,
  ShadcnUIJunior,
  ShadcnUISenior,
  TailwindCSS,
  TailwindCSSExercises,
  TailwindCSSIntermediate,
  TailwindCSSJunior,
  TailwindCSSSenior,
  TSBelt,
  TSBeltExercises,
  TSBeltIntermediate,
  TSBeltJunior,
  TSBeltSenior,
  TypeScript,
  TypeScriptExercises,
  TypeScriptIntermediate,
  TypeScriptJunior,
  TypeScriptSenior,
  Vitest,
  VitestExercises,
  VitestIntermediate,
  VitestJunior,
  VitestSenior,
  Zod,
  ZodExercises,
  ZodIntermediate,
  ZodJunior,
  ZodSenior,
  Zustand,
  ZustandExercises,
  ZustandIntermediate,
  ZustandJunior,
  ZustandSenior,
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
        element: <ReactExercises />,
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
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ReactQuery />,
      },
      {
        path: "/react-query/junior",
        element: <ReactQueryJunior />,
      },
      {
        path: "/react-query/intermediate",
        element: <ReactQueryIntermediate />,
      },
      {
        path: "/react-query/senior",
        element: <ReactQuerySenior />,
      },
      {
        path: "/react-query/exercises",
        element: <ReactQueryExercises />,
      },
    ],
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
        element: <ReactRouterDomExercises />,
      },
    ],
  },
  {
    path: "/shadcn-ui",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ShadcnUI />,
      },
      {
        path: "/shadcn-ui/junior",
        element: <ShadcnUIJunior />,
      },
      {
        path: "/shadcn-ui/intermediate",
        element: <ShadcnUIIntermediate />,
      },
      {
        path: "/shadcn-ui/senior",
        element: <ShadcnUISenior />,
      },
      {
        path: "/shadcn-ui/exercises",
        element: <ShadcnUIExercises />,
      },
    ],
  },
  {
    path: "/tailwind-css",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <TailwindCSS />,
      },
      {
        path: "/tailwind-css/junior",
        element: <TailwindCSSJunior />,
      },
      {
        path: "/tailwind-css/intermediate",
        element: <TailwindCSSIntermediate />,
      },
      {
        path: "/tailwind-css/senior",
        element: <TailwindCSSSenior />,
      },
      {
        path: "/tailwind-css/exercises",
        element: <TailwindCSSExercises />,
      },
    ],
  },
  {
    path: "/typescript",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <TypeScript />,
      },
      {
        path: "/typescript/junior",
        element: <TypeScriptJunior />,
      },
      {
        path: "/typescript/intermediate",
        element: <TypeScriptIntermediate />,
      },
      {
        path: "/typescript/senior",
        element: <TypeScriptSenior />,
      },
      {
        path: "/typescript/exercises",
        element: <TypeScriptExercises />,
      },
    ],
  },
  {
    path: "/vitest",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Vitest />,
      },
      {
        path: "/vitest/junior",
        element: <VitestJunior />,
      },
      {
        path: "/vitest/intermediate",
        element: <VitestIntermediate />,
      },
      {
        path: "/vitest/senior",
        element: <VitestSenior />,
      },
      {
        path: "/vitest/exercises",
        element: <VitestExercises />,
      },
    ],
  },
  {
    path: "/framer",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Framer />,
      },
      {
        path: "/framer/junior",
        element: <FramerJunior />,
      },
      {
        path: "/framer/intermediate",
        element: <FramerIntermediate />,
      },
      {
        path: "/framer/senior",
        element: <FramerSenior />,
      },
      {
        path: "/framer/exercises",
        element: <FramerExercises />,
      },
    ],
  },
  {
    path: "/playwright",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Playwright />,
      },
      {
        path: "/playwright/junior",
        element: <PlaywrightJunior />,
      },
      {
        path: "/playwright/intermediate",
        element: <PlaywrightIntermediate />,
      },
      {
        path: "/playwright/senior",
        element: <PlaywrightSenior />,
      },
      {
        path: "/playwright/exercises",
        element: <PlaywrightExercises />,
      },
    ],
  },
  {
    path: "/ts-belt",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <TSBelt />,
      },
      {
        path: "/ts-belt/junior",
        element: <TSBeltJunior />,
      },
      {
        path: "/ts-belt/intermediate",
        element: <TSBeltIntermediate />,
      },
      {
        path: "/ts-belt/senior",
        element: <TSBeltSenior />,
      },
      {
        path: "/ts-belt/exercises",
        element: <TSBeltExercises />,
      },
    ],
  },
  {
    path: "/zod",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Zod />,
      },
      {
        path: "/zod/junior",
        element: <ZodJunior />,
      },
      {
        path: "/zod/intermediate",
        element: <ZodIntermediate />,
      },
      {
        path: "/zod/senior",
        element: <ZodSenior />,
      },
      {
        path: "/zod/exercises",
        element: <ZodExercises />,
      },
    ],
  },
  {
    path: "/zustand",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Zustand />,
      },
      {
        path: "/zustand/junior",
        element: <ZustandJunior />,
      },
      {
        path: "/zustand/intermediate",
        element: <ZustandIntermediate />,
      },
      {
        path: "/zustand/senior",
        element: <ZustandSenior />,
      },
      {
        path: "/zustand/exercises",
        element: <ZustandExercises />,
      },
    ],
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
