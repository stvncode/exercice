import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactHookFormSeniorQuestions } from "@/lib/questions/react-hook-form"
import { useReactHookFormStore } from "@/store/questionStore"

export const ReactHookFormSenior = () => (
  <QuestionViewer
    questions={reactHookFormSeniorQuestions}
    courseStore={useReactHookFormStore}
    level="senior"
    coursePath="react-hook-form"
  />
)
