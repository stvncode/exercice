import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { tailwindCSSJuniorQuestions } from "@/lib/questions/tailwind"
import { useTailwindStore } from "@/store/questionStore"

export const TailwindCSSJunior = () => (
  <QuestionViewer
    questions={tailwindCSSJuniorQuestions}
    courseStore={useTailwindStore}
    level="junior"
    coursePath="tailwind-css"
  />
)
