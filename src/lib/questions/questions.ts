import { Question } from "@/features/layout/QuestionViewer"
import { reactIntermediateQuestions } from "./react/intermediate"
import { reactJuniorQuestions } from "./react/junior"
import { reactSeniorQuestions } from "./react/senior"

export const questionMap: Record<string, Question[]> = {
  react_junior: reactJuniorQuestions,
  react_intermediate: reactIntermediateQuestions,
  react_senior: reactSeniorQuestions,
  // Add other course questions similarly
}
