export const KeyboardShortcuts = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">
        Essential keyboard shortcuts to navigate the application.
      </p>
    </div>

    <div className="space-y-4">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Help Modal</span>
          </div>
          <span className="flex items-center">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>H
            </kbd>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Settings Modal</span>
          </div>
          <span className="flex items-center">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>S
            </kbd>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Search Modal</span>
          </div>
          <span className="flex items-center">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </span>
        </div>
      </div>
    </div>

    <div className="text-sm text-muted-foreground">
      Note: On Windows and Linux, use Ctrl instead of ⌘
    </div>
  </div>
)
