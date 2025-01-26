import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactRouterDomIntermediateQuestions } from "@/lib/questions/react-router-dom/intermediate"
import { useReactRouterDomStore } from "@/store/questionStore"

export const ReactRouterDomIntermediate = () => (
  <QuestionViewer
    questions={reactRouterDomIntermediateQuestions}
    courseStore={useReactRouterDomStore}
    level="intermediate"
    coursePath="react-router-dom"
  />
)
