import { CourseView } from "@/features/layout/CourseView"
import { tailwindLinks } from "@/lib/links/tailwind"

export const TailwindCSS = () => (
  <CourseView
    title="Tailwind CSS"
    icon={<img src="/tailwind.svg" alt="tailwind" className="w-8" />}
    links={tailwindLinks}
  />
)
