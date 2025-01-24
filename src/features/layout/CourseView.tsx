import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "chronoxis"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface CourseViewProps {
  title: string
  icon: React.ReactNode
}

export const CourseView = ({ title, icon }: CourseViewProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex-1 space-y-12 p-8 pt-6">
      <div className="flex items-center space-x-4 mb-8">
        {icon}
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 xl:grid-cols-2 gap-6"
      >
        <motion.div variants={item}>
          <Card className="h-64 hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Practice Questions</CardTitle>
              <CardDescription>
                Test your knowledge with carefully crafted questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Card
                  className="p-4 text-center hover:bg-gray-50 overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate("junior")
                  }}
                >
                  <div className="text-lg font-medium truncate">Junior</div>
                  <div className="text-sm text-gray-500 truncate">
                    Fundamentals
                  </div>
                </Card>
                <Card
                  className="p-4 text-center hover:bg-gray-50 overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate("intermediate")
                  }}
                >
                  <div className="text-lg font-medium truncate">
                    Intermediate
                  </div>
                  <div className="text-sm text-gray-500 truncate">Advanced</div>
                </Card>
                <Card
                  className="p-4 text-center hover:bg-gray-50 overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate("senior")
                  }}
                >
                  <div className="text-lg font-medium truncate">Senior</div>
                  <div className="text-sm text-gray-500 truncate">Expert</div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card
            className="h-64 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate("exercises")}
          >
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Hands-on Exercises</CardTitle>
              <CardDescription>
                Build real-world projects to reinforce your learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4">
                <div className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-green-500 rounded-full" />
                  <div>Build interactive components</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <div>Implement complex features</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-purple-500 rounded-full" />
                  <div>Master best practices</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
