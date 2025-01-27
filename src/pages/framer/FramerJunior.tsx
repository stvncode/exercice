import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { framerJuniorQuestions } from "@/lib/questions/framer"
import { useFramerStore } from "@/store/questionStore"

export const FramerJunior = () => (
  <QuestionViewer
    questions={framerJuniorQuestions}
    courseStore={useFramerStore}
    level="junior"
    coursePath="framer"
  />
)
