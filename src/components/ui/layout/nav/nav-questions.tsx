import { Question } from "@/features/layout/QuestionViewer"
import { firstLetterToUpperCase } from "@/lib/string"
import { CourseStore } from "@/store/questionStore"
import { CheckCircle2, Circle, XCircle } from "lucide-react"
import { useLocation } from "react-router-dom"

export const QuestionsNav = ({
  questions,
  courseStore,
}: {
  questions: Question[]
  courseStore: () => CourseStore
}) => {
  const { pathname } = useLocation()
  const { getTodayProgress } = courseStore()

  const level = pathname.split("/")[2] as "junior" | "intermediate" | "senior"
  const todayProgress = getTodayProgress(
    level as "junior" | "intermediate" | "senior"
  )

  return (
    <div className="space-y-4">
      <h3 className="font-semibold px-4">
        {firstLetterToUpperCase(level)} Questions
      </h3>
      <div className="space-y-1">
        {questions.map((_, i) => {
          const answer = todayProgress?.answers[i]
          const status = answer
            ? answer.isCorrect
              ? "correct"
              : "incorrect"
            : "pending"

          return (
            <div
              key={i}
              className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-md "
            >
              {status === "correct" && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
              {status === "incorrect" && (
                <XCircle className="w-4 h-4 text-red-500" />
              )}
              {status === "pending" && (
                <Circle className="w-4 h-4 text-gray-300" />
              )}
              <span>Question {i + 1}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
