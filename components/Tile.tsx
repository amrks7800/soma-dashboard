import { cn } from "@/lib/utils"
import { FC, ReactNode, JSXElementConstructor, ComponentProps } from "react"

type Props = {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>
} & ComponentProps<"div">

const Tile: FC<Props> = ({ children, className, as, ...props }) => {
  const Comp = as || "div"

  return (
    <Comp
      dir="rtl"
      className={cn(
        "p-5 shadow-tile rounded-lg bg-white dark:bg-secondary-dark",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
export default Tile
