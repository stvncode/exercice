import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { zustandSeniorQuestions } from "@/lib/questions/zustand"
import { useZustandStore } from "@/store/questionStore"

export const ZustandSenior = () => (
  <QuestionViewer
    questions={zustandSeniorQuestions}
    courseStore={useZustandStore}
    level="senior"
    coursePath="zustand"
  />
)
