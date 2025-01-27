import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { framerSeniorQuestions } from "@/lib/questions/framer"
import { useFramerStore } from "@/store/questionStore"

export const FramerSenior = () => (
  <QuestionViewer
    questions={framerSeniorQuestions}
    courseStore={useFramerStore}
    level="senior"
    coursePath="framer"
  />
)
