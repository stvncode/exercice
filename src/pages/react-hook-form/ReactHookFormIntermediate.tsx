import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { reactHookFormIntermediateQuestions } from "@/lib/questions/react-hook-form"
import { useReactHookFormStore } from "@/store/questionStore"

export const ReactHookFormIntermediate = () => (
  <QuestionViewer
    questions={reactHookFormIntermediateQuestions}
    courseStore={useReactHookFormStore}
    level="intermediate"
    coursePath="react-hook-form"
  />
)
