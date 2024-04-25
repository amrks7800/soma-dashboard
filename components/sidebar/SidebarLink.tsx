"use client"

import { SidebarItem } from "@/types"
import Link from "next/link"
import { FC, ReactNode, useMemo } from "react"
import { usePathname } from "next/navigation"

type Props = {
  item: SidebarItem
}

const SidebarLink: FC<Props> = ({ item: { text, link, icon } }) => {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === link, [pathname])

  return (
    <li
      className={`flex items-center font-medium transition-colors 
    ${
      isActive
        ? "bg-primary-blue"
        : "hover:bg-light-blue hover:text-accent-indigo"
    }`}
    >
      <Link href={link} className="flex items-center gap-4 p-3 w-full">
        {icon}
        <p className={` text-sm`}>{text}</p>
      </Link>
    </li>
  )
}
export default SidebarLink
