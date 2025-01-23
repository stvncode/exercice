import { Login } from "@/pages"
import { SidebarProvider } from "chronoxis"
import { match } from "ts-pattern"
import { SonnerToaster } from "./components/ui/sonner"
import { Layout } from "./features/layout/Layout"
import { useAccount } from "./store/globalStore"

export const App = () => {
  const { username } = useAccount()

  return (
    <SidebarProvider defaultOpen={true}>
      {match(Boolean(username))
        .with(true, () => <Layout />)
        .otherwise(() => (
          <Login />
        ))}
      <SonnerToaster
        duration={5000}
        theme="light"
        richColors
        closeButton
        toastOptions={{
          classNames: {
            toast: "shadow-lg rounded-lg flex items-center p-4 text-xs gap-1.5",
            info: "[&>button]:!bg-blue-600",
            warning: "[&>button]:!bg-yellow-600",
          },
        }}
      />
    </SidebarProvider>
  )
}
