"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const UserSearchForm = () => {
  return (
    <form className="flex items-center gap-4">
      <Input
        className="border border-light-gray focus-visible:ring-0 dark:bg-transparent focus:border-accent-indigo py-2 px-4 outline-0 transition-all focus:outline-4 outline-indigo-500"
        placeholder="أدخل اسم العميل"
      />
      <Button className="border border-primary-green bg-transparent text-primary-green hover:bg-primary-green hover:text-foreground">
        بحث
      </Button>
    </form>
  )
}
export default UserSearchForm
