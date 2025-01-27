import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { tsBeltJuniorQuestions } from "@/lib/questions/ts-belt"
import { useTSBeltStore } from "@/store/questionStore"

export const TSBeltJunior = () => (
  <QuestionViewer
    questions={tsBeltJuniorQuestions}
    courseStore={useTSBeltStore}
    level="junior"
    coursePath="ts-belt"
  />
)
