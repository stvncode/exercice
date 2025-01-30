import { CourseView } from "@/features/layout/CourseView"
import { reactRouterDomLinks } from "@/lib/links/react-router-dom"

export const ReactRouterDom = () => (
  <CourseView
    title="React Router Dom"
    icon={
      <img src="/react-router-dom.svg" alt="react-router-dom" className="w-8" />
    }
    links={reactRouterDomLinks}
  />
)
