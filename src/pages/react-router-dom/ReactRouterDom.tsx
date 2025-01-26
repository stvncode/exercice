import { CourseView } from "@/features/layout/CourseView"

export const ReactRouterDom = () => {
  return (
    <CourseView
      title="React Router Dom"
      icon={
        <img
          src="/react-router-dom.svg"
          alt="react-router-dom"
          className="w-8"
        />
      }
    />
  )
}
