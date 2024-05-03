import { Category } from "@/types"
import { ComponentProps, FC } from "react"
import FormGroup from "./FormGroup"
import FileFormGroup from "./FileFormGroup"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type Props = {
  category?: Category
} & ComponentProps<"form">

const CategoryForm: FC<Props> = ({ category, className, ...props }) => {
  return (
    <form className={cn("grid gap-4", className)} {...props}>
      <FormGroup
        label="اسم القسم بالانجليزي:"
        defaultValue={category?.nameEn}
      />
      <FormGroup label="اسم القسم بالعربي:" defaultValue={category?.nameAr} />
      <FileFormGroup label="صورة صقحة القسم:" />
      <FormGroup
        label="وصف صورة صفحة القسم:"
        defaultValue={category?.description}
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
export default CategoryForm
