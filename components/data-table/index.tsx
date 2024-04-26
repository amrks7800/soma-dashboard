import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { FC, ReactNode } from "react"

type Props = {
  headers: ReactNode[]
  children: ReactNode
  tableHeadRowClassName?: string
  tableBodyRowClassName?: string
  tableBodyCellClassName?: string
  tableHeadCellClassName?: string
}

const DataTable: FC<Props> = ({
  children,
  headers,
  tableHeadCellClassName,
  tableHeadRowClassName,
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px]">
        <Table className="text-[#525f7f]">
          <TableHeader>
            <TableRow
              className={cn(
                tableHeadRowClassName,
                "bg-light-blue dark:bg-primary-dark border-y border-[#e7eaf0]"
              )}
            >
              {headers.map((header, index) => (
                <TableHead
                  className={cn(tableHeadCellClassName, "py-4 px-6 text-start")}
                  key={index}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </div>
    </div>
  )
}
export default DataTable
