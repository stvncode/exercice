import { CourseView } from "@/features/layout/CourseView"
import { typescriptLinks } from "@/lib/links/typescript"

export const TypeScript = () => (
  <CourseView
    title="TypeScript"
    icon={<img src="/typescript.svg" alt="typescript" className="w-8" />}
    links={typescriptLinks}
  />
)
