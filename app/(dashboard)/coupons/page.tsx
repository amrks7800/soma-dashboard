import CouponForm from "@/components/CouponForm"
import DataPagination from "@/components/DataPagination"
import Modal from "@/components/Modal"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { couponsData } from "@/constants"
import { Edit, Trash } from "lucide-react"

const CouponsPage = () => {
  return (
    <Tile className="flow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-[600]">قائمة الكوبونات</h2>
        <Modal
          triggerText={"اضافة كوبون"}
          triggerProps={{
            className:
              "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
          }}
        >
          <CouponForm />
        </Modal>
      </header>
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
                <Modal
                  triggerText={<Edit size={15} />}
                  triggerProps={{
                    className:
                      "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                  }}
                >
                  <CouponForm coupon={coupon} />
                </Modal>
                <Button
                  className="aspect-square w-[35px] h-[35px]"
                  variant={"outline"}
                  title="حذف الكوبون"
                >
                  <div>
                    <Trash size={15} />
                  </div>
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
