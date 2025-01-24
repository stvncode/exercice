import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactJuniorQuestions } from "@/lib/questions/react/junior"
import { useReactStore } from "@/store/questionStore"

export const ReactJunior = () => (
  <QuestionViewer
    questions={reactJuniorQuestions}
    courseStore={useReactStore}
    level="junior"
    coursePath="react"
  />
)
