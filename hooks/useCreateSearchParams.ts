import { createSearchParam } from "@/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"

const useCreateSearchParams = (queryName: string) => {
  const searchParam = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [query, setQuery] = useState("")

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const params = createSearchParam(queryName, `${query}`, searchParam)

    router.push(pathname + "?" + params)
  }

  return {
    query,
    setQuery,
    createParam: handleSearch,
  }
}
export default useCreateSearchParams
