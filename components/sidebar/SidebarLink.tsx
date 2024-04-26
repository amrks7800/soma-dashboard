"use client"

import { SidebarItem } from "@/types"
import Link from "next/link"
import { FC, ReactNode, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import useSidebar from "@/store/sidebar"

type Props = {
  item: SidebarItem
}

const SidebarLink: FC<Props> = ({ item: { text, link, icon } }) => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = useMemo(() => pathname === link, [pathname])

  const toggleSidebar = useSidebar(state => state.toggleSidebar)

  return (
    <li
      className={`flex items-center font-medium transition-colors 
    ${
      isActive
        ? "bg-primary-blue"
        : "hover:bg-light-blue hover:text-accent-indigo"
    }`}
      onClick={() => {
        toggleSidebar()
        router.push(link)
      }}
    >
      <Link href="" className="flex items-center gap-4 p-3 w-full">
        {icon}
        <p className={` text-sm`}>{text}</p>
      </Link>
    </li>
  )
}
export default SidebarLink
