import { Category } from "@/types"
import { ComponentProps, FC } from "react"
import FormGroup from "./FormGroup"
import FileFormGroup from "./FileFormGroup"
import { cn } from "@/lib/utils"
import SubmitButton from "./SubmitButton"
import { addCategory, editCategory } from "@/actions"

type Props = {
  category?: Category
  mode?: "edit" | "add"
  closeModal: () => void
} & ComponentProps<"form">

const CategoryForm: FC<Props> = ({
  category,
  className,
  mode = "add",
  closeModal,
  ...props
}) => {
  const action = async (formData: FormData) => {
    if (mode === "edit") {
      const result = await editCategory(formData, category?.id || "")

      console.log(result)

      if (result.success) closeModal()
    } else {
      const result = await addCategory(formData)

      if (result.success) closeModal()
    }
  }

  return (
    <form className={cn("grid gap-4", className)} {...props} action={action}>
      <FormGroup
        label="اسم القسم بالانجليزي:"
        defaultValue={category?.categoryNameEn}
        name="categoryNameEn"
      />
      <FormGroup
        label="اسم القسم بالعربي:"
        defaultValue={category?.categoryNameAr}
        name="categoryNameAr"
      />
      <FileFormGroup label="صورة صقحة القسم:" name="files" />
      <FormGroup
        label="وصف صورة صفحة القسم:"
        defaultValue={category?.description}
        name="description"
      />
      <SubmitButton />
    </form>
  )
}
export default CategoryForm
