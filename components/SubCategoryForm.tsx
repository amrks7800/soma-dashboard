import { Category, Module } from "@/types"
import { ComponentProps, FC } from "react"
import FormGroup from "./FormGroup"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { DataSelect } from "./DataSelect"
import FileFormGroup from "./FileFormGroup"
import { addProductModule, editProductModule } from "@/actions"

type Props = {
  category?: Module
  categories: Category[]
  closeModal: () => void
  categoryName?: string
} & ComponentProps<"form">

const SubCategoryForm: FC<Props> = ({
  category,
  categories,
  className,
  closeModal,
  categoryName,
  ...props
}) => {
  const categoryOptions = categories.map(cat => ({
    name: cat.categoryNameAr,
    value: cat.id,
  }))

  const action = async (formData: FormData) => {
    console.log(Object.fromEntries(formData.entries()))

    if (category) {
      const result = await editProductModule(formData, category?.id || "")

      if (result.success) {
        closeModal()
      }
    } else {
      const result = await addProductModule(formData)

      if (result.success) {
        closeModal()
      }
    }
  }

  return (
    <form className={cn("grid gap-4", className)} {...props} action={action}>
      <DataSelect
        placeholder={categoryName ? categoryName : "اسم القسم"}
        options={categoryOptions}
        triggerProps={{
          className: "w-full",
        }}
        name="categoryId"
        defaultValue={category?.categoryId}
      />

      <FormGroup
        label="اسم المنتج:"
        defaultValue={category?.productName}
        name="productName"
      />

      <FileFormGroup label="صورة المتج:" name="files" />

      <Button
        variant={"outline"}
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      >
        حفظ
      </Button>
    </form>
  )
}
export default SubCategoryForm
