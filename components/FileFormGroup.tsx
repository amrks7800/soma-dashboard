import { ComponentProps, FC } from "react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"

type Props = ComponentProps<"input"> & {
  label: string
  labelStyles?: string
}

const FileFormGroup: FC<Props> = ({
  className,
  id,
  label,
  labelStyles,
  ...props
}) => {
  return (
    <div className="flow">
      <label htmlFor={id} className={cn(labelStyles)}>
        {label}
      </label>
      <Input
        className={cn(
          "border border-light-gray focus-visible:ring-0 dark:bg-transparent focus:border-accent-indigo py-2 px-4 outline-0 transition-all focus:outline-4 outline-indigo-500",
          className
        )}
        {...props}
        type="file"
      />
    </div>
  )
}
export default FileFormGroup
