import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { shadcnUIExercises } from "@/lib/questions/shadcn-ui"

export const ShadcnUIExercises = () => (
  <ExercisesViewer exercises={shadcnUIExercises} />
)
