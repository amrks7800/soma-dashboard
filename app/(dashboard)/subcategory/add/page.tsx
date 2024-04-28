import DataPagination from "@/components/DataPagination"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { categoriesData, sectionsData } from "@/constants"
import { Edit, Trash } from "lucide-react"

const AddSubcategoryPage = () => {
  return (
    <Tile className="flow">
      <h2 className="text-lg font-[600]">الفئات</h2>
      <DataTable
        headers={[
          "رقم الفئة",
          "اسم القسم",
          "اسم الفئة",
          "اسم الفئة بالعربي",
          "حاله الفئة",
          "",
        ]}
      >
        {categoriesData.map(category => (
          <TableRow key={category.id}>
            <TableCell className="py-4 px-6">{category.id}</TableCell>
            <TableCell className="py-4 px-6">
              {sectionsData[category.id - 1].nameAr}
            </TableCell>
            <TableCell className="py-4 px-6">{category.nameAr}</TableCell>
            <TableCell className="py-4 px-6">{category.nameEn}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
                {category.available ? "متاح" : "غير متاح"}
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
export default AddSubcategoryPage
