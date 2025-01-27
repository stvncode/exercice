import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { playwrightIntermediateQuestions } from "@/lib/questions/playwright"
import { usePlaywrightStore } from "@/store/questionStore"

export const PlaywrightIntermediate = () => (
  <QuestionViewer
    questions={playwrightIntermediateQuestions}
    courseStore={usePlaywrightStore}
    level="intermediate"
    coursePath="playwright"
  />
)
