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

export const Accessibility = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <h3 className="text-lg font-medium">Accessibility Settings</h3>
      <p className="text-sm text-muted-foreground">
        Customize your learning experience to better suit your needs.
      </p>
    </div>

    <div className="space-y-4">
      {/* Text Size */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Text Size</label>
        <div className="flex items-center gap-4">
          <Slider
            defaultValue={[16]}
            max={24}
            min={12}
            step={1}
            className="w-[60%]"
          />
          <span className="text-sm text-muted-foreground">16px</span>
        </div>
      </div>

      {/* Line Height */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Line Height</label>
        <Select defaultValue="normal">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select line height" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="compact">Compact</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="relaxed">Relaxed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Color Contrast */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Color Contrast</label>
        <Select defaultValue="normal">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select contrast" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="high">High Contrast</SelectItem>
            <SelectItem value="highest">Maximum Contrast</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Animation Settings */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Reduce Motion</label>
          <p className="text-sm text-muted-foreground">
            Minimize animations and transitions
          </p>
        </div>
        <Switch />
      </div>

      {/* Screen Reader Optimization */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Screen Reader Mode</label>
          <p className="text-sm text-muted-foreground">
            Optimize content for screen readers
          </p>
        </div>
        <Switch />
      </div>

      {/* Focus Indicators */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">
            Enhanced Focus Indicators
          </label>
          <p className="text-sm text-muted-foreground">
            Make keyboard focus more visible
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Code Block Settings */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Monospace Font</label>
          <p className="text-sm text-muted-foreground">
            Use monospace font for code blocks
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Reading Guide */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Reading Guide</label>
          <p className="text-sm text-muted-foreground">
            Show reading guide line on hover
          </p>
        </div>
        <Switch />
      </div>

      {/* Audio Feedback */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium">Audio Feedback</label>
          <p className="text-sm text-muted-foreground">
            Play sounds for important actions
          </p>
        </div>
        <Switch />
      </div>

      {/* Reset Button */}
      <div className="pt-4">
        <Button variant="outline" className="w-full">
          Reset Accessibility Settings
        </Button>
      </div>
    </div>
  </div>
)
