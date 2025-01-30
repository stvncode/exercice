import { CourseView } from "@/features/layout/CourseView"
import { zustandLinks } from "@/lib/links/zustand"

export const Zustand = () => (
  <CourseView
    title="Zustand"
    icon={<img src="/zustand.svg" alt="zustand" className="w-8" />}
    links={zustandLinks}
  />
)
