import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { zustandExercises } from "@/lib/questions/zustand"

export const ZustandExercises = () => (
  <ExercisesViewer exercises={zustandExercises} />
)
