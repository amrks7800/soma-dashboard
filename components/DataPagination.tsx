import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function DataPagination() {
  return (
    <Pagination className="inline" dir="ltr">
      <div className="text-primary-text rounded-lg border border-light-grey w-fit">
        <PaginationContent>
          <PaginationItem className="border-e border-light-grey hover:bg-light-blue grid place-content-center">
            <PaginationPrevious href="" />
          </PaginationItem>
          <PaginationItem className="border-e border-light-grey hover:bg-light-blue grid place-content-center">
            <PaginationLink href="">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="border-e border-light-grey hover:bg-light-blue grid place-content-center">
            <PaginationLink href="" isActive className="border-none">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="border-e border-light-grey hover:bg-light-blue grid place-content-center">
            <PaginationLink href="">3</PaginationLink>
          </PaginationItem>
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
