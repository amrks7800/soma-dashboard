"use client"

import { Edit } from "lucide-react"
import Modal from "./Modal"
import CategoryForm from "./CategoryForm"
import type { Category } from "@/types"
import { FC, useState } from "react"
import { editCategory } from "@/actions"

type Props = {
  category: Category
}

const EditCategoryForm: FC<Props> = ({ category }) => {
  const [open, setOpen] = useState(false)

  const clientAction = async (formData: FormData) => {
    const result = await editCategory(formData, category.id)

    if (result.success) setOpen(false)
  }

  return (
    <Modal
      open={open}
      triggerText={<Edit size={15} />}
      triggerProps={{
        className:
          "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
        onClick: () => setOpen(prev => !prev),
      }}
    >
      <CategoryForm category={category} formAction={clientAction} />
    </Modal>
  )
}
export default EditCategoryForm
