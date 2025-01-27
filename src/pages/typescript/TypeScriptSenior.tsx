import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { typescriptSeniorQuestions } from "@/lib/questions/typescript"
import { useTypeScriptStore } from "@/store/questionStore"

export const TypeScriptSenior = () => (
  <QuestionViewer
    questions={typescriptSeniorQuestions}
    courseStore={useTypeScriptStore}
    level="senior"
    coursePath="typescript"
  />
)
