import { MessageCircleQuestion, Settings2 } from "lucide-react"
import React, { useState } from "react"

import {
  Flex,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "chronoxis"
import { HelpModal } from "../../modals/HelpModal"
import { SettingsModal } from "../../modals/SettingsModal"

export function NavSecondary({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const [openHelp, setOpenHelp] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

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
                  onClick={() => setOpenSettings(true)}
                >
                  <Settings2 />
                  <span>Settings</span>
                </Flex>
              </SidebarMenuButton>
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
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SettingsModal openState={[openSettings, setOpenSettings]} />
      <HelpModal openState={[openHelp, setOpenHelp]} />
    </>
  )
}
