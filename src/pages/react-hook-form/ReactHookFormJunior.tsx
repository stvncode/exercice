import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactHookFormJuniorQuestions } from "@/lib/questions/react-hook-form"
import { useReactHookFormStore } from "@/store/questionStore"

export const ReactHookFormJunior = () => (
  <QuestionViewer
    questions={reactHookFormJuniorQuestions}
    courseStore={useReactHookFormStore}
    level="junior"
    coursePath="react-hook-form"
  />
)
