"use client"

import { FC, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import { cn } from "@/lib/utils"

type Props = {
  buttonText?: string
  loadingUi?: ReactNode
  className?: string
}

const SubmitButton: FC<Props> = ({
  buttonText = "حفظ",
  loadingUi = "loading",
  className,
}) => {
  const { pending } = useFormStatus()
  return (
    <Button
      variant={"outline"}
      className={cn(
        `border-primary-green text-primary-green hover:bg-primary-green hover:text-white`,
        className
      )}
      disabled={pending}
    >
      {pending ? loadingUi : buttonText}
    </Button>
  )
}
export default SubmitButton
