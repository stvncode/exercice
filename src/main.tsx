import "@/styles/globals.css"
import { inject } from "@vercel/analytics"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme/theme.provider.tsx"
import { createAppRouter } from "./config/router.tsx"

inject()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={createAppRouter()} />
    </ThemeProvider>
  </StrictMode>
)
