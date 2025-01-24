import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface DailyProgress {
  answers: Record<
    number,
    {
      answer: number
      isCorrect: boolean
    }
  >
  timestamp: string
}

export interface CourseStore {
  progress: Record<
    string,
    {
      junior: DailyProgress
      intermediate: DailyProgress
      senior: DailyProgress
    }
  >
  updateAnswer: (
    level: "junior" | "intermediate" | "senior",
    questionId: number,
    answer: number,
    isCorrect: boolean
  ) => void
  getTodayProgress: (
    level: "junior" | "intermediate" | "senior"
  ) => DailyProgress | undefined
  resetToday: (level: "junior" | "intermediate" | "senior") => void
  getStreak: () => number
}

const getTodayKey = () => new Date().toISOString().split("T")[0]

export const createCourseStore = (courseName: string) =>
  create<CourseStore>()(
    persist(
      (set, get) => ({
        progress: {},
        updateAnswer: (level, questionId, answer, isCorrect) => {
          const today = getTodayKey()
          set((state) => ({
            progress: {
              ...state.progress,
              [today]: {
                ...state.progress[today],
                [level]: {
                  answers: {
                    ...(state.progress[today]?.[level]?.answers || {}),
                    [questionId]: { answer, isCorrect },
                  },
                  timestamp: new Date().toISOString(),
                },
              },
            },
          }))
        },
        getTodayProgress: (level) => {
          return get().progress[getTodayKey()]?.[level]
        },
        resetToday: (level) => {
          const today = getTodayKey()
          set((state) => ({
            progress: {
              ...state.progress,
              [today]: {
                ...state.progress[today],
                [level]: {
                  answers: {},
                  timestamp: new Date().toISOString(),
                },
              },
            },
          }))
        },
        getStreak: () => {
          const progress = get().progress
          let streak = 0
          const today = new Date()

          for (let i = 0; i < 365; i++) {
            const date = new Date(today)
            date.setDate(date.getDate() - i)
            const key = date.toISOString().split("T")[0]
            const dayProgress = progress[key]

            if (
              dayProgress &&
              (Object.keys(dayProgress.junior?.answers || {}).length > 0 ||
                Object.keys(dayProgress.intermediate?.answers || {}).length >
                  0 ||
                Object.keys(dayProgress.senior?.answers || {}).length > 0)
            ) {
              streak++
            } else {
              break
            }
          }
          return streak
        },
      }),
      {
        name: `${courseName}-progress`,
      }
    )
  )

// Stores
export const useReactStore = createCourseStore("react")
export const useTypeScriptStore = createCourseStore("typescript")
export const useTailwindStore = createCourseStore("tailwind")
