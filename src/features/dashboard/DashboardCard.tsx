import { Card, CardContent, CardHeader, CardTitle } from "chronoxis"

interface DashboardCardProps {
  total: number | string
  text: string
  change?: string
  icon: React.ReactNode
}

export const DashboardCard = ({
  total,
  text,
  change,
  icon,
}: DashboardCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{text}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{total}</div>
      {change && <p className="text-xs text-muted-foreground">{change}</p>}
    </CardContent>
  </Card>
)
