import ProductForm from "@/components/product-form"
import { productsData } from "@/constants"
import { FC } from "react"

type Props = {
  params: {
    id: string
  }
}

const ProductFormPage: FC<Props> = ({ params: { id } }) => {
  //use the id to fetch the product from api
  console.log(id)

  return (
    <div>
      <ProductForm product={productsData[0]} />
    </div>
  )
}
export default ProductFormPage
