import Sidebar from "@/components/sibebar/sidebar";
import Main from "@/components/main/main"
import { SiteHeader } from "@/components/site-header"
import RouteChangeLoader from "@/components/route-change-loader/routeChangeLoader";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import NavBarProductWrapper from '@/components/page-navbar-url/navbarproduct-wrapper'

export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--sidebar-width-icon": "40px", // mini sidebar
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <Sidebar variant="inset" collapsible="icon" />

      <SidebarInset>
        <SiteHeader />
        <Main className="p-0 mt-10">
          <RouteChangeLoader />
          <NavBarProductWrapper />
          {children}
        </Main>
      </SidebarInset>
    </SidebarProvider>
  )
}
