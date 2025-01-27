import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactQueryJuniorQuestions } from "@/lib/questions/react-query"
import { useReactQueryStore } from "@/store/questionStore"

export const ReactQueryJunior = () => (
  <QuestionViewer
    questions={reactQueryJuniorQuestions}
    courseStore={useReactQueryStore}
    level="junior"
    coursePath="react-query"
  />
)
