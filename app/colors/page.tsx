import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { colorsData } from "@/constants"
import { Edit } from "lucide-react"

const ColorsPage = () => {
  return (
    <Tile className="flow">
      <h2 className="text-lg font-[600]">الألوان</h2>
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
              <Button
                className="aspect-square w-[50px]"
                variant={"outline"}
                title="تعديل اللون"
              >
                <Edit size={15} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    </Tile>
  )
}
export default ColorsPage
