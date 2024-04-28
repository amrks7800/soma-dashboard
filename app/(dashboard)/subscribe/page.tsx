import DataPagination from "@/components/DataPagination"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { subscribersData } from "@/constants"
import { Trash } from "lucide-react"

const SubscribersPage = () => {
  return (
    <Tile className="flow">
      <h2 className="text-lg font-[600]">قائمة المشتركين</h2>
      <DataTable headers={["رقم الطلب", "البريد الالكتروني", ""]}>
        {subscribersData.map(subscriber => (
          <TableRow key={subscriber.id}>
            <TableCell className="py-4 px-6">{subscriber.id}</TableCell>
            <TableCell className="py-4 px-6">{subscriber.email}</TableCell>
            <TableCell className="py-4 px-6">
              <Button
                className="aspect-square w-[50px]"
                variant={"outline"}
                title="حذف الرسالة"
              >
                <Trash size={15} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <div className="text-end">
        <DataPagination />
      </div>
    </Tile>
  )
}
export default SubscribersPage
