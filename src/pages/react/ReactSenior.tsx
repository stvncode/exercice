import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactSeniorQuestions } from "@/lib/questions/react/senior"
import { useReactStore } from "@/store/questionStore"

export const ReactSenior = () => (
  <QuestionViewer
    questions={reactSeniorQuestions}
    courseStore={useReactStore}
    level="senior"
    coursePath="react"
  />
)
