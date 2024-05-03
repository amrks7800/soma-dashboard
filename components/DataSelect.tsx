import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

type Props = {
  options: {
    value: string
    name: string
  }[]
  triggerProps?: React.ComponentProps<typeof SelectTrigger>
  placeholder: string
  label?: string
  isColored?: boolean
  defaultValue?: string
}

export function DataSelect({
  options,
  triggerProps,
  placeholder,
  label,
  isColored = false,
  defaultValue,
}: Props) {
  return (
    <Select dir="rtl" defaultValue={defaultValue}>
      <SelectTrigger
        {...triggerProps}
        className={cn("w-[180px]", triggerProps?.className)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map(option => (
            <SelectItem
              value={option.value}
              key={option.value}
              style={{
                background: isColored ? option.value : "",
              }}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
