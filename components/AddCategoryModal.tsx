"use client"

import CategoryForm from "./CategoryForm"
import Modal from "./Modal"
import { useState } from "react"

const AddCategoryModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      open={open}
      triggerText={"اضافة قسم"}
      triggerProps={{
        className:
          "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
        onClick: () => setOpen(prev => !prev),
      }}
    >
      <CategoryForm
        closeModal={() => {
          setOpen(false)
        }}
      />
    </Modal>
  )
}
export default AddCategoryModal
