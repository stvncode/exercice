import { firstLetterToUpperCase } from "@/lib/string"
import { Button } from "chronoxis"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export const CompletionMessage = ({
  level,
  coursePath,
}: {
  level: "junior" | "intermediate" | "senior"
  coursePath: string
}) => {
  const navigate = useNavigate()

  if (level === "senior") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-4 py-8"
      >
        <h3 className="text-2xl font-bold">🎉 Congratulations!</h3>
        <p>
          You've completed all the {firstLetterToUpperCase(coursePath)} courses
          for today.
        </p>
        <Button onClick={() => navigate("/dashboard")}>
          Return to Dashboard
        </Button>
      </motion.div>
    )
  }

  const nextLevel = level === "junior" ? "intermediate" : "senior"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-4 py-8"
    >
      <h3 className="text-2xl font-bold">
        🎉 Level {firstLetterToUpperCase(level)} Complete for today!
      </h3>
      <p>Ready to tackle the {nextLevel} level?</p>
      <div className="space-x-4">
        <Button onClick={() => navigate(`/${coursePath}/${nextLevel}`)}>
          Continue to {nextLevel}
        </Button>
        <Button variant="outline" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </Button>
      </div>
    </motion.div>
  )
}
