import * as React from "react"

import { NavFavorites } from "@/components/ui/layout/nav/nav-favorites"
import { NavMain } from "@/components/ui/layout/nav/nav-main"
import { NavOthers } from "@/components/ui/layout/nav/nav-others"
import { NavSecondary } from "@/components/ui/layout/nav/nav-secondary"
import { useFavorites, useOthers } from "@/store/globalStore"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "chronoxis"
import { useNavigate } from "react-router-dom"
import { sidebarItems } from "./data"

export const SidebarLeft = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const navigate = useNavigate()

  const favorites = useFavorites()
  const others = useOthers()

  const favoriteItems = sidebarItems
    .filter((item) => favorites.includes(item.name))
    .sort((a, b) => a.name.localeCompare(b.name))
  const otherItems = sidebarItems
    .filter((item) => others.includes(item.name))
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <img
          src="/logo.svg"
          alt="logo"
          className="scale-75 cursor-pointer mb-2"
          onClick={() => navigate("/")}
        />
        <NavMain />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={favoriteItems} />
        <NavOthers others={otherItems} />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
