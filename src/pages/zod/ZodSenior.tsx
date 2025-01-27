import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { zodSeniorQuestions } from "@/lib/questions/zod"
import { useZodStore } from "@/store/questionStore"

export const ZodSenior = () => (
  <QuestionViewer
    questions={zodSeniorQuestions}
    courseStore={useZodStore}
    level="senior"
    coursePath="zod"
  />
)
