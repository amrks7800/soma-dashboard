import { Category } from "@/types"
import { ComponentProps, FC } from "react"
import FormGroup from "./FormGroup"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { DataSelect } from "./DataSelect"
import { categoriesData } from "@/constants"

type Props = {
  category?: Category
} & ComponentProps<"form">

const SubCategoryForm: FC<Props> = ({ category, className, ...props }) => {
  const categoryOptions = categoriesData.map(cat => ({
    name: cat.nameAr,
    value: cat.nameAr,
  }))
  return (
    <form className={cn("grid gap-4", className)} {...props}>
      <DataSelect
        placeholder="اسم القسم"
        options={categoryOptions}
        triggerProps={{
          className: "w-full",
        }}
      />
      <FormGroup
        label="اسم الفئة بالانجليزي:"
        defaultValue={category?.nameEn}
      />
      <FormGroup label="اسم الفئة بالعربي:" defaultValue={category?.nameAr} />

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
