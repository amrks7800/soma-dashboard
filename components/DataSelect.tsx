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

/**
 * A custom select component with support for right-to-left (RTL) direction,
 * colored options, and hidden input for form submission.
 *
 * @param options - An array of objects representing the selectable options.
 * Each object should have a `value` and `name` property.
 * @param triggerProps - Additional props to pass to the SelectTrigger component.
 * @param placeholder - The placeholder text for the select input.
 * @param label - The label text for the select component.
 * @param isColored - A boolean indicating whether the options should be colored.
 * @param defaultValue - The initial selected value of the select component.
 * @param name - The name attribute for the hidden input field.
 *
 * @returns A React component that renders the custom select component.
 */
export function DataSelect({
  options,
  triggerProps,
  placeholder,
  label,
  isColored = false,
  defaultValue,
  name = undefined,
}: Props) {
  const [value, setValue] = useState(defaultValue || "")
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
