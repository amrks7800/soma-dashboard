"use client"

import { FC, FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { usePathname, useSearchParams } from "next/navigation"
import { createSearchParam } from "@/utils"
import { useRouter } from "next/navigation"

type Props = {
  placeholder: string
  queryName?: string
}

const SearchForm: FC<Props> = ({ placeholder, queryName = "name" }) => {
  const searchParam = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [query, setQuery] = useState("")

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const params = createSearchParam(queryName, `${query}`, searchParam)

    router.push(pathname + "?" + params)
  }
  return (
    <form className="flex items-center gap-4" onSubmit={handleSearch}>
      <Input
        className="border border-light-gray focus-visible:ring-0 dark:bg-transparent focus:border-accent-indigo py-2 px-4 outline-0 transition-all focus:outline-4 outline-indigo-500"
        placeholder={placeholder}
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      <Button className="border border-primary-green bg-transparent text-primary-green hover:bg-primary-green hover:text-white">
        بحث
      </Button>
    </form>
  )
}
export default SearchForm
