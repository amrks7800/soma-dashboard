"use client"

import useSidebar from "@/store/sidebar"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

const SidebarHeader = () => {
  const toggleSidebar = useSidebar(state => state.toggleSidebar)
  return (
    <div className="p-4 flex items-center justify-between md:hidden border-b">
      <h1 className="text-primary-blue text-[1.5rem] font-semibold">
        elaf-dashboard
      </h1>

      <Button variant={"ghost"} onClick={toggleSidebar} className="md:hidden">
        <Menu size={25} color="#6b7b93" />
      </Button>
    </div>
  )
}
export default SidebarHeader
