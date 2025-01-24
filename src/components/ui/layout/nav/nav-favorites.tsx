import { ArrowUpRight, Link, MoreHorizontal, StarOff } from "lucide-react"

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
import { useLocation, useNavigate } from "react-router-dom"
import { SidebarItem } from "../sidebar/types"

export function NavFavorites({ favorites }: { favorites: SidebarItem[] }) {
  const { isMobile } = useSidebar()
  const location = useLocation()
  const navigate = useNavigate()
  const { moveToOther, favorites: currentFavoritesList } = useGlobalStore()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Favorites</SidebarGroupLabel>
      <SidebarMenu>
        {favorites.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === item.url}
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
                  <ArrowUpRight size={14} className="text-muted-foreground" />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    const globalIndex = currentFavoritesList.indexOf(item.name)
                    if (globalIndex !== -1) {
                      moveToOther(globalIndex)
                    }
                  }}
                >
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
