import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { vitestJuniorQuestions } from "@/lib/questions/vitest"
import { useVitestStore } from "@/store/questionStore"

export const VitestJunior = () => (
  <QuestionViewer
    questions={vitestJuniorQuestions}
    courseStore={useVitestStore}
    level="junior"
    coursePath="vitest"
  />
)
