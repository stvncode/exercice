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
import { Avatar, AvatarFallback } from "chronoxis"

export const DashboardWork = () => {
  const stores = [
    { store: useReactStore(), name: "React" },
    { store: useReactRouterDomStore(), name: "React Router Dom" },
    { store: useReactHookFormStore(), name: "React Hook Form" },
    { store: useReactQueryStore(), name: "React Query" },
    { store: useShadcnUIStore(), name: "Shadcn UI" },
    { store: useTailwindStore(), name: "Tailwind CSS" },
    { store: useTypeScriptStore(), name: "TypeScript" },
    { store: useVitestStore(), name: "Vitest" },
    { store: useFramerStore(), name: "Framer" },
    { store: usePlaywrightStore(), name: "Playwright" },
    { store: useTSBeltStore(), name: "TS Belt" },
    { store: useZodStore(), name: "Zod" },
    { store: useZustandStore(), name: "Zustand" },
  ]

  const dateRange = useDateRangeStore((state) => state.dateRange)
  const levels = ["junior", "intermediate", "senior"] as const

  const coursesProgress = stores
    .map(({ store, name }) => {
      const questionsInPeriod = Object.entries(store.progress)
        .filter(([date]) => {
          const progressDate = new Date(date)
          return (
            (!dateRange?.from || progressDate >= dateRange.from) &&
            (!dateRange?.to || progressDate <= dateRange.to)
          )
        })
        .reduce(
          (total: number, [, levelData]) =>
            total +
            levels.reduce(
              (sum: number, level) =>
                sum + Object.keys(levelData[level]?.answers || {}).length,
              0
            ),
          0
        )

      return {
        name,
        questionsCompleted: questionsInPeriod,
        streak: store.getStreak(),
      }
    })
    .sort((a, b) => b.questionsCompleted - a.questionsCompleted)

  if (
    !coursesProgress.length ||
    coursesProgress.every((c) => c.questionsCompleted === 0)
  ) {
    return (
      <div className="flex items-center justify-center h-[350px]">
        <div className="text-center text-muted-foreground">
          No activity in selected period
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 max-h-80 overflow-auto">
      {coursesProgress.map(({ name, questionsCompleted, streak }) => (
        <div className="flex items-center" key={name}>
          <Avatar>
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">
              {questionsCompleted} questions completed
            </p>
          </div>
          <div className="ml-auto font-medium">{streak} day streak</div>
        </div>
      ))}
    </div>
  )
}
