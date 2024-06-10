"use client"

import { FC, useState } from "react"
import Modal from "./Modal"
import SubCategoryForm from "./SubCategoryForm"
import { Category } from "@/types"

type Props = {
  categories: Category[]
}

const AddSubcategoryModal: FC<Props> = ({ categories }) => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      open={open}
      triggerText={"اضافة فئة"}
      triggerProps={{
        className:
          "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
        onClick: () => setOpen(true),
      }}
    >
      <SubCategoryForm
        categories={categories}
        closeModal={() => setOpen(false)}
      />
    </Modal>
  )
}
export default AddSubcategoryModal
