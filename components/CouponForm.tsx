"use client"

import { Coupon } from "@/types"
import { DataSelect } from "./DataSelect"
import { DatePicker } from "./DatePicker"
import FormGroup from "./FormGroup"
import { Button } from "./ui/button"
import { FC } from "react"
import { addNewCoupon, editCouponByID } from "@/actions"
import SubmitButton from "./SubmitButton"
import { Loader } from "lucide-react"

type Props = {
  coupon?: Coupon
  closeModal: () => void
}

const CouponForm: FC<Props> = ({ coupon, closeModal }) => {
  const formAction = async (formData: FormData) => {
    const voucherTypeId = Number(formData.get("voucherTypeId") || 0) as 0 | 1
    const productCount = Number(formData.get("productCount") || 0) as number
    const userCount = Number(formData.get("userCount") || 0) as number
    const discountPercentage = formData.get("discountPercentage") as string
    const discountLimit = formData.get("discountLimit") as string
    const discountPrice = formData.get("discountPrice") as string
    const expireDate = JSON.parse(
      (formData.get("expireDate") as string) || ""
    ) as string

    console.log({
      voucherTypeId,
      productCount,
      userCount,
      discountPercentage,
      discountPrice,
      expireDate,
      discountLimit,
    })

    if (coupon) {
      const result = await editCouponByID(coupon.id, {
        voucherTypeId,
        productCount,
        userCount,
        discountPercentage,
        discountPrice,
        expireDate,
        discountLimit,
      })

      if (result.success) closeModal()
    } else {
      const result = await addNewCoupon({
        voucherTypeId,
        productCount,
        userCount,
        discountPercentage,
        discountPrice,
        expireDate,
        discountLimit,
      })

      if (result.success) closeModal()
    }
  }

  return (
    <form className="grid gap-4" action={formAction}>
      <DataSelect
        defaultValue={`${coupon?.voucherTypeId}`}
        triggerProps={{
          className: "w-full",
        }}
        placeholder="نوع الكوبون"
        options={[
          {
            name: "كوبون خصم",
            value: "0",
          },
          {
            name: "شحن مجاني",
            value: "1",
          },
        ]}
        name="voucherTypeId"
      />
      <DatePicker
        label="تاريخ الانتهاء"
        className="w-full"
        defaultValue={coupon?.expireDate || ""}
      />
      <FormGroup
        label="عدد المستخدمين"
        name="userCount"
        type="number"
        defaultValue={coupon?.userCount}
      />
      <FormGroup
        label="عدد المنتجات"
        name="productCount"
        type="number"
        defaultValue={coupon?.productCount}
      />
      <FormGroup
        label="نسبة الخصم"
        name="discountPercentage"
        type="number"
        defaultValue={coupon?.discountPrecentage || undefined}
      />
      <FormGroup
        label="سعر الخصم"
        name="discountPrice"
        type="number"
        defaultValue={coupon?.discountPrice}
      />
      <FormGroup label="حدود الخصم" name="discountLimit" type="number" />
      <SubmitButton
        buttonText="اضافة"
        loadingUi={<Loader className="animate-spin" />}
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      />
    </form>
  )
}
export default CouponForm
