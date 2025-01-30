import { Links } from "@/lib/links/type"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Flex,
} from "chronoxis"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
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
  links?: Links
}

export const CourseView = ({ title, icon, links }: CourseViewProps) => {
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
                  className="p-4 text-center hover:bg-gray-50 dark:hover:text-background overflow-hidden"
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
                  className="p-4 text-center hover:bg-gray-50 dark:hover:text-background overflow-hidden"
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
                  className="p-4 text-center hover:bg-gray-50 dark:hover:text-background overflow-hidden"
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

        <motion.div variants={item} className="xl:col-span-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Learning Resources</CardTitle>
              <CardDescription>
                Curated list of high-quality learning materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Flex direction="column" className="gap-6">
                {/* Docs */}
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Docs</h3>
                  <div className="space-y-3">
                    <a
                      href={links?.docs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" group flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                    >
                      <div className="space-y-1">
                        <span className="font-medium">{links?.docs.name}</span>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="font-medium">{links?.docs.url}</span>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 mb-0.5" />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Books Section */}
                {links?.books && (
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Books</h3>
                    <div className="space-y-3">
                      {links.books.map((book) => (
                        <a
                          key={book.url}
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-20 group flex items-start justify-between rounded-lg border p-3 hover:bg-muted"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{book.title}</span>
                              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              By {book.author}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Section */}
                {links?.articles && (
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Articles</h3>
                    <div className="space-y-3">
                      {links.articles.map((course) => (
                        <a
                          key={course}
                          href={course}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" group flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{course}</span>
                              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 mb-0.5" />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Youtube Channels */}
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">
                    Youtube Videos/Channels
                  </h3>
                  <div className="space-y-3">
                    {links?.youtubeChannels.map((channel) => (
                      <a
                        key={channel.name}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" group flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                      >
                        <div className="space-y-1">
                          <span className="font-medium">{channel.name}</span>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="font-medium">{channel.url}</span>
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 mb-0.5" />
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Flex>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
