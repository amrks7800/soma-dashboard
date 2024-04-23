"use client"

import { SidebarItem } from "@/types"
import Link from "next/link"
import { FC, useMemo } from "react"
import { cairo } from "@/CairoFont"
import { usePathname } from "next/navigation"

type Props = {
  item: SidebarItem
}

const SidebarLink: FC<Props> = ({ item: { text, link, icon } }) => {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === link, [pathname])
  return (
    <li
      className={`flex items-center p-4 font-medium ${
        cairo.className
      } transition-colors 
    ${isActive ? "bg-primary-blue" : "hover:bg-light-blue"}`}
    >
      <Link href={link} className="flex items-center gap-4">
        {icon}
        <p
          className={`${isActive ? "text-slate-800" : "text-gray-400"} text-sm`}
        >
          {text}
        </p>
      </Link>
    </li>
  )
}
export default SidebarLink
