import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { tsBeltSeniorQuestions } from "@/lib/questions/ts-belt"
import { useTSBeltStore } from "@/store/questionStore"

export const TSBeltSenior = () => (
  <QuestionViewer
    questions={tsBeltSeniorQuestions}
    courseStore={useTSBeltStore}
    level="senior"
    coursePath="ts-belt"
  />
)
