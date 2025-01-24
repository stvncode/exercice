import { CourseStore } from "@/store/questionStore"
import { DateRange } from "react-day-picker"

export const getSuccessAndFailures = (
  stores: CourseStore[],
  dateRange?: DateRange
) => {
  return stores.reduce(
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
              ({ isCorrect }) => {
                console.log(isCorrect)
                return isCorrect ? acc.success++ : acc.failures++
              }
            )
          })
        })
      return acc
    },
    { success: 0, failures: 0 }
  )
}
