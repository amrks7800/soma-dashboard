"use client"

import { SidebarItem, SidebarMenuItem } from "@/types"
import { FC, useMemo } from "react"
import { usePathname } from "next/navigation"
import Dropdown from "../dropDown"

type Props = {
  item: SidebarItem
  menuItems: SidebarMenuItem[] | undefined
}

const SidebarMenuLink: FC<Props> = ({
  item: { text, link, icon },
  menuItems,
}) => {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname.includes(link), [pathname])

  return (
    <li
      className={`flex p-3 gap-4 items-center font-medium transition-colors 
    ${
      isActive
        ? "bg-primary-blue"
        : "hover:bg-light-blue hover:text-accent-indigo"
    }`}
    >
      {icon}
      <Dropdown items={menuItems} triggerText={text} />
    </li>
  )
}
export default SidebarMenuLink
