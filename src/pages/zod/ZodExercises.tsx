import { ExercisesViewer } from "@/features/layout/ExercisesViewer"
import { zodExercises } from "@/lib/questions/zod"

export const ZodExercises = () => <ExercisesViewer exercises={zodExercises} />
