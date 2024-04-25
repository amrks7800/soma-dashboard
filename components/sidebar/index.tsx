"use client"

import { cn } from "@/lib/utils"
import { SidebarItem } from "@/types"
import { FC, HTMLAttributes } from "react"
import SidebarLink from "./SidebarLink"
import SidebarMenuLink from "./SidebarMenuLink"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"
import useSidebar from "@/store/sidebar"

type Props = {
  sidebarProps?: HTMLAttributes<HTMLDivElement>
  title?: string
  items: SidebarItem[]
}

const Sidebar: FC<Props> = ({ sidebarProps, title, items }) => {
  const isOpen = useSidebar(state => state.isOpen)

  return (
    <div
      {...sidebarProps}
      className={cn(
        `overflow-auto shadow-md origin-top transition-all duration-700 ${
          isOpen ? "max-md:h-screen" : "max-md:h-0"
        } overflow-hidden dark:border-e`,
        sidebarProps?.className
      )}
    >
      <div className="grid">
        <h1 className="text-primary-blue text-[1.5rem] font-semibold p-4 mb-[4px]">
          {title}
        </h1>
        <ul className="grid">
          {items.map((item, index) =>
            item.menu ? (
              <SidebarMenuLink
                item={item}
                key={index}
                menuItems={item.menuItems}
              />
            ) : (
              <SidebarLink item={item} key={index} />
            )
          )}
        </ul>

        <Button className="bg-light-gray text-slate-900 rounded-none mt-8 hover:bg-light-blue">
          <div className="flex items-center gap-3">
            <LogOut size={20} color="#6b7b93" />
            <p>تسجيل الخروج</p>
          </div>
        </Button>
      </div>
    </div>
  )
}
export default Sidebar
