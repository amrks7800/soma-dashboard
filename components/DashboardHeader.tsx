import { UserCircle } from "lucide-react"
import { Button } from "./ui/button"
import ThemeSwitch from "./ThemeSwitch"
import { login } from "@/actions"

const DashboardHeader = () => {
  return (
    <header className="flex items-center py-4 container border-b justify-end gap-4 h-[73px] main-layout">
      <ThemeSwitch />
      <form>
        <Button formAction={login}>login</Button>
      </form>
      <Button className="bg-primary-blue text-white">
        <div className="flex items-center justify-center gap-3">
          <UserCircle color="#6b7b93" size={20} />
          <p>الحساب</p>
        </div>
      </Button>
    </header>
  )
}
export default DashboardHeader
