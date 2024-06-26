"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import useCreateSearchParams from "@/hooks/useCreateSearchParams"
import { range } from "@/lib/utils"

type Props = {
  pagesCount?: number
}

export default function DataPagination({ pagesCount = 1 }: Props) {
  const { setQuery } = useCreateSearchParams("page")

  const pagesArray = range(pagesCount)

  return (
    <Pagination className="inline" dir="ltr">
      <div className="text-primary-text rounded-lg border border-light-grey w-fit">
        <PaginationContent>
          <PaginationItem className="border-e border-light-grey hover:bg-light-blue grid place-content-center">
            <PaginationPrevious href="" />
          </PaginationItem>
          {pagesArray.map(item => (
            <PaginationItem
              className="border-e border-light-grey hover:bg-light-blue grid place-content-center"
              key={item}
            >
              <PaginationLink
                href=""
                onClick={() => {
                  setQuery(`${item}`)
                }}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem className="border-e border-light-grey hover:bg-light-blue grid place-content-center">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="" />
          </PaginationItem>
        </PaginationContent>
      </div>
    </Pagination>
  )
}
