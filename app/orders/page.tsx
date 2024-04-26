import DataPagination from "@/components/DataPagination"
import OrderFilter from "@/components/OrderFilter"
import SearchForm from "@/components/SearchForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { orderSlug, ordersData } from "@/constants"
import { FC } from "react"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const OrdersPage: FC<Props> = ({ searchParams }) => {
  return (
    <Tile className="flow">
      <header className="flex items-center justify-between flex-wrap">
        <h2 className="text-lg font-[600]">الطلبات</h2>
        <SearchForm placeholder="أدخل رقم الطلب" />
      </header>
      <OrderFilter />
      <h2 className="text-lg font-[600]">
        {orderSlug[Number(searchParams.active)]}
      </h2>
      <DataTable
        headers={[
          "رقم الطلب",
          "الاسم",
          "تاريخ الطلب",
          "اجمالي التكلفة",
          "تكلفة الشحن",
          "العنوان",
          "حالة الطلب",
        ]}
      >
        {ordersData.map(order => (
          <TableRow key={order.orderNumber}>
            <TableCell className="py-4 px-6">{order.orderNumber}</TableCell>
            <TableCell className="py-4 px-6">{order.userName}</TableCell>
            <TableCell className="py-4 px-6">{order.orderDate}</TableCell>
            <TableCell className="py-4 px-6">${order.totalCost}</TableCell>
            <TableCell className="py-4 px-6">${order.deliveryCost}</TableCell>
            <TableCell className="py-4 px-6">{order.address}</TableCell>
            <TableCell className="py-4 px-6">{order.orderStatus}</TableCell>
          </TableRow>
        ))}
      </DataTable>
      <div className="text-start">
        <DataPagination />
      </div>
    </Tile>
  )
}
export default OrdersPage
