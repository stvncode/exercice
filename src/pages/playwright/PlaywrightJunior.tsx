import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { playwrightJuniorQuestions } from "@/lib/questions/playwright"
import { usePlaywrightStore } from "@/store/questionStore"

export const PlaywrightJunior = () => (
  <QuestionViewer
    questions={playwrightJuniorQuestions}
    courseStore={usePlaywrightStore}
    level="junior"
    coursePath="playwright"
  />
)
