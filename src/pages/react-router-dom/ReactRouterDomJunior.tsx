import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactRouterDomJuniorQuestions } from "@/lib/questions/react-router-dom/junior"
import { useReactRouterDomStore } from "@/store/questionStore"

export const ReactRouterDomJunior = () => (
  <QuestionViewer
    questions={reactRouterDomJuniorQuestions}
    courseStore={useReactRouterDomStore}
    level="junior"
    coursePath="react-router-dom"
  />
)
