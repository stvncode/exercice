import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { shadcnUIJuniorQuestions } from "@/lib/questions/shadcn-ui"
import { useShadcnUIStore } from "@/store/questionStore"

export const ShadcnUIJunior = () => (
  <QuestionViewer
    questions={shadcnUIJuniorQuestions}
    courseStore={useShadcnUIStore}
    level="junior"
    coursePath="shadcn-ui"
  />
)
