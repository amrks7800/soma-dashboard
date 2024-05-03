import CategoryForm from "@/components/CategoryForm"
import DataPagination from "@/components/DataPagination"
import Modal from "@/components/Modal"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { sectionsData } from "@/constants"
import { Edit, Trash } from "lucide-react"

const AddCategoryPage = () => {
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
          <CategoryForm />
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
                <Modal
                  triggerText={<Edit size={15} />}
                  triggerProps={{
                    className:
                      "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                  }}
                >
                  <CategoryForm category={section} />
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
