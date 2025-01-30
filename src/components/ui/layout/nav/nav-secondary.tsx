import { MessageCircleQuestion, Settings2 } from "lucide-react"
import React, { useState } from "react"

import { useSettings } from "@/store/settingStore"
import {
  Flex,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "chronoxis"
import { HelpModal } from "../../modals/HelpModal"
import { SettingsModal } from "../../modals/SettingsModal"

export function NavSecondary({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const [openHelp, setOpenHelp] = useState(false)
  const { isOpen, toggleOpen } = useSettings()

  return (
    <>
      <SidebarGroup {...props}>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Flex
                  align="center"
                  className="gap-2 cursor-pointer"
                  onClick={toggleOpen}
                >
                  <Settings2 />
                  <span>Settings</span>
                </Flex>
              </SidebarMenuButton>
              <SidebarMenuAction className="font-medium text-muted-foreground">
                <span className="text-lg mt-0.5">⌘</span>
                <span className="text-sm ml-1">S</span>
              </SidebarMenuAction>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Flex
                  align="center"
                  className="gap-2 cursor-pointer"
                  onClick={() => setOpenHelp(true)}
                >
                  <MessageCircleQuestion />
                  <span>Help</span>
                </Flex>
              </SidebarMenuButton>
              <SidebarMenuAction className="font-medium text-muted-foreground">
                <span className="text-lg mt-0.5">⌘</span>
                <span className="text-sm ml-1">H</span>
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SettingsModal openState={[isOpen, toggleOpen]} />
      <HelpModal openState={[openHelp, setOpenHelp]} />
    </>
  )
}
