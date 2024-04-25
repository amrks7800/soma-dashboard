import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarMenuItem } from "@/types"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

type Props = {
  triggerText: string
  items: SidebarMenuItem[] | undefined
  className?: string
}

const Dropdown: FC<Props> = ({ triggerText, items, className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <p>{triggerText}</p>
          <ChevronDown size={15} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={className}>
        {items?.map(({ link, icon, text }, index) => (
          <DropdownMenuItem key={index}>
            <Link href={link} className="flex items-center gap-4 p-3 w-full">
              {icon}
              <p className={` text-sm`}>{text}</p>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Dropdown
