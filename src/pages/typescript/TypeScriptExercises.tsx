import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { typescriptExercises } from "@/lib/questions/typescript"

export const TypeScriptExercises = () => (
  <ExercisesViewer exercises={typescriptExercises} />
)
