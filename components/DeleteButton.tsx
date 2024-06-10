"use client"

import { Loader, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

const DeleteButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button
      className="aspect-square w-[35px] h-[35px]"
      variant={"outline"}
      title="حذف المنتج"
      disabled={pending}
    >
      <div>
        {pending ? <Loader className="animate-spin" /> : <Trash size={15} />}
      </div>
    </Button>
  )
}
export default DeleteButton
