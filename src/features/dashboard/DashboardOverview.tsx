import { useDateRangeStore } from "@/store/dateRangeStore"
import { useReactStore } from "@/store/questionStore"
import { ChartConfig, ChartContainer, ChartTooltip, Flex } from "chronoxis"
import { eachDayOfInterval, format } from "date-fns"
import { useMemo } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export const DashboardOverview = ({
  success,
  failures,
}: {
  success: number
  failures: number
}) => {
  const stores = [useReactStore()]
  const levels = ["junior", "intermediate", "senior"] as const
  const dateRange = useDateRangeStore((state) => state.dateRange)

  const data = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return []

    const dates = eachDayOfInterval({
      start: dateRange.from,
      end: dateRange.to,
    })

    return dates.map((date) => {
      const dateStr = format(date, "yyyy-MM-dd")

      const total = stores.reduce((acc: number, store) => {
        if (!store.progress[dateStr]) return acc
        return (
          acc +
          levels.reduce(
            (levelSum: number, level) =>
              levelSum +
              Object.keys(store.progress[dateStr][level]?.answers || {}).length,
            0
          )
        )
      }, 0)

      return {
        name: format(date, "MMM dd"),
        total,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores, dateRange])

  if (!data.length || data.every((day) => day.total === 0)) {
    return (
      <div className="flex items-center justify-center h-[350px]">
        <p className="text-muted-foreground">
          No data available for selected period
        </p>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickFormatter={(value) => `${value} Q`}
            dataKey={"total"}
          />

          <CartesianGrid strokeDasharray="3" />

          <ChartTooltip
            cursor={false}
            content={({ active, payload }) => {
              console.log("active", active)
              console.log("payload", payload)
              if (
                !active ||
                !payload ||
                payload.length === 0 ||
                payload[0].value === 0
              ) {
                return null // Do not render tooltip if no valid data
              }

              const { value } = payload[0]
              console.log("value", value)

              return (
                <Flex
                  direction="column"
                  className="gap-2 bg-background border border-border rounded-md p-2"
                >
                  <Flex align="center" className="gap-2">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#30a46c" }}
                    />
                    <span>Correct:</span>
                    <span className="font-medium">{success}</span>
                  </Flex>
                  <Flex align="center" className="gap-2">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#e54d2e" }}
                    />
                    <span>Incorrect:</span>
                    <span className="font-medium">{failures}</span>
                  </Flex>
                </Flex>
              )
            }}
          />
          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
