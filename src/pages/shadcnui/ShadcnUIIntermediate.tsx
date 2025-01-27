import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { shadcnUIIntermediateQuestions } from "@/lib/questions/shadcn-ui"
import { useShadcnUIStore } from "@/store/questionStore"

export const ShadcnUIIntermediate = () => (
  <QuestionViewer
    questions={shadcnUIIntermediateQuestions}
    courseStore={useShadcnUIStore}
    level="intermediate"
    coursePath="shadcn-ui"
  />
)
