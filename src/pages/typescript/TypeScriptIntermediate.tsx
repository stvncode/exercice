import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { typescriptIntermediateQuestions } from "@/lib/questions/typescript"
import { useTypeScriptStore } from "@/store/questionStore"

export const TypeScriptIntermediate = () => (
  <QuestionViewer
    questions={typescriptIntermediateQuestions}
    courseStore={useTypeScriptStore}
    level="intermediate"
    coursePath="typescript"
  />
)
