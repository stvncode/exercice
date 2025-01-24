import {
  initialFavorites,
  initialOthers,
  sidebarItems,
} from "@/components/ui/layout/sidebar/data"
import { getGreetingsNow } from "@/lib/string"
import { useGlobalStore } from "@/store/globalStore"
import { Button, TypeWriter } from "chronoxis"
import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const [isGreetingDone, setGreetingDone] = useState(false)
  const { account } = useGlobalStore()
  const navigate = useNavigate()

  return (
    <div className="flex-1 space-y-16 p-8 pt-6">
      <div className="flex flex-col items-center space-y-12 text-center">
        <div className="text-3xl font-bold tracking-tight">
          <TypeWriter
            text={`${getGreetingsNow()} ${
              account.username
            }! Welcome to your React Learning Journey`}
            delay={50}
          />
        </div>

        <div className="max-w-2xl text-lg text-gray-600">
          <TypeWriter
            text="Master React ecosystem through hands-on exercises and real-world examples. From basics to advanced patterns, explore components, hooks, state management, and more."
            delay={30}
            onComplete={() => setGreetingDone(true)}
          />
        </div>

        {isGreetingDone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="space-y-12 flex flex-col items-center w-full"
          >
            <motion.div
              className="rounded-lg border py-12 p-8 bg-gray-50 w-full max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-8">Course Curriculum</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-blue-600 text-lg">
                    Core Technologies
                  </h3>
                  <div className="space-y-4">
                    {initialFavorites.map((name) => {
                      const item = sidebarItems.find((i) => i.name === name)
                      return (
                        <div
                          key={name}
                          className="flex items-center w-full justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item?.emoji}
                          <span>{name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-blue-600 text-lg">
                    Extended Ecosystem
                  </h3>
                  <div className="space-y-4">
                    {initialOthers.map((name) => {
                      const item = sidebarItems.find((i) => i.name === name)
                      return (
                        <div
                          key={name}
                          className="flex items-center w-full justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item?.emoji}
                          <span>{name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-blue-600 text-lg">
                    What You'll Build
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>🚀 Interactive Components</p>
                    <p>📝 Form Validations</p>
                    <p>🔐 Authentication System</p>
                    <p>📊 Data Visualization</p>
                    <p>🎯 Custom Hooks</p>
                    <p>🧪 Testing Suites</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center max-w-2xl space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-medium">Ready to start?</h3>
              <p className="text-gray-600">
                Begin your journey with React fundamentals and progress through
                advanced concepts at your own pace.
              </p>
              <div className="flex items-center space-x-4 pt-10">
                <Button onClick={() => navigate("/react")}>
                  <img src="/react.svg" alt="react" className="w-4 mr-2" />
                  Start Learning React
                </Button>
                <Button variant="outline">
                  <img src="/github.svg" alt="react" className="w-4 mr-2" />
                  View source code
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
