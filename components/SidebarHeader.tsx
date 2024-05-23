"use client"

import useSidebar from "@/store/sidebar"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { login } from "@/actions"

const SidebarHeader = () => {
  const toggleSidebar = useSidebar(state => state.toggleSidebar)
  return (
    <div className="p-4 flex items-center justify-between md:hidden border-b h-[73px] main-layout">
      <h1 className="text-primary-blue text-[1.5rem] font-semibold">
        elaf-dashboard
      </h1>

      <Button variant={"ghost"} onClick={toggleSidebar} className="md:hidden">
        <Menu size={25} color="#6b7b93" />
      </Button>
      <form>
        <Button formAction={login}>login</Button>
      </form>
    </div>
  )
}
export default SidebarHeader
