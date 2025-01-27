import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { playwrightSeniorQuestions } from "@/lib/questions/playwright"
import { usePlaywrightStore } from "@/store/questionStore"

export const PlaywrightSenior = () => (
  <QuestionViewer
    questions={playwrightSeniorQuestions}
    courseStore={usePlaywrightStore}
    level="senior"
    coursePath="playwright"
  />
)
