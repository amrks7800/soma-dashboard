import { deleteUserSubscriptionByID } from "@/actions"
import DataPagination from "@/components/DataPagination"
import DeleteButton from "@/components/DeleteButton"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { subscribersData } from "@/constants"
import { getAllUserSubscriptions } from "@/fetchers"
import { Trash } from "lucide-react"
import { Suspense } from "react"

const SubscribersPage = async () => {
  const subscriptions = await getAllUserSubscriptions()

  console.log(subscriptions.data?.result)

  return (
    <Tile className="flow">
      <h2 className="text-lg font-[600]">قائمة المشتركين</h2>
      <DataTable headers={["رقم الطلب", "البريد الالكتروني", ""]}>
        {subscriptions.data?.result.map((subscriber, idx) => (
          <TableRow key={subscriber.id}>
            <TableCell className="py-4 px-6">#{idx + 1}</TableCell>
            <TableCell className="py-4 px-6">{subscriber.email}</TableCell>
            <TableCell className="py-4 px-6">
              <form
                action={async () => {
                  "use server"
                  await deleteUserSubscriptionByID(subscriber.id)
                }}
              >
                <DeleteButton />
              </form>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      {/* <div className="text-end">
        <Suspense fallback="loading...">
          <DataPagination />
        </Suspense>
      </div> */}
    </Tile>
  )
}
export default SubscribersPage
