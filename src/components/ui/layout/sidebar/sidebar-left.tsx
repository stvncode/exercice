import * as React from "react"

import { NavFavorites } from "@/components/ui/layout/nav/nav-favorites"
import { NavMain } from "@/components/ui/layout/nav/nav-main"
import { NavOthers } from "@/components/ui/layout/nav/nav-others"
import { NavSecondary } from "@/components/ui/layout/nav/nav-secondary"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "chronoxis"
import { useNavigate } from "react-router-dom"
import { data } from "./data"

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate()

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <img
          src="/Logo.svg"
          alt="logo"
          className="scale-75 cursor-pointer mb-2"
          onClick={() => navigate("/")}
        />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavOthers others={data.others} />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
