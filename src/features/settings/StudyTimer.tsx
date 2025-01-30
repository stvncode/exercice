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

export const StudyTimer = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <h3 className="text-lg font-medium">Study Timer Settings</h3>
      <p className="text-sm text-muted-foreground">
        Configure your study sessions and break intervals to maintain optimal
        focus and productivity.
      </p>
    </div>

    <div className="space-y-4">
      {/* Focus Duration */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Focus Duration</label>
        <div className="flex items-center gap-4">
          <Slider
            defaultValue={[25]}
            max={60}
            min={5}
            step={5}
            className="w-[60%]"
          />
          <span className="text-sm text-muted-foreground">25 minutes</span>
        </div>
      </div>

      {/* Break Duration */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Break Duration</label>
        <div className="flex items-center gap-4">
          <Slider
            defaultValue={[5]}
            max={30}
            min={1}
            step={1}
            className="w-[60%]"
          />
          <span className="text-sm text-muted-foreground">5 minutes</span>
        </div>
      </div>

      {/* Long Break Settings */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Long Break Duration</label>
        <div className="flex items-center gap-4">
          <Slider
            defaultValue={[15]}
            max={45}
            min={10}
            step={5}
            className="w-[60%]"
          />
          <span className="text-sm text-muted-foreground">15 minutes</span>
        </div>
      </div>

      {/* Sessions Before Long Break */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Sessions Before Long Break
        </label>
        <Select defaultValue="4">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select sessions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2 sessions</SelectItem>
            <SelectItem value="3">3 sessions</SelectItem>
            <SelectItem value="4">4 sessions</SelectItem>
            <SelectItem value="5">5 sessions</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Auto Start Breaks */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Auto-start Breaks</label>
          <p className="text-sm text-muted-foreground">
            Automatically start break timer when focus period ends
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Auto Start Focus */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Auto-start Focus</label>
          <p className="text-sm text-muted-foreground">
            Automatically start next focus period after break
          </p>
        </div>
        <Switch />
      </div>

      {/* Sound Notifications */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Sound Notifications</label>
          <p className="text-sm text-muted-foreground">
            Play sound when timer ends
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Reset Button */}
      <div className="pt-4">
        <Button variant="outline" className="w-full">
          Reset to Default Settings
        </Button>
      </div>
    </div>
  </div>
)
