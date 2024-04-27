import DataPagination from "@/components/DataPagination"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { sectionsData } from "@/constants"
import { Edit, Trash } from "lucide-react"

const AddCategoryPage = () => {
  return (
    <Tile className="flow">
      <h2 className="text-lg font-[600]">الاقسام</h2>
      <DataTable
        headers={[
          "رقم القسم",
          "اسم القسم",
          "اسم القسم بالعربي",
          "وصف الصورة",
          "حاله القسم",
          "",
        ]}
      >
        {sectionsData.map(section => (
          <TableRow key={section.id}>
            <TableCell className="py-4 px-6">{section.id}</TableCell>
            <TableCell className="py-4 px-6">{section.nameAr}</TableCell>
            <TableCell className="py-4 px-6">{section.nameEn}</TableCell>
            <TableCell
              title={section.description}
              className="line-clamp-1"
              dir="ltr"
            >
              {section.description}
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
                {section.available ? "متاح" : "غير متاح"}
              </div>
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="تعديل المنتج"
                >
                  <Edit size={15} />
                </Button>
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="حذف المنتج"
                >
                  <Trash size={15} />
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
export default AddCategoryPage
