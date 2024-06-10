"use client"

import { useState } from "react"
import CouponForm from "./CouponForm"
import Modal from "./Modal"

const AddCouponModal = () => {
  const [open, setOpen] = useState(false)

  const closeModal = () => setOpen(false)

  return (
    <Modal
      open={open}
      triggerText={"اضافة كوبون"}
      triggerProps={{
        className:
          "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
        onClick: () => setOpen(true),
      }}
    >
      <CouponForm closeModal={closeModal} />
    </Modal>
  )
}
export default AddCouponModal
