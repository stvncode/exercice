import { DashboardCard } from "@/features/dashboard/DashboardCard"
import { DashboardDateRangePicker } from "@/features/dashboard/DashboardDateRangePicker"
import { DashboardOverview } from "@/features/dashboard/DashboardOverview"
import { DashboardWork } from "@/features/dashboard/DashboardWork"
import { getSuccessAndFailures } from "@/features/dashboard/utils"
import { useDateRangeStore } from "@/store/dateRangeStore"
import {
  useFramerStore,
  usePlaywrightStore,
  useReactHookFormStore,
  useReactQueryStore,
  useReactRouterDomStore,
  useReactStore,
  useShadcnUIStore,
  useTailwindStore,
  useTSBeltStore,
  useTypeScriptStore,
  useVitestStore,
  useZodStore,
  useZustandStore,
} from "@/store/questionStore"
import { Card, CardContent, CardHeader, CardTitle } from "chronoxis"
import { BookOpen, CheckCircle2, Flame, XCircle } from "lucide-react"

export const Dashboard = () => {
  const stores = [
    useReactStore(),
    useReactHookFormStore(),
    useReactQueryStore(),
    useReactRouterDomStore(),
    useShadcnUIStore(),
    useTailwindStore(),
    useTypeScriptStore(),
    useVitestStore(),
    useFramerStore(),
    usePlaywrightStore(),
    useTSBeltStore(),
    useZodStore(),
    useZustandStore(),
  ]
  const levels = ["junior", "intermediate", "senior"] as const
  const dateRange = useDateRangeStore((state) => state.dateRange)

  const { success, failures } = getSuccessAndFailures(stores, dateRange)

  const getFilteredTotal = () => {
    return stores.reduce((acc, store) => {
      const filteredDates = Object.entries(store.progress).filter(([date]) => {
        const progressDate = new Date(date)
        return (
          (!dateRange?.from || progressDate >= dateRange.from) &&
          (!dateRange?.to || progressDate <= dateRange.to)
        )
      })

      return (
        acc +
        filteredDates.reduce(
          (sum, [, levelData]) =>
            sum +
            levels.reduce(
              (levelSum, level) =>
                levelSum + Object.keys(levelData[level]?.answers || {}).length,
              0
            ),
          0
        )
      )
    }, 0)
  }

  return (
    <div className="flex-1 space-y-12 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <DashboardDateRangePicker />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          text="Questions Completed"
          total={getFilteredTotal()}
          change="In selected period"
          icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          text="Best Streak"
          total={Math.max(...stores.map((store) => store.getStreak()))}
          change="All time record"
          icon={<Flame className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          text="Correct Answers"
          total={success}
          change="Questions answered correctly"
          icon={<CheckCircle2 className="h-4 w-4 text-green-500" />}
        />
        <DashboardCard
          text="Incorrect Answers"
          total={failures}
          change="Questions answered incorrectly"
          icon={<XCircle className="h-4 w-4 text-red-500" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardOverview stores={stores} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Learning Streaks</CardTitle>
          </CardHeader>
          <CardContent>
            <DashboardWork />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
