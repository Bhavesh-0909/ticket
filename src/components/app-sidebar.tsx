"use client"

import * as React from "react"
import {
  Clapperboard,
  Volleyball,
  Tv,
  Tickets,
  TvMinimal,
  Play,
  HeartHandshake,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Movies",
      url: "/movies",
      icon: Clapperboard,
      isActive: false,
    },
    {
        title: "Stream",
        url: "#",
        icon: Tv,
        isActive: false,
    },
    {
        title: "Events",
        url: "#",
        icon: Tickets,
        isActive: false,
    },
    {
        title: "Sports",
        url: "#",
        icon: Volleyball,
        isActive: false,
    },
    {
        title: "Plays",
        url: "#",
        icon: Play,
        isActive: false,
    },
    {
        title: "Activities",
        url: "#",
        icon: HeartHandshake,
        isActive: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="sidebar" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
            <TvMinimal className="size-4"/>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              Book Tickets
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
