"use client"

import { FC, useState } from "react"
import CouponForm from "./CouponForm"
import Modal from "./Modal"
import { Coupon } from "@/types"
import { Edit } from "lucide-react"

type Props = {
  coupon: Coupon
}

const EditCouponModal: FC<Props> = ({ coupon }) => {
  const [open, setOpen] = useState(false)

  const closeModal = () => setOpen(false)

  return (
    <Modal
      open={open}
      triggerText={<Edit />}
      triggerProps={{
        className:
          "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md aspect-square w-[35px] h-[35px]",
        onClick: () => setOpen(true),
      }}
    >
      <CouponForm closeModal={closeModal} coupon={coupon} />
    </Modal>
  )
}
export default EditCouponModal
