import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { tailwindCSSExercises } from "@/lib/questions/tailwind"

export const TailwindCSSExercises = () => (
  <ExercisesViewer exercises={tailwindCSSExercises} />
)
