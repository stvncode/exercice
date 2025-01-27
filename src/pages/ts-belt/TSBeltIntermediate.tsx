import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { tsBeltIntermediateQuestions } from "@/lib/questions/ts-belt"
import { useTSBeltStore } from "@/store/questionStore"

export const TSBeltIntermediate = () => (
  <QuestionViewer
    questions={tsBeltIntermediateQuestions}
    courseStore={useTSBeltStore}
    level="intermediate"
    coursePath="ts-belt"
  />
)
