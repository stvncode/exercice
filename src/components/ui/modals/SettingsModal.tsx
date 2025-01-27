import { SetState } from "@/types/react"

import {
  Bell,
  Check,
  Globe,
  Home,
  Keyboard,
  Link,
  Lock,
  Menu,
  MessageCircle,
  Paintbrush,
  Video,
} from "lucide-react"

import { Appearance } from "@/features/settings"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Flex,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "chronoxis"
import { useEffect, useState } from "react"
import { match } from "ts-pattern"

const data = {
  nav: [
    { name: "Notifications", icon: Bell, tab: "notifications" },
    { name: "Messages & media", icon: MessageCircle, tab: "messages" },
    { name: "Chat settings", icon: Lock, tab: "chat" },
    { name: "Language", icon: Globe, tab: "language" },
    { name: "Data & storage", icon: Video, tab: "data" },
    { name: "Appearance", icon: Paintbrush, tab: "appearance" },
    { name: "Keyboard shortcuts", icon: Keyboard, tab: "keyboard" },
    { name: "Links", icon: Link, tab: "links" },
    { name: "Home", icon: Home, tab: "home" },
    { name: "Menu", icon: Menu, tab: "menu" },
    { name: "Check", icon: Check, tab: "check" },
  ],
}

export const SettingsModal = ({
  openState: [open, setOpen],
}: {
  openState: [boolean, SetState<boolean>]
}) => {
  const [tab, setTab] = useState("notifications")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 md:max-h-[600px] md:max-w-[800px] lg:max-w-[900px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.tab === tab}
                          className="cursor-pointer"
                        >
                          <Flex
                            align="center"
                            className="gap-2"
                            onClick={() => setTab(item.tab)}
                          >
                            <item.icon />
                            <span>{item.name}</span>
                          </Flex>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[680px] flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink>Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        {data.nav.find((n) => n.tab === tab)?.name ??
                          " Notifications"}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {match(tab)
                .with("notifications", () => (
                  <div>
                    <h1>Notifications</h1>
                  </div>
                ))
                .with("messages", () => (
                  <div>
                    <h1>Messages</h1>
                  </div>
                ))
                .with("appearance", () => <Appearance />)
                .otherwise(() => (
                  <div>Not found</div>
                ))}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  )
}
