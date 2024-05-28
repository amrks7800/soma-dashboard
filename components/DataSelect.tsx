"use client"

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
import { useState, ComponentProps } from "react"

type Props = {
  options: {
    value: string
    name: string
  }[]
  triggerProps?: ComponentProps<typeof SelectTrigger>
  placeholder: string
  label?: string
  isColored?: boolean
  defaultValue?: string
  name?: string
}

export function DataSelect({
  options,
  triggerProps,
  placeholder,
  label,
  isColored = false,
  defaultValue,
  name = undefined,
}: Props) {
  const [value, setValue] = useState("")
  return (
    <>
      <Select
        dir="rtl"
        defaultValue={defaultValue}
        onValueChange={e => setValue(e)}
      >
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
      <input type="hidden" name={name} value={value} />
    </>
  )
}
