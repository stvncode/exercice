import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactIntermediateQuestions } from "@/lib/questions/react/intermediate"
import { useReactStore } from "@/store/questionStore"

export const ReactIntermediate = () => (
  <QuestionViewer
    questions={reactIntermediateQuestions}
    courseStore={useReactStore}
    level="intermediate"
    coursePath="react"
  />
)
