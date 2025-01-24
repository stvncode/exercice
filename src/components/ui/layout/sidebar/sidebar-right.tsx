import { questionMap } from "@/lib/questions/questions"
import {
  CourseStore,
  useReactStore,
  useTailwindStore,
  useTypeScriptStore,
} from "@/store/questionStore"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "chronoxis"
import * as React from "react"
import { DatePicker } from "../date-picker"
import { NavDrag } from "../nav/nav-drag"
import { QuestionsNav } from "../nav/nav-questions"
import { NavUser } from "../nav/nav-user"

const storeMap: Record<string, () => CourseStore> = {
  react: useReactStore,
  typescript: useTypeScriptStore,
  tailwind: useTailwindStore,
  // Add other stores
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathParts = location.pathname.split("/")
  const isQuestionRoute = ["junior", "intermediate", "senior"].includes(
    pathParts[2]
  )
  const coursePath = pathParts[1]
  const courseStore = storeMap[coursePath]
  const questions = questionMap[`${coursePath}_${pathParts[2]}`]

  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        {isQuestionRoute && questions ? (
          <QuestionsNav questions={questions} courseStore={courseStore} />
        ) : (
          <NavDrag />
        )}
      </SidebarContent>
    </Sidebar>
  )
}
