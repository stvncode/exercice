import { Calendar, SidebarGroup, SidebarGroupContent } from "chronoxis"

export function DatePicker() {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          className="h-full w-full flex [&_[role=gridcell].bg-accent]:bg-primary [&_[role=gridcell].bg-accent]:text-primary-foreground [&_[role=gridcell]]:w-[33px]"
          classNames={{
            months:
              "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 -space-x-2 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            head_row: "",
            row: "w-full mt-2",
          }}
        />
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
