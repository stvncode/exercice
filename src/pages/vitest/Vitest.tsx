import { CourseView } from "@/features/layout/CourseView"
import { vitestLinks } from "@/lib/links/vitest"

export const Vitest = () => (
  <CourseView
    title="Vitest"
    icon={<img src="/vitest.svg" alt="vitest" className="w-8" />}
    links={vitestLinks}
  />
)
