import { CourseStore } from "@/store/questionStore"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

export const getSuccessAndFailures = (
  stores: CourseStore[],
  dateRange?: DateRange
) =>
  stores.reduce(
    (acc: { success: number; failures: number }, store) => {
      Object.entries(store.progress)
        .filter(([date]) => {
          const progressDate = new Date(date)
          return (
            (!dateRange?.from || progressDate >= dateRange.from) &&
            (!dateRange?.to || progressDate <= dateRange.to)
          )
        })
        .forEach(([, levelData]) => {
          ;(["junior", "intermediate", "senior"] as const).forEach((level) => {
            Object.values(levelData[level]?.answers || {}).forEach(
              ({ isCorrect }) => (isCorrect ? acc.success++ : acc.failures++)
            )
          })
        })
      return acc
    },
    { success: 0, failures: 0 }
  )

export const getSuccessAndFailuresPerDay = (
  stores: CourseStore[],
  date: Date
) => {
  const dateStr = format(date, "yyyy-MM-dd")
  return stores.reduce(
    (acc: { success: number; failures: number }, store) => {
      const dayData = store.progress[dateStr]
      if (dayData) {
        ;(["junior", "intermediate", "senior"] as const).forEach((level) => {
          Object.values(dayData[level]?.answers || {}).forEach(
            ({ isCorrect }) => (isCorrect ? acc.success++ : acc.failures++)
          )
        })
      }
      return acc
    },
    { success: 0, failures: 0 }
  )
}
