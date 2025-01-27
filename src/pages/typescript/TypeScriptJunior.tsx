import { QuestionViewer } from "@/features/layout/QuestionViewer"
import { typescriptJuniorQuestions } from "@/lib/questions/typescript"
import { useTypeScriptStore } from "@/store/questionStore"

export const TypeScriptJunior = () => (
  <QuestionViewer
    questions={typescriptJuniorQuestions}
    courseStore={useTypeScriptStore}
    level="junior"
    coursePath="typescript"
  />
)
