import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { vitestSeniorQuestions } from "@/lib/questions/vitest"
import { useVitestStore } from "@/store/questionStore"

export const VitestSenior = () => (
  <QuestionViewer
    questions={vitestSeniorQuestions}
    courseStore={useVitestStore}
    level="senior"
    coursePath="vitest"
  />
)
