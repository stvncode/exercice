import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { framerIntermediateQuestions } from "@/lib/questions/framer"
import { useFramerStore } from "@/store/questionStore"

export const FramerIntermediate = () => (
  <QuestionViewer
    questions={framerIntermediateQuestions}
    courseStore={useFramerStore}
    level="intermediate"
    coursePath="framer"
  />
)
