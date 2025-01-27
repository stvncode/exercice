import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { tailwindCSSSeniorQuestions } from "@/lib/questions/tailwind"
import { useTailwindStore } from "@/store/questionStore"

export const TailwindCSSSenior = () => (
  <QuestionViewer
    questions={tailwindCSSSeniorQuestions}
    courseStore={useTailwindStore}
    level="senior"
    coursePath="tailwind-css"
  />
)
