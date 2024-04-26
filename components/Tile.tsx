import { cn } from "@/lib/utils"
import { FC, HTMLAttributes, ReactNode } from "react"

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Tile: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      dir="rtl"
      className={cn(
        "p-5 shadow-tile rounded-lg bg-white dark:bg-secondary-dark",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
export default Tile
