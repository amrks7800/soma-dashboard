import { deleteCouponByID } from "@/actions"
import AddCouponModal from "@/components/AddCouponModal"
import DataPagination from "@/components/DataPagination"
import DeleteButton from "@/components/DeleteButton"
import EditCouponModal from "@/components/EditCouponModal"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { getAllCoupons } from "@/fetchers"
import { Suspense } from "react"

export const revalidate = 0
export const dynamic = "force-dynamic"

const CouponsPage = async () => {
  const coupons = await getAllCoupons()

  console.log(coupons.data?.result)
  return (
    <Tile className="flow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-[600]">قائمة الكوبونات</h2>
        <AddCouponModal />
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
        {coupons.data?.result.map((coupon, idx) => (
          <TableRow key={coupon.id}>
            <TableCell className="py-4 px-6">{idx + 1}</TableCell>
            <TableCell className="py-4 px-6">{coupon.code}</TableCell>
            <TableCell className="py-4 px-6">
              {coupon.voucherTypeId === 1 ? "شحن مجاني" : "خصم"}
            </TableCell>
            <TableCell className="py-4 px-6">
              {coupon.discountPrecentage || 0}%
            </TableCell>
            <TableCell className="py-4 px-6">{coupon.expireDate}</TableCell>
            <TableCell className="py-4 px-6">{coupon.userCount}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-3">
                <EditCouponModal coupon={coupon} />

                <form
                  action={async () => {
                    "use server"
                    await deleteCouponByID(coupon.id)
                  }}
                >
                  <DeleteButton />
                </form>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <div className="text-end">
        <Suspense fallback="loading...">
          <DataPagination />
        </Suspense>
      </div>
    </Tile>
  )
}
export default CouponsPage
