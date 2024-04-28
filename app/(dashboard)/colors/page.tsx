import Modal from "@/components/Modal"
import Tile from "@/components/Tile"
import ColorForm from "@/components/colorForm/indx"
import DataTable from "@/components/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { colorsData } from "@/constants"
import { Edit } from "lucide-react"

const ColorsPage = () => {
  return (
    <Tile className="flow">
      <header className="flex items-center justify-between flex-wrap">
        <h2 className="text-lg font-[600]">الألوان</h2>
        <Modal
          triggerText={"اضافة لون"}
          triggerProps={{
            className:
              "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
          }}
        >
          <ColorForm />
        </Modal>
      </header>

      <DataTable headers={["#", "اسم اللون", "كود اللون", "اللون", ""]}>
        {colorsData.map(color => (
          <TableRow key={color.id}>
            <TableCell className="py-4 px-6">{color.id}</TableCell>
            <TableCell className="py-4 px-6">{color.nameAr}</TableCell>
            <TableCell className="py-4 px-6">{color.hex}</TableCell>
            <TableCell className="py-4 px-6">
              <div
                className="w-8 aspect-square rounded-full"
                style={{
                  background: color.hex,
                }}
              ></div>
            </TableCell>
            <TableCell className="py-4 px-6">
              <Modal
                triggerText={<Edit size={15} />}
                triggerProps={{
                  className:
                    "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                }}
              >
                <ColorForm color={color} />
              </Modal>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    </Tile>
  )
}
export default ColorsPage
