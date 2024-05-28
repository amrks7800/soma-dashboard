"use client"

import { Loader, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

const DeleteCategoryButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button
      className="aspect-square w-[35px] h-[35px]"
      variant={"outline"}
      title="حذف المنتج"
      disabled={pending}
    >
      <div>{pending ? <Loader /> : <Trash size={15} />}</div>
    </Button>
  )
}
export default DeleteCategoryButton
