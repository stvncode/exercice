import { CourseView } from "@/features/layout/CourseView"
import { reactLinks } from "@/lib/links/react"

export const React = () => (
  <CourseView
    title="React"
    icon={<img src="/react.svg" alt="react" className="w-8" />}
    links={reactLinks}
  />
)
