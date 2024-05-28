import { createSearchParam } from "@/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const useCreateSearchParams = (queryName: string) => {
  const searchParam = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const params = createSearchParam(queryName, `${query}`, searchParam)
    router.push(pathname + "?" + params)
  }, [query])

  return {
    query,
    setQuery,
  }
}
export default useCreateSearchParams
