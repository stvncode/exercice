import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { tsBeltExercises } from "@/lib/questions/ts-belt"

export const TSBeltExercises = () => (
  <ExercisesViewer exercises={tsBeltExercises} />
)
