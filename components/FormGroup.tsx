import { ComponentProps, FC } from "react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"

type Props = ComponentProps<"input"> & {
  label: string
}

const FormGroup: FC<Props> = ({ className, id, label, ...props }) => {
  return (
    <div className="flow">
      <label htmlFor={id}>{label}</label>
      <Input
        className={cn(
          "border border-light-gray focus-visible:ring-0 dark:bg-transparent focus:border-accent-indigo py-2 px-4 outline-0 transition-all focus:outline-4 outline-indigo-500",
          className
        )}
        {...props}
      />
    </div>
  )
}
export default FormGroup
