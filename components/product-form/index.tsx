import { cn } from "@/lib/utils"
import { Product } from "@/types"
import { ComponentProps, FC } from "react"
import FileFormGroup from "../FileFormGroup"
import FormGroup from "../FormGroup"
import { DataSelect } from "../DataSelect"
import { colorsData, sectionsData } from "@/constants"
import { Button } from "../ui/button"

type Props = {
  product?: Product
} & ComponentProps<"form">

const ProductForm: FC<Props> = ({ product, className, ...props }) => {
  const sectionsOptions = sectionsData.map(item => ({
    name: item.nameAr,
    value: item.nameAr,
  }))

  const colorsOptions = colorsData.map(item => ({
    name: item.nameAr,
    value: item.hex,
  }))

  return (
    <form {...props} className={cn(className, "grid gap-4")} dir="rtl">
      <FileFormGroup
        label="الصورة الرئيسية"
        labelStyles="text-primary-blue text-xl"
      />
      <FileFormGroup
        label="صورة الغلاف"
        labelStyles="text-primary-blue text-xl"
      />
      <FileFormGroup
        label="الصور الفرعية"
        labelStyles="text-primary-blue text-xl"
      />
      <div className="flex flex-wrap gap-4 *:flex-1">
        <FormGroup label="اسم المنتج" labelStyles="text-primary-blue text-xl" />
        <FormGroup label="السعر" labelStyles="text-primary-blue text-xl" />
        <FormGroup
          label="الكمية المتاحة"
          labelStyles="text-primary-blue text-xl"
        />
      </div>
      <div className="flex flex-wrap gap-4 *:flex-1">
        <FormGroup label="الخصم" labelStyles="text-primary-blue text-xl" />
        <FormGroup
          label="الوصف القصير"
          labelStyles="text-primary-blue text-xl"
        />
        <div className="flow grid">
          <label htmlFor="desc" className="text-primary-blue text-xl">
            الوصف الطويل
          </label>
          <textarea className="border border-light-gray focus-visible:ring-0 dark:bg-transparent focus:border-accent-indigo py-2 px-4 outline-0 transition-all focus:outline-4 outline-indigo-500"></textarea>
        </div>
      </div>
      <DataSelect
        label="الاقسام"
        options={sectionsOptions}
        placeholder="اختر القسم"
        triggerProps={{ className: "w-full" }}
      />
      <div className="flex flex-wrap gap-4 *:flex-1">
        <DataSelect
          label="الالوان"
          options={colorsOptions}
          placeholder={"اختر اللون"}
          triggerProps={{ className: "w-full" }}
          isColored
        />
        <DataSelect
          label="الحالة"
          options={[
            {
              name: "متاح",
              value: "true",
            },
            {
              name: "غير متاح",
              value: "false",
            },
          ]}
          placeholder={
            product ? (product.available ? "متاح" : "غير متاح") : "اختر الحالة"
          }
          triggerProps={{ className: "w-full" }}
        />
        <DataSelect
          label="مصاريف الشحن"
          options={[
            {
              name: "مطلوب مصاريف",
              value: "true",
            },
            {
              name: "شحن مجاني",
              value: "false",
            },
          ]}
          placeholder={"مصاريف الشحن"}
          triggerProps={{ className: "w-full" }}
        />
      </div>
      <Button className="text-white text-lg font-[600] bg-primary-blue hover:opacity-70 hover:bg-primary-blue">
        {product ? "رفع التعديلات" : "رفع المنتج"}
      </Button>
    </form>
  )
}
export default ProductForm
