import { SidebarItem } from "@/types"
import { HomeIcon, Truck } from "lucide-react"

export const dashboardLinks: SidebarItem[] = [
  {
    text: "لوحة التحكم",
    icon: <HomeIcon size={18} />,
    link: "/",
  },
  {
    text: "الطلبات",
    icon: <Truck size={18} />,
    link: "/orders",
  },
]
