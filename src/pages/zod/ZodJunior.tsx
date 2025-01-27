import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { zodJuniorQuestions } from "@/lib/questions/zod"
import { useZodStore } from "@/store/questionStore"

export const ZodJunior = () => (
  <QuestionViewer
    questions={zodJuniorQuestions}
    courseStore={useZodStore}
    level="junior"
    coursePath="zod"
  />
)
