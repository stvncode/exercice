import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { reactHookFormExercises } from "@/lib/questions/react-hook-form"

export const ReactHookFormExercises = () => (
  <ExercisesViewer exercises={reactHookFormExercises} />
)
