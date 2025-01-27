import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { vitestIntermediateQuestions } from "@/lib/questions/vitest"
import { useVitestStore } from "@/store/questionStore"

export const VitestIntermediate = () => (
  <QuestionViewer
    questions={vitestIntermediateQuestions}
    courseStore={useVitestStore}
    level="intermediate"
    coursePath="vitest"
  />
)
