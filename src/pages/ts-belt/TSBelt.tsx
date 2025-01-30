import { CourseView } from "@/features/layout/CourseView"
import { tSBeltLinks } from "@/lib/links/ts-belt"

export const TSBelt = () => (
  <CourseView
    title="TS Belt"
    icon={<img src="/ts-belt.svg" alt="ts-belt" className="w-8" />}
    links={tSBeltLinks}
  />
)
