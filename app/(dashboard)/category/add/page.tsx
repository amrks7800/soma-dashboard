import { deleteCategoryByID } from "@/actions"
import AddCategoryModal from "@/components/AddCategoryModal"
import DataPagination from "@/components/DataPagination"
import DeleteCategoryButton from "@/components/DeleteCategoryButton"
import EditCategoryForm from "@/components/EditCategoryForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { getAllCategories } from "@/fetchers"
import { revalidateTag } from "next/cache"
import { FC } from "react"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const AddCategoryPage: FC<Props> = async ({ searchParams }) => {
  const categories = await getAllCategories(Number(searchParams.page))

  return (
    <Tile className="flow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-[600]">الاقسام</h2>
        <AddCategoryModal />
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
                <EditCategoryForm category={category} />
                <form
                  action={async () => {
                    "use server"
                    deleteCategoryByID(category.id)
                    revalidateTag("category")
                  }}
                >
                  <DeleteCategoryButton />
                </form>
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
