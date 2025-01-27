import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { zodIntermediateQuestions } from "@/lib/questions/zod"
import { useZodStore } from "@/store/questionStore"

export const ZodIntermediate = () => (
  <QuestionViewer
    questions={zodIntermediateQuestions}
    courseStore={useZodStore}
    level="intermediate"
    coursePath="zod"
  />
)
