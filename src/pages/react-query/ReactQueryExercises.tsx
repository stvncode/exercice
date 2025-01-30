import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { reactQueryExercises } from "@/lib/questions/react-query"

export const ReactQueryExercises = () => (
  <ExercisesViewer exercises={reactQueryExercises} />
)
