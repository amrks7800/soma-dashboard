"use client"

import { FC } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type Props = {
  placeholder: string
}

const SearchForm: FC<Props> = ({ placeholder }) => {
  return (
    <form className="flex items-center gap-4">
      <Input
        className="border border-light-gray focus-visible:ring-0 dark:bg-transparent focus:border-accent-indigo py-2 px-4 outline-0 transition-all focus:outline-4 outline-indigo-500"
        placeholder={placeholder}
      />
      <Button className="border border-primary-green bg-transparent text-primary-green hover:bg-primary-green hover:text-white">
        بحث
      </Button>
    </form>
  )
}
export default SearchForm
