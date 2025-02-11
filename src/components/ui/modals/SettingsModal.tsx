import {
  Bell,
  Blocks,
  Captions,
  Gauge,
  Globe,
  Keyboard,
  LineChart,
  Link,
  Paintbrush,
  SignpostBig,
  Timer,
} from "lucide-react"

import {
  Accessibility as AccessibilityComponent,
  AlternativeTechs,
  Appearance,
  Difficulty,
  DocLinks,
  KeyboardShortcuts,
  Language,
  Learning,
  Profile,
  Progress,
  StudyTimer,
} from "@/features/settings"
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
import { SettingsItems, SettingsSidebarItems } from "./types"

const data: SettingsSidebarItems = {
  nav: [
    { name: "Profile", icon: Bell, tab: "profile" },
    { name: "Language", icon: Globe, tab: "language" },
    { name: "Appearance", icon: Paintbrush, tab: "appearance" },
    { name: "Keyboard shortcuts", icon: Keyboard, tab: "shortcuts" },
    { name: "Doc Links", icon: Link, tab: "links" },
    { name: "Alternative Techs", icon: SignpostBig, tab: "alternative" },
    {
      name: "Learning Preferences",
      icon: Blocks,
      tab: "learning",
      disabled: false,
    },
    { name: "Study Timer", icon: Timer, tab: "timer", disabled: true },
    {
      name: "Accessibility",
      icon: Captions,
      tab: "accessibility",
      disabled: true,
    },
    {
      name: "Difficulty Level",
      icon: Gauge,
      tab: "difficulty",
      disabled: true,
    },
    {
      name: "Progress Tracking",
      icon: LineChart,
      tab: "progress",
      disabled: true,
    },
  ],
}

export const SettingsModal = ({
  openState: [open, toggleOpen],
}: {
  openState: [boolean, () => void]
}) => {
  const [tab, setTab] = useState<SettingsItems>("profile")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleOpen()
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
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
                          disabled={item.disabled}
                          asChild
                          isActive={item.tab === tab}
                          className={`${
                            item.disabled
                              ? "cursor-not-allowed hover:bg-transparent text-gray-400"
                              : "cursor-pointer"
                          }`}
                        >
                          <Flex
                            align="center"
                            className="gap-2"
                            onClick={() => !item.disabled && setTab(item.tab)}
                          >
                            <item.icon
                              className={`${
                                item.disabled
                                  ? "hover:bg-transparent text-gray-400"
                                  : "text:seconddary-foreground hover:text-secondary-foreground"
                              }`}
                            />
                            <span
                              className={`${
                                item.disabled
                                  ? "hover:bg-transparent text-gray-400"
                                  : "text:seconddary-foreground hover:text-secondary-foreground"
                              }`}
                            >
                              {item.name}
                            </span>
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
                .with("profile", () => <Profile />)
                .with("appearance", () => <Appearance />)
                .with("shortcuts", () => <KeyboardShortcuts />)
                .with("language", () => <Language />)
                .with("links", () => <DocLinks />)
                .with("alternative", () => <AlternativeTechs />)
                .with("timer", () => <StudyTimer />)
                .with("accessibility", () => <AccessibilityComponent />)
                .with("learning", () => <Learning />)
                .with("difficulty", () => <Difficulty />)
                .with("progress", () => <Progress />)
                .exhaustive()}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  )
}
