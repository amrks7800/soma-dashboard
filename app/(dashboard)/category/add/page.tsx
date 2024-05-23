import { addCategory } from "@/actions"
import CategoryForm from "@/components/CategoryForm"
import DataPagination from "@/components/DataPagination"
import Modal from "@/components/Modal"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { getAllCategories } from "@/fetchers"
import { Edit, Trash } from "lucide-react"

const AddCategoryPage = async () => {
  const categories = await getAllCategories()

  console.log(categories?.data?.result[0].logoUrl)

  return (
    <Tile className="flow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-[600]">الاقسام</h2>
        <Modal
          triggerText={"اضافة قسم"}
          triggerProps={{
            className:
              "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
          }}
        >
          <CategoryForm formAction={addCategory} />
        </Modal>
      </header>
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
        {categories?.data?.result.map((category, idx) => (
          <TableRow key={category.id}>
            <TableCell className="py-4 px-6">{idx + 1}</TableCell>
            <TableCell className="py-4 px-6">
              {category.categoryNameAr}
            </TableCell>
            <TableCell className="py-4 px-6">
              {category.categoryNameEn}
            </TableCell>
            <TableCell
              title={category.description}
              className="line-clamp-1"
              dir="ltr"
            >
              {category.description}
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
                {category.id ? "متاح" : "غير متاح"}
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
                  <CategoryForm category={category} />
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
export default AddCategoryPage
