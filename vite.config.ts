import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import vercel from "vite-plugin-vercel"

export default defineConfig({
  plugins: [react(), checker({ typescript: true }), vercel()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
