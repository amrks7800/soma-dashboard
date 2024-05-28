"use client"

import { addCategory } from "@/actions"
import CategoryForm from "./CategoryForm"
import Modal from "./Modal"
import { useState } from "react"
import { useToast } from "./ui/use-toast"

const AddCategoryModal = () => {
  const [open, setOpen] = useState(false)

  const { toast } = useToast()

  const formAction = async (formData: FormData) => {
    const result = await addCategory(formData)

    if (result.success) {
      setOpen(false)
    } else {
      toast({
        description: "فشل",
        variant: "destructive",
      })
    }
  }
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
      <CategoryForm formAction={formAction} />
    </Modal>
  )
}
export default AddCategoryModal
