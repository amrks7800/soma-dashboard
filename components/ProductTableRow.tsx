import { deleteProductByID } from "@/actions"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { getProductByID } from "@/fetchers"
import { Product } from "@/types"
import { Edit, Trash } from "lucide-react"
import { revalidateTag } from "next/cache"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type Props = {
  product: Product
}

const ProductTableRow: FC<Props> = async ({ product }) => {
  const fullProduct = await getProductByID(product.id)

  const mainImageUrl = product.mainImage.startsWith("/")
    ? product.mainImage
    : `/${product.mainImage}`

  return (
    <TableRow key={product.id}>
      <TableCell className="py-4 px-6">
        {Math.floor(Math.random() * 1000)}
      </TableCell>
      <TableCell className="py-4 px-6">
        <div className="border p-4 grid place-content-center relative aspect-square rounded-lg">
          <Image
            fill
            src={"https://elaf-backend.onrender.com" + mainImageUrl}
            alt="product image"
            className="object-cover object-center"
          />
        </div>
      </TableCell>
      <TableCell className="py-4 px-6">{product.productName}</TableCell>
      <TableCell className="py-4 px-6">${product.price}</TableCell>
      <TableCell className="py-4 px-6">
        {fullProduct?.data?.result.productCapacity}
      </TableCell>
      <TableCell className="py-4 px-6">
        {product.discountPrice ? `${product.discountPrice}%` : "لا يوجد"}
      </TableCell>
      <TableCell className="py-4 px-6">
        <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
          {fullProduct?.data?.result?.productCapacity &&
          fullProduct?.data?.result.productCapacity > 0
            ? "متاح"
            : "غير متاح"}
        </div>
      </TableCell>
      <TableCell className="py-4 px-6">
        <div className="flex items-center gap-2">
          <Button
            className="aspect-square w-[50px]"
            variant={"outline"}
            title="تعديل المنتج"
            asChild
          >
            <Link href={`/products/${product.id}`}>
              <Edit size={15} />
            </Link>
          </Button>
          <form action="">
            <Button
              className="aspect-square w-[50px]"
              variant={"outline"}
              title="حذف المنتج"
              formAction={async () => {
                "use server"
                await deleteProductByID(product.id)
                revalidateTag("product")
              }}
            >
              <Trash size={15} />
            </Button>
          </form>
        </div>
      </TableCell>
    </TableRow>
  )
}
export default ProductTableRow
