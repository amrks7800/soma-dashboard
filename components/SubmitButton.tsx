"use client"

import { FC, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

type Props = {
  buttonText?: string
  loadingUi?: ReactNode
}

const SubmitButton: FC<Props> = ({
  buttonText = "حفظ",
  loadingUi = "loading",
}) => {
  const { pending } = useFormStatus()
  return (
    <Button
      variant={"outline"}
      className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
    >
      {pending ? loadingUi : buttonText}
    </Button>
  )
}
export default SubmitButton
