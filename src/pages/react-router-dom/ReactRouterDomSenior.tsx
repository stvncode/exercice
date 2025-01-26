import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactRouterDomSeniorQuestions } from "@/lib/questions/react-router-dom/senior"
import { useReactRouterDomStore } from "@/store/questionStore"

export const ReactRouterDomSenior = () => (
  <QuestionViewer
    questions={reactRouterDomSeniorQuestions}
    courseStore={useReactRouterDomStore}
    level="junior"
    coursePath="react-router-dom"
  />
)
