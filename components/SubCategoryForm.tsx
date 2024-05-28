import { Category } from "@/types"
import { ComponentProps, FC } from "react"
import FormGroup from "./FormGroup"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { DataSelect } from "./DataSelect"

type Props = {
  category?: Category
  categories: Category[]
} & ComponentProps<"form">

const SubCategoryForm: FC<Props> = ({
  category,
  categories,
  className,
  ...props
}) => {
  const categoryOptions = categories.map(cat => ({
    name: cat.categoryNameAr,
    value: cat.id,
  }))

  const action = async (formData: FormData) => {
    console.log(Object.fromEntries(formData.entries()))
  }

  return (
    <form className={cn("grid gap-4", className)} {...props} action={action}>
      <DataSelect
        placeholder="اسم القسم"
        options={categoryOptions}
        triggerProps={{
          className: "w-full",
        }}
        name="categoryID"
      />
      <FormGroup
        label="اسم الفئة بالانجليزي:"
        defaultValue={category?.categoryNameEn}
      />
      <FormGroup
        label="اسم الفئة بالعربي:"
        defaultValue={category?.categoryNameAr}
      />

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
