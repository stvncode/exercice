import { CourseView } from "@/features/layout/CourseView"
import { zodLinks } from "@/lib/links/zod"

export const Zod = () => (
  <CourseView
    title="Zod"
    icon={<img src="/zod.svg" alt="zod" className="w-8" />}
    links={zodLinks}
  />
)
