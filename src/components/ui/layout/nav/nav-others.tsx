import { ArrowUpRight, Link, MoreHorizontal, Star } from "lucide-react"

import { useGlobalStore } from "@/store/globalStore"
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
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"

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
  const { moveToFavorite } = useGlobalStore()

  const currentOthersList = useGlobalStore((state) => state.others)

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
                <DropdownMenuItem
                  onClick={() =>
                    navigator.clipboard.writeText(
                      import.meta.env.VITE_URL + item.url
                    )
                  }
                >
                  <Link size={14} className="text-muted-foreground" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RouterLink
                    to={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex align="center" className="gap-2">
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground -ml-0.5"
                      />
                      <span>Open in New Tab</span>
                    </Flex>
                  </RouterLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    const globalIndex = currentOthersList.indexOf(item.name)
                    if (globalIndex !== -1) {
                      moveToFavorite(globalIndex)
                    }
                  }}
                >
                  <Star size={14} className="text-muted-foreground" />
                  <span>Move to Favorites</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
