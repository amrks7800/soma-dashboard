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

export type TUser = {
  id: number
  firstName: string
  lastName: string
  email: string
  profileCreationDate: string
}

export type FilterOption = {
  id: number
  title: string
}

export type Color = {
  nameAr: string
  hex: string
  id: number
}
