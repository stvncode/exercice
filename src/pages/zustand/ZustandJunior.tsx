import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { zustandJuniorQuestions } from "@/lib/questions/zustand"
import { useZustandStore } from "@/store/questionStore"

export const ZustandJunior = () => (
  <QuestionViewer
    questions={zustandJuniorQuestions}
    courseStore={useZustandStore}
    level="junior"
    coursePath="zustand"
  />
)
