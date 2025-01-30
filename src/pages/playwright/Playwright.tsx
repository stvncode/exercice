import { CourseView } from "@/features/layout/CourseView"
import { playwrightLinks } from "@/lib/links/playwright"

export const Playwright = () => (
  <CourseView
    title="Playwright"
    icon={<img src="/playwright.svg" alt="playwright" className="w-8" />}
    links={playwrightLinks}
  />
)
