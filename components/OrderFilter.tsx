"use client"

import { filterOptions } from "@/constants"
import { FilterOption } from "@/types"
import { createSearchParam } from "@/utils"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { FC, useEffect, useRef, useState } from "react"

const OrderFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParam = useSearchParams()

  const [active, setActive] = useState(Number(searchParam.get("active")) || 0)
  const [offset, setOffset] = useState(0)

  function changeOffset(val: number) {
    setOffset(val)
  }

  function changeActive(val: number) {
    setActive(val)
  }

  useEffect(() => {
    const params = createSearchParam("active", `${active}`, searchParam)

    router.push(pathname + "?" + params)
  }, [active])

  return (
    <div className="overflow-auto border-y">
      <ul className="grid grid-flow-col md:auto-cols-[150px] auto-cols-[100px] w-fit md:min-w-[600px] min-w-[400] relative">
        {filterOptions.map(option => (
          <FilterOptionLi
            option={option}
            changeOffset={changeOffset}
            active={active}
            changeActive={changeActive}
          />
        ))}

        <div
          className="absolute bottom-0 transition-all duration-200 w-[25%] h-1 bg-accent-indigo rounded-full"
          style={{
            left: `${offset}px`,
          }}
        />
      </ul>
    </div>
  )
}
export default OrderFilter

type FilterOptionProps = {
  option: FilterOption
  active: number
  changeOffset: (val: number) => void
  changeActive: (val: number) => void
}

const FilterOptionLi: FC<FilterOptionProps> = ({
  option,
  active,
  changeOffset,
  changeActive,
}) => {
  const liRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (active === option.id && liRef.current)
      changeOffset(liRef.current.offsetLeft)
  }, [active])

  return (
    <li
      ref={liRef}
      className={`p-8 transition-colors grid place-content-center cursor-pointer text-center ${
        active === option.id && "text-accent-indigo"
      }`}
      onClick={() => changeActive(option.id)}
    >
      {option.title}
    </li>
  )
}
