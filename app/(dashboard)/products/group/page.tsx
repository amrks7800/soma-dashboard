import { deleteGroupByID } from "@/actions"
import AddGroupModal from "@/components/AddGroupModal"
import DataPagination from "@/components/DataPagination"
import DeleteButton from "@/components/DeleteButton"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { getAllProductsGroup } from "@/fetchers"
import { Trash } from "lucide-react"
import { Suspense } from "react"

const ProductsGroups = async () => {
  const groups = await getAllProductsGroup()

  return (
    <Tile className="p-0 flow mb-5">
      <header className="flex items-center justify-between flex-wrap p-5">
        <h2 className="text-lg font-[600]">المجموعات</h2>

        <AddGroupModal />
      </header>
      <DataTable headers={["اسم المجموعة", "تاريخ الانشاء", ""]}>
        {groups.data?.result.map(group => (
          <TableRow key={group.id}>
            <TableCell className="py-4 px-6">{group.name}</TableCell>
            <TableCell className="py-4 px-6">{group.createdAt}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <form
                  action={async () => {
                    "use server"

                    await deleteGroupByID(group.id)
                  }}
                >
                  <DeleteButton />
                </form>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <div className="p-5 text-end">
        <Suspense fallback="loading...">
          <DataPagination />
        </Suspense>
      </div>
    </Tile>
  )
}
export default ProductsGroups
