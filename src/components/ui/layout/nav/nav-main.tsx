import { Home, Inbox, LayoutDashboard, Search } from "lucide-react"

import {
  Flex,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "chronoxis"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { SearchCommand } from "../../modals/SearchCommand"

export const NavMain = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={false}>
            <Flex
              align="center"
              className="gap-2 cursor-pointer"
              onClick={() => setSearchOpen(true)}
            >
              <Search />
              <span>Search</span>
            </Flex>
          </SidebarMenuButton>
          <SidebarMenuAction className="font-medium text-muted-foreground">
            <span className="text-lg mt-0.5">⌘</span>
            <span className="text-sm ml-1">K</span>
          </SidebarMenuAction>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={pathname === "/"}>
            <Flex
              align="center"
              className="gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <Home />
              <span>Home</span>
            </Flex>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
            <Flex
              align="center"
              className="gap-2 cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              <LayoutDashboard />
              <span>Dashboard</span>
            </Flex>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={pathname === "/inbox"}>
            <Flex
              align="center"
              className="gap-2 cursor-pointer"
              onClick={() => navigate("/inbox")}
            >
              <Inbox />
              <span>Inbox</span>
            </Flex>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SearchCommand openState={[searchOpen, setSearchOpen]} />
    </>
  )
}
