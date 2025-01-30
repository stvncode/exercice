import { CourseView } from "@/features/layout/CourseView"
import { reactQueryLinks } from "@/lib/links/react-query"

export const ReactQuery = () => (
  <CourseView
    title="React Query"
    icon={<img src="/react-query.svg" alt="react-query" className="w-8" />}
    links={reactQueryLinks}
  />
)
