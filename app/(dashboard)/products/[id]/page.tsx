import ProductForm from "@/components/product-form"
import { getProductByID } from "@/fetchers"
import { FC } from "react"

type Props = {
  params: {
    id: string
  }
}

const ProductFormPage: FC<Props> = async ({ params: { id } }) => {
  //use the id to fetch the product from api
  console.log(id)

  const product = await getProductByID(id)

  return (
    <div>
      <ProductForm product={product?.data?.result} />
    </div>
  )
}
export default ProductFormPage
