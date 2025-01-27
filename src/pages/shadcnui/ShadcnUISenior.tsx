import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { shadcnUISeniorQuestions } from "@/lib/questions/shadcn-ui"
import { useShadcnUIStore } from "@/store/questionStore"

export const ShadcnUISenior = () => (
  <QuestionViewer
    questions={shadcnUISeniorQuestions}
    courseStore={useShadcnUIStore}
    level="senior"
    coursePath="shadcn-ui"
  />
)
