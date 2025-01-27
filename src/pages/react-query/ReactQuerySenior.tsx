import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactQuerySeniorQuestions } from "@/lib/questions/react-query"
import { useReactQueryStore } from "@/store/questionStore"

export const ReactQuerySenior = () => (
  <QuestionViewer
    questions={reactQuerySeniorQuestions}
    courseStore={useReactQueryStore}
    level="senior"
    coursePath="react-query"
  />
)
