import DataPagination from "@/components/DataPagination"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { couponsData } from "@/constants"
import { Edit, Trash } from "lucide-react"

const CouponsPage = () => {
  return (
    <Tile className="flow">
      <h2 className="text-lg font-[600]">قائمة الكوبونات</h2>
      <DataTable
        headers={[
          "#",
          "كود الكوبون",
          "نوع الكوبون",
          "قيمه الخصم",
          "تاريخ الانتهاء",
          "عدد المستخدمين",
          "",
        ]}
      >
        {couponsData.map(coupon => (
          <TableRow key={coupon.id}>
            <TableCell className="py-4 px-6">{coupon.id}</TableCell>
            <TableCell className="py-4 px-6">{coupon.couponCode}</TableCell>
            <TableCell className="py-4 px-6">{coupon.couponType}</TableCell>
            <TableCell className="py-4 px-6">
              {coupon.discountValue || 0}%
            </TableCell>
            <TableCell className="py-4 px-6">{coupon.expiryDate}</TableCell>
            <TableCell className="py-4 px-6">{coupon.numberOfUsers}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-3">
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="تعديل الكوبون"
                >
                  <Edit size={15} />
                </Button>
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="حذف الكوبون"
                >
                  <Trash size={15} />
                </Button>
              </div>
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
export default CouponsPage
