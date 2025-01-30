import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
} from "chronoxis"

export const Progress = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <h3 className="text-lg font-medium">Progress Tracking</h3>
      <p className="text-sm text-muted-foreground">
        Manage how your learning progress is tracked and displayed.
      </p>
    </div>

    <div className="space-y-4">
      {/* Progress Display */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Progress Display</label>
        <Select defaultValue="detailed">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select display type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="simple">Simple (Percentage)</SelectItem>
            <SelectItem value="detailed">Detailed Statistics</SelectItem>
            <SelectItem value="calendar">Calendar View</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Learning Goals */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Daily Learning Goal</label>
        <div className="flex items-center gap-4">
          <Slider
            defaultValue={[5]}
            max={20}
            min={1}
            step={1}
            className="w-[60%]"
          />
          <span className="text-sm text-muted-foreground">5 exercises</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Streak Tracking</label>
          <p className="text-sm text-muted-foreground">
            Track daily learning streaks
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Weekly Report</label>
          <p className="text-sm text-muted-foreground">
            Receive progress summary emails
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Export Data */}
      <div className="pt-4">
        <Button variant="outline" className="w-full">
          Export Progress Data
        </Button>
      </div>

      <div className="pt-2">
        <Button variant="outline" className="w-full">
          Reset Progress Statistics
        </Button>
      </div>
    </div>
  </div>
)
