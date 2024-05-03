import { Coupon } from "@/types"
import { DataSelect } from "./DataSelect"
import { DatePicker } from "./DatePicker"
import FormGroup from "./FormGroup"
import { Button } from "./ui/button"
import { FC } from "react"

type Props = {
  coupon?: Coupon
}

const CouponForm: FC<Props> = ({ coupon }) => {
  return (
    <form className="grid gap-4">
      <FormGroup
        label="كود الكوبون"
        placeholder="اسم الكوبون"
        defaultValue={coupon?.couponCode}
      />
      <DataSelect
        defaultValue={coupon?.couponType}
        triggerProps={{
          className: "w-full",
        }}
        placeholder="نوع الكوبون"
        options={[
          {
            name: "كوبون خصم",
            value: "discount",
          },
          {
            name: "شحن مجاني",
            value: "free_delivery",
          },
        ]}
      />
      <DatePicker label="تاريخ الانتهاء" className="w-full" />
      <FormGroup
        label="عدد المستخدمين"
        type="number"
        defaultValue={coupon?.numberOfUsers}
      />
      <Button
        variant={"outline"}
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      >
        اضافة
      </Button>
    </form>
  )
}
export default CouponForm
