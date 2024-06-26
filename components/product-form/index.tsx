"use client"

import { cn } from "@/lib/utils"
import { Category, GroupType, Product } from "@/types"
import { ComponentProps } from "react"
import FileFormGroup from "../FileFormGroup"
import FormGroup from "../FormGroup"
import { DataSelect } from "../DataSelect"
import { colorsData } from "@/constants"
import SubmitButton from "../SubmitButton"
import { Loader } from "lucide-react"
import { addProduct, editProduct } from "@/actions"

type Props = Omit<ComponentProps<"form">, "action"> & {
  product?: Product
  categories: Category[]
  groups: GroupType[]
  mode?: "add" | "edit"
}

const ProductForm = ({
  product,
  className,
  categories,
  groups,
  mode = "add",
  ...props
}: Props) => {
  const formAction = async (formData: FormData) => {
    if (mode === "add") {
      await addProduct(formData)
    } else if (mode === "edit" && product) {
      await editProduct(formData, product.id)
    }
  }

  console.log("product", product)

  const sectionsOptions =
    categories?.map(item => ({
      name: item.categoryNameAr,
      value: item.id,
    })) || []

  const groupOptions =
    groups.map(item => ({
      name: item.name,
      value: item.id,
    })) || []

  const colorsOptions = colorsData.map(item => ({
    name: item.nameAr,
    value: item.nameAr,
  }))

  return (
    <form
      {...props}
      className={cn(className, "grid gap-4")}
      dir="rtl"
      action={formAction}
    >
      <FileFormGroup
        label="الصورة الرئيسية"
        labelStyles="text-primary-blue text-xl"
        name={"mainImage"}
      />
      <FileFormGroup
        label="صورة الغلاف"
        labelStyles="text-primary-blue text-xl"
        name="coverImage"
      />
      <FileFormGroup
        multiple
        label="الصور الفرعية"
        labelStyles="text-primary-blue text-xl"
        name="files"
      />
      <div className="flex flex-wrap gap-4 *:flex-1">
        <FormGroup
          label="اسم المنتج"
          labelStyles="text-primary-blue text-xl"
          defaultValue={product?.productName}
          name="productName"
        />
        <FormGroup
          label="السعر"
          labelStyles="text-primary-blue text-xl"
          defaultValue={product?.price}
          name="price"
        />
        <FormGroup
          label="الكمية المتاحة"
          labelStyles="text-primary-blue text-xl"
          defaultValue={product?.productCapacity}
          name="productCapacity"
        />
      </div>
      <div className="flex flex-wrap gap-4 *:flex-1">
        <FormGroup
          label="الخصم"
          labelStyles="text-primary-blue text-xl"
          defaultValue={product?.discountPrice}
          name="discountPrice"
        />
        <FormGroup
          label="الوصف القصير"
          labelStyles="text-primary-blue text-xl"
          defaultValue={product?.header}
          name="header"
        />

        <div className="flex flex-col gap-0.5">
          <h2 className="text-primary-blue text-xl">الوصف الطويل</h2>
          <textarea
            name="description"
            defaultValue={product?.description}
          ></textarea>
        </div>
      </div>
      <DataSelect
        label="الاقسام"
        options={sectionsOptions}
        placeholder="اختر القسم"
        triggerProps={{ className: "w-full" }}
        defaultValue={product?.categoryId}
        name="categoryId"
      />
      <DataSelect
        label="المجموعات"
        options={groupOptions}
        placeholder="اختر المجموعة"
        triggerProps={{ className: "w-full" }}
        defaultValue={product?.group?.id}
        name="groupId"
      />
      <div className="flex flex-wrap gap-4 *:flex-1">
        <DataSelect
          label="الالوان"
          options={colorsOptions}
          placeholder={"اختر اللون"}
          triggerProps={{ className: "w-full" }}
          isColored
          defaultValue={product?.colorName}
          name="colorName"
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
            product
              ? product.productCapacity && product.productCapacity > 0
                ? "متاح"
                : "غير متاح"
              : "اختر الحالة"
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

      <SubmitButton
        buttonText={product ? "رفع التعديلات" : "رفع المنتج"}
        loadingUi={<Loader className="animate-spin" />}
        className="text-white text-lg font-[600] bg-primary-blue hover:opacity-70 hover:bg-primary-blue"
      />
    </form>
  )
}
export default ProductForm
