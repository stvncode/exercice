import { CompletionMessage } from "@/components/ui/CompletionMessage"
import { CourseStore } from "@/store/questionStore"
import { Button, Progress } from "chronoxis"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Trophy, XCircle } from "lucide-react"
import { useEffect, useState } from "react"

export interface Question {
  id: number
  title: string
  code?: string | null
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuestionViewerProps {
  questions: Question[]
  courseStore: () => CourseStore
  level: "junior" | "intermediate" | "senior"
  coursePath: string
}

export const QuestionViewer = ({
  questions,
  courseStore,
  level,
  coursePath,
}: QuestionViewerProps) => {
  const { updateAnswer, getTodayProgress, getStreak } = courseStore()
  const todayProgress = getTodayProgress(level)

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const answeredCount = todayProgress
      ? Object.keys(todayProgress.answers).length
      : 0
    return Math.min(answeredCount, questions.length - 1)
  })
  const [showExplanation, setShowExplanation] = useState(false)
  const [finish, setFinish] = useState(false)

  const handleAnswer = (questionId: number, answerIndex: number) => {
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer
    updateAnswer(level, questionId, answerIndex, isCorrect)
    setShowExplanation(true)
  }

  const isCorrect = (questionId: number) =>
    todayProgress?.answers[questionId]?.isCorrect

  const completionProgress = todayProgress
    ? (Object.keys(todayProgress.answers).length / questions.length) * 100
    : 0

  const handleNext = () => {
    if (currentQuestion >= questions.length - 1) {
      setFinish(true)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setShowExplanation(false)
    }
  }

  const streak = getStreak()

  useEffect(() => {
    if (
      todayProgress &&
      Object.keys(todayProgress.answers).length === questions.length
    ) {
      setFinish(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (finish) {
    return <CompletionMessage coursePath={coursePath} level={level} />
  }

  return (
    <div className="space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-medium">Today's Progress</h3>
          <div className="flex items-center space-x-1 text-yellow-600">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">{streak} day streak!</span>
          </div>
        </div>
        <span className="text-sm text-gray-500">
          {todayProgress ? Object.keys(todayProgress.answers).length : 0}/
          {questions.length} completed
        </span>
      </div>

      <Progress value={completionProgress} className="h-2" />

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Question {currentQuestion + 1}
          </h2>
          <p>{questions[currentQuestion].title}</p>
          {questions[currentQuestion].code && (
            <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
              <code>{questions[currentQuestion].code}</code>
            </pre>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant={
                todayProgress?.answers[currentQuestion]?.answer === index
                  ? todayProgress.answers[currentQuestion].isCorrect
                    ? "success"
                    : "destructive"
                  : "outline"
              }
              className="justify-start text-left h- min-h-20 p-4"
              onClick={() => handleAnswer(currentQuestion, index)}
              disabled={showExplanation}
            >
              {option}
            </Button>
          ))}
        </div>

        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg border bg-gray-50 space-y-2"
          >
            <div className="flex items-center space-x-2">
              {isCorrect(currentQuestion) ? (
                <>
                  <CheckCircle2 className="text-green-500" />
                  <span className="font-medium">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-500" />
                  <span className="font-medium">Incorrect</span>
                </>
              )}
            </div>
            <p>{questions[currentQuestion].explanation}</p>
            <div className="flex justify-between items-center pt-4">
              <div />
              <Button onClick={handleNext}>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
