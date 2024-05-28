import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogTriggerProps } from "@radix-ui/react-dialog"
import { FC, ReactNode } from "react"

type Props = {
  triggerText?: ReactNode
  triggerProps?: DialogTriggerProps
  dialogTitle?: string
  description?: string
  children: ReactNode
  open?: boolean
  // toggle?: (bool: boolean) => void
}

const Modal: FC<Props> = ({
  children,
  triggerProps,
  triggerText = "فتح",
  dialogTitle,
  description,
  open = false,
}) => {
  return (
    <Dialog open={open}>
      <DialogTrigger {...triggerProps}>{triggerText}</DialogTrigger>
      <DialogContent dir="rtl">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
export default Modal
