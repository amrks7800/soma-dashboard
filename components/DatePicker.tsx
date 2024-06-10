"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
  label: string
  className?: string
  defaultValue: string
}

export function DatePicker({ label, className, defaultValue }: Props) {
  const [date, setDate] = React.useState<Date>()

  return (
    <>
      <h3>{label}</h3>
      <Popover>
        <PopoverTrigger asChild name="expireDate">
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <input
        type="hidden"
        value={JSON.stringify(date) || defaultValue}
        name="expireDate"
      />
    </>
  )
}
