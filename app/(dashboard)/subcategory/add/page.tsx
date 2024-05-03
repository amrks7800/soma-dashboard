import DataPagination from "@/components/DataPagination"
import Modal from "@/components/Modal"
import SubCategoryForm from "@/components/SubCategoryForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { categoriesData, sectionsData } from "@/constants"
import { Edit, Trash } from "lucide-react"

const AddSubcategoryPage = () => {
  return (
    <Tile className="flow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-[600]">الفئات</h2>
        <Modal
          triggerText={"اضافة فئة"}
          triggerProps={{
            className:
              "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
          }}
        >
          <SubCategoryForm />
        </Modal>
      </header>
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
                <Modal
                  triggerText={<Edit size={15} />}
                  triggerProps={{
                    className:
                      "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                  }}
                >
                  <SubCategoryForm category={category} />
                </Modal>
                <Button
                  className="aspect-square w-[35px] h-[35px]"
                  variant={"outline"}
                  title="حذف المنتج"
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
export default AddSubcategoryPage
