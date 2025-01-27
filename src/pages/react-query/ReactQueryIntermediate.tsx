import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactQueryIntermediateQuestions } from "@/lib/questions/react-query"
import { useReactQueryStore } from "@/store/questionStore"

export const ReactQueryIntermediate = () => (
  <QuestionViewer
    questions={reactQueryIntermediateQuestions}
    courseStore={useReactQueryStore}
    level="intermediate"
    coursePath="react-query"
  />
)
