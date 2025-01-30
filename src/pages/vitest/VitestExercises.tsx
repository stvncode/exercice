import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { vitestExercises } from "@/lib/questions/vitest"

export const VitestExercises = () => (
  <ExercisesViewer exercises={vitestExercises} />
)
