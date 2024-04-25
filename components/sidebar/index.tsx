import { cn } from "@/lib/utils"
import { SidebarItem } from "@/types"
import { FC, HTMLAttributes } from "react"
import SidebarLink from "./SidebarLink"
import SidebarMenuLink from "./SidebarMenuLink"

type Props = {
  sidebarProps?: HTMLAttributes<HTMLDivElement>
  title?: string
  items: SidebarItem[]
}

const Sidebar: FC<Props> = ({ sidebarProps, title, items }) => {
  return (
    <div
      {...sidebarProps}
      className={cn(
        "h-screen overflow-auto shadow-md",
        sidebarProps?.className
      )}
    >
      <div className="p-4 mb-4">
        {!!title && (
          <h1 className="text-primary-blue text-[1.5rem] font-semibold">
            {title}
          </h1>
        )}
      </div>
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
    </div>
  )
}
export default Sidebar
