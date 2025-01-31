import { editorStyle } from "@/lib/syntaxStylesheet"
import { useLearning } from "@/store/globalStore"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

interface ExercisesViewerProps {
  id: number
  title: string
  objective: string | null
  codeStarter: string | null
  solution: string
}

export const ExercisesViewer = ({
  exercises,
}: {
  exercises: ExercisesViewerProps[]
}) => {
  const { editorTheme } = useLearning()

  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({})

  const toggleSolution = (id: number) => {
    setShowSolution((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="p-8 space-y-12">
      {exercises.map((exercise) => (
        <div key={exercise.id} className="border-b pb-6">
          <h2 className="text-2xl font-bold mb-4">{exercise.title}</h2>
          <p className="text-gray-600 mb-4">{exercise.objective}</p>

          {exercise.codeStarter && (
            <SyntaxHighlighter
              language="javascript"
              style={editorStyle(editorTheme)}
              className="rounded-lg"
            >
              {exercise.codeStarter.trim()}
            </SyntaxHighlighter>
          )}

          <button
            className="text-blue-600 underline mt-4"
            onClick={() => toggleSolution(exercise.id)}
          >
            {showSolution[exercise.id] ? "Hide Solution" : "Show Solution"}
          </button>

          {showSolution[exercise.id] && (
            <SyntaxHighlighter
              language="javascript"
              style={editorStyle(editorTheme)}
              className="rounded mt-4 bg-gray-100"
            >
              {exercise.solution.trim()}
            </SyntaxHighlighter>
          )}
        </div>
      ))}
    </div>
  )
}
