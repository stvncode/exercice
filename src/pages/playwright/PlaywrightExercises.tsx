import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { playwrightExercises } from "@/lib/questions/playwright"

export const PlaywrightExercises = () => (
  <ExercisesViewer exercises={playwrightExercises} />
)
