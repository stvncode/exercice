import { CourseView } from "@/features/layout/CourseView"
import { reactHookFormLinks } from "@/lib/links/react-hook-form"

export const ReactHookForm = () => (
  <CourseView
    title="React Hook Form"
    icon={
      <img src="/react-hook-form.svg" alt="react-hook-form" className="w-8" />
    }
    links={reactHookFormLinks}
  />
)
