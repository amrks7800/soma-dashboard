"use client"

import { useState } from "react"
import GroupForm from "./GroupForm"
import Modal from "./Modal"

const AddGroupModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <Modal
      open={open}
      triggerText={"اضافة مجموعة"}
      triggerProps={{
        className:
          "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
        onClick: () => setOpen(true),
      }}
    >
      <GroupForm closeModal={() => setOpen(false)} />
    </Modal>
  )
}
export default AddGroupModal
