import { Module } from "@/types"
import { TableCell, TableRow } from "./ui/table"
import { FC } from "react"
import SubCategoryForm from "./SubCategoryForm"
import { Edit, Trash } from "lucide-react"
import Modal from "./Modal"
import {
  getAllCategories,
  getCategoryByID,
  getUserDetailsByID,
} from "@/fetchers"
import { Button } from "./ui/button"
import EditSubCategoryModal from "./EditSubCategoryModal"

type Props = {
  subCategory: Module
  idx: number
}

const SubCategoryRow: FC<Props> = async ({ subCategory, idx }) => {
  const user = await getUserDetailsByID(subCategory.createdBy)
  const category = await getCategoryByID(subCategory.categoryId)

  const categories = await getAllCategories(1)

  return (
    <TableRow key={subCategory.id}>
      <TableCell className="py-4 px-6">{idx + 1}</TableCell>
      <TableCell className="py-4 px-6">
        {category.data?.result.categoryNameAr}
      </TableCell>
      <TableCell className="py-4 px-6">{subCategory.productName}</TableCell>
      <TableCell className="py-4 px-6">{user.data?.result.name}</TableCell>
      <TableCell className="py-4 px-6">
        <div className="flex items-center gap-2">
          <EditSubCategoryModal
            categories={categories.data?.result || []}
            category={category.data?.result}
            subCategory={subCategory}
          />
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
  )
}
export default SubCategoryRow
