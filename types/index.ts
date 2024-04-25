import { ReactNode } from "react"

export type SidebarItem = {
  text: string
  icon: ReactNode
  link: string
  menu: boolean
  menuItems?: SidebarMenuItem[]
  count?: boolean
}
export type SidebarMenuItem = {
  text: string
  icon: ReactNode
  link: string
}
