import { FC } from "react"
import { Button } from "./ui/button"
import { Trash } from "lucide-react"
import Link from "next/link"

type Props = {
  active: number
}

const OrderControls: FC<Props> = ({ active }) => {
  return active === 0 ? (
    <>
      <Button className="bg-primary-green text-white py-2 px-4 hover:bg-secondary-green">
        تأكيد
      </Button>
      <Button className="aspect-square w-[50px]" variant={"outline"}>
        <Trash size={15} />
      </Button>
    </>
  ) : active === 1 ? (
    <>
      <Button
        className="bg-primary-green text-white py-2 px-4 hover:bg-secondary-green"
        asChild
      >
        <Link href={"/order-data/1"}>عرض</Link>
      </Button>
      <Button className="bg-primary-green text-white py-2 px-4 hover:bg-secondary-green">
        تأكيد
      </Button>
      <Button className="aspect-square w-[50px]" variant={"outline"}>
        <Trash size={15} />
      </Button>
    </>
  ) : active === 2 ? (
    <>
      <Button className="bg-primary-green text-white py-2 px-4 hover:bg-secondary-green">
        طباعة
      </Button>
      <Button className="bg-primary-green text-white py-2 px-4 hover:bg-secondary-green">
        تم التسليم
      </Button>
    </>
  ) : null
}
export default OrderControls
