import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { framerExercises } from "@/lib/questions/framer"

export const FramerExercises = () => (
  <ExercisesViewer exercises={framerExercises} />
)
