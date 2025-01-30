import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { reactExercises } from "@/lib/questions/react/exercices"

export const ReactExercises = () => (
  <ExercisesViewer exercises={reactExercises} />
)
