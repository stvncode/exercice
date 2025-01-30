import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "chronoxis"

export const Difficulty = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <h3 className="text-lg font-medium">Difficulty Settings</h3>
      <p className="text-sm text-muted-foreground">
        Adjust the challenge level of exercises and content.
      </p>
    </div>

    <div className="space-y-4">
      {/* Default Difficulty */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Default Difficulty</label>
        <Select defaultValue="intermediate">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Adaptive Difficulty</label>
          <p className="text-sm text-muted-foreground">
            Adjust based on performance
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Show Advanced Concepts</label>
          <p className="text-sm text-muted-foreground">
            Include expert-level topics
          </p>
        </div>
        <Switch />
      </div>

      {/* Challenge Mode */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Time Challenge Mode</label>
          <p className="text-sm text-muted-foreground">
            Add time limits to exercises
          </p>
        </div>
        <Switch />
      </div>
    </div>
  </div>
)
