import { CourseView } from "@/features/layout/CourseView"
import { framerLinks } from "@/lib/links/framer"

export const Framer = () => (
  <CourseView
    title="Framer"
    icon={<img src="/framer.svg" alt="framer" className="w-8" />}
    links={framerLinks}
  />
)
