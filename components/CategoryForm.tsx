import { Category } from "@/types"
import { ComponentProps, FC } from "react"
import FormGroup from "./FormGroup"
import FileFormGroup from "./FileFormGroup"
import { cn } from "@/lib/utils"
import SubmitButton from "./SubmitButton"

type Props = {
  category?: Category
  formAction?: (formData: FormData) => void
} & ComponentProps<"form">

const CategoryForm: FC<Props> = ({
  category,
  className,
  formAction,
  ...props
}) => {
  return (
    <form
      className={cn("grid gap-4", className)}
      {...props}
      action={formAction}
      encType="multipart/form-data"
    >
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
