import { SidebarLeft } from "@/components/ui/layout/sidebar/sidebar-left"
import { SidebarRight } from "@/components/ui/layout/sidebar/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarInset,
  SidebarTrigger,
} from "chronoxis"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { match } from "ts-pattern"

export const Layout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const breadcrumbs = match(pathname)
    .with("/", () => [{ name: "Home", path: "/" }])
    .with("/dashboard", () => [
      { name: "Home", path: "/" },
      { name: "Dashboard", path: "/dashboard" },
    ])
    .with("/inbox", () => [
      { name: "Home", path: "/" },
      { name: "Inbox", path: "/inbox" },
    ])
    .otherwise(() => {
      const [category, level] = pathname.split("/").filter(Boolean)

      return level
        ? [
            { name: "Home", path: "/" },
            { name: category, path: `/${category}` },
            { name: level, path: `/${category}/${level}` },
          ]
        : [
            { name: "Home", path: "/" },
            { name: category, path: `/${category}` },
          ]
    })

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
                {breadcrumbs.map((crumb, index) => (
                  <Fragment key={crumb.path}>
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink onClick={() => navigate(crumb.path)}>
                          {crumb.name}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </Fragment>
                ))}
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
