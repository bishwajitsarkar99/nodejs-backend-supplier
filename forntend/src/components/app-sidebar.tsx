"use client"

import * as React from "react"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { data } from "@/config/sidebar" 

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className={twMerge(
      "bg-white bg-[repeating-linear-gradient(315deg,#80808010_0,#80808050_1px,transparent_0,transparent_60%)] bg-size-[5px_5px]",
      "mask-size-[50%] mask-image-[radial-gradient(ellipse_100%_100%_at_20%_20%,#000_80%,transparent_100%)]",
      "border border-[rgba(0,128,255,0.1)] rounded-sm",
      "shadow-md",
    )} collapsible="offcanvas" {...props}>
      <SidebarHeader className={twMerge(
        "bg-white bg-[repeating-linear-gradient(315deg,#80808010_0,#80808050_1px,transparent_0,transparent_60%)] bg-size-[5px_5px]",
        "mask-size-[50%] mask-image-[radial-gradient(ellipse_100%_100%_at_20%_20%,#000_80%,transparent_100%)]",
      )}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className={twMerge(
                "data[slot=sidebar-menu-button]:!p-1.5",
                "hover:bg-white hover:bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] hover:bg-size-[5px_5px] mask-size-[50%] hover:animate-[rotatedGrid_6s_linear_infinite]",
              )}
            >
              <Link href={data.dashboard.url}>
                <data.dashboard.icon />
                <span className={
                  twMerge(
                    "text-base font-semibold italic",
                    "text-sm md:text-xl lg:text-xl xl:text-xl",
                    "tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] bg-linear-to-r from-emerald-800 to-amber-600 text-transparent bg-clip-text"
                  )
                }>{data.dashboard.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenuButton 
          asChild
          tooltip={data.home.title}
          className={twMerge(
            "cursor-pointer",
          )}>
          <Link href={data.home.url} className={twMerge(
            "peer/menu-button flex w-full h-8 items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer",
            "hover:bg-white hover:bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] hover:bg-size-[5px_5px] mask-size-[50%] hover:animate-[rotatedGrid_6s_linear_infinite]",
          )}>
            <data.home.icon className="ms-0 size-4 text-gray-500 group-hover:text-orange-400 group-hover:transform-3d group-hover:transition group-hover:duration-200" />
            <span className={twMerge(
              "text-gray-700 font-medium group-hover:text-gray-800 group-hover:transform-3d group-hover:transition group-hover:duration-200",
              "group-data-[collapsible=icon]:hidden"
            )}>
              {data.home.title}
            </span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className={twMerge(
        "bg-white bg-[repeating-linear-gradient(315deg,#80808010_0,#80808050_1px,transparent_0,transparent_60%)] bg-size-[5px_5px]",
        "mask-size-[50%] mask-image-[radial-gradient(ellipse_100%_100%_at_20%_20%,#000_80%,transparent_100%)]",
      )}>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
