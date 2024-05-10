import DataPagination from "@/components/DataPagination"
import GroupForm from "@/components/GroupForm"
import Modal from "@/components/Modal"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { groupsData } from "@/constants"
import { Edit, Trash } from "lucide-react"
import Link from "next/link"

const ProductsGroups = () => {
  return (
    <Tile className="p-0 flow mb-5">
      <header className="flex items-center justify-between flex-wrap p-5">
        <h2 className="text-lg font-[600]">المجموعات</h2>

        <Modal
          triggerText={"اضافة مجموعة"}
          triggerProps={{
            className:
              "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
          }}
        >
          <GroupForm />
        </Modal>
      </header>
      <DataTable headers={["اسم المجموعة", "وصف المجموعة", ""]}>
        {groupsData.map(group => (
          <TableRow key={group.name}>
            <TableCell className="py-4 px-6">{group.name}</TableCell>
            <TableCell className="py-4 px-6">{group.description}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Modal
                  triggerText={<Edit size={15} />}
                  triggerProps={{
                    className:
                      "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                  }}
                >
                  <GroupForm group={group} />
                </Modal>
                <Button
                  className="aspect-square w-[35px] h-[35px]"
                  variant={"outline"}
                  title="حذف المجموعة"
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
      <div className="p-5 text-end">
        <DataPagination />
      </div>
    </Tile>
  )
}
export default ProductsGroups
