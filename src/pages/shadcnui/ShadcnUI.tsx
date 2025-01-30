import { CourseView } from "@/features/layout/CourseView"
import { shadcnUILinks } from "@/lib/links/shadcn-ui"

export const ShadcnUI = () => (
  <CourseView
    title="Shadcn UI"
    icon={<img src="/shadcn.svg" alt="shadcn" className="w-8" />}
    links={shadcnUILinks}
  />
)
