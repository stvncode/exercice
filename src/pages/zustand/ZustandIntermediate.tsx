import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { zustandIntermediateQuestions } from "@/lib/questions/zustand"
import { useZustandStore } from "@/store/questionStore"

export const ZustandIntermediate = () => (
  <QuestionViewer
    questions={zustandIntermediateQuestions}
    courseStore={useZustandStore}
    level="intermediate"
    coursePath="zustand"
  />
)
