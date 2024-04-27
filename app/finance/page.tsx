import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { accountsData } from "@/constants"

const FinancePage = () => {
  return (
    <Tile>
      <DataTable
        headers={[
          "#",
          "رقم الطلب",
          "تاريخ الطلب",
          "اسم المستخدم",
          "التكلفة",
          "خصم",
        ]}
      >
        {accountsData.map(order => (
          <TableRow key={order.id}>
            <TableCell className="py-4 px-6">{order.id}</TableCell>
            <TableCell className="py-4 px-6">{order.orderId}</TableCell>
            <TableCell className="py-4 px-6">{order.orderDate}</TableCell>
            <TableCell className="py-4 px-6">{order.username}</TableCell>
            <TableCell className="py-4 px-6">{order.totalCost}</TableCell>
            <TableCell className="py-4 px-6">{order.promocode}</TableCell>
          </TableRow>
        ))}
      </DataTable>
    </Tile>
  )
}
export default FinancePage
