import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { tailwindCSSIntermediateQuestions } from "@/lib/questions/tailwind"
import { useTailwindStore } from "@/store/questionStore"

export const TailwindCSSIntermediate = () => (
  <QuestionViewer
    questions={tailwindCSSIntermediateQuestions}
    courseStore={useTailwindStore}
    level="intermediate"
    coursePath="tailwind-css"
  />
)
