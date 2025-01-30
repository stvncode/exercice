import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { reactRouterDomExercises } from "@/lib/questions/react-router-dom/exercices"

export const ReactRouterDomExercises = () => (
  <ExercisesViewer exercises={reactRouterDomExercises} />
)
