import { sidebarItems } from "@/components/ui/layout/sidebar/data"
import { SidebarLeft } from "@/components/ui/layout/sidebar/sidebar-left"
import { SidebarRight } from "@/components/ui/layout/sidebar/sidebar-right"
import { A, O, pipe } from "@mobily/ts-belt"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  Separator,
  SidebarInset,
  SidebarTrigger,
} from "chronoxis"
import { Outlet, useLocation } from "react-router-dom"
import { match } from "ts-pattern"

export const Layout = () => {
  const { pathname } = useLocation()

  const title = match(pathname)
    .with("/", () => "Home")
    .with("/dashboard", () => "Dashboard")
    .with("/inbox", () => "Inbox")
    .otherwise(() =>
      pipe(
        sidebarItems,
        A.filter((item) => pathname.includes(item.url)),
        A.head,
        O.map((item) => item.name),
        O.getWithDefault("Home" as string)
      )
    )

  return (
    <>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-1 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    {title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
      <SidebarRight />
    </>
  )
}
