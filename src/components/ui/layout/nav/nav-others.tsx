import { ArrowUpRight, Link, MoreHorizontal, StarOff } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Flex,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "chronoxis"
import { ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export function NavOthers({
  others,
}: {
  others: {
    name: string
    url: string
    emoji: string | ReactNode
  }[]
}) {
  const { isMobile } = useSidebar()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Others</SidebarGroupLabel>
      <SidebarMenu>
        {others.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.url}
              onClick={() => navigate(item.url)}
            >
              <Flex align="center" className="gap-2 cursor-pointer">
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </Flex>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Link size={14} className="text-muted-foreground" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowUpRight size={14} className="text-muted-foreground" />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <StarOff size={14} className="text-muted-foreground" />
                  <span>Remove from Favorites</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
