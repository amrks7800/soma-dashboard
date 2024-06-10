"use client"

import { FC, useState } from "react"
import SubCategoryForm from "./SubCategoryForm"
import { Edit } from "lucide-react"
import Modal from "./Modal"
import { Category, Module } from "@/types"

type Props = {
  subCategory: Module
  category: Category | undefined
  categories: Category[]
}

const EditSubCategoryModal: FC<Props> = ({
  categories,
  category,
  subCategory,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <Modal
      open={open}
      triggerText={<Edit size={15} />}
      triggerProps={{
        className:
          "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
        onClick: () => setOpen(true),
      }}
    >
      <SubCategoryForm
        categories={categories || []}
        category={subCategory}
        categoryName={category?.categoryNameAr}
        closeModal={() => setOpen(false)}
      />
    </Modal>
  )
}
export default EditSubCategoryModal
