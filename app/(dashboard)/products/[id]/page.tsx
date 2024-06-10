import EditProductForm from "@/components/EditProductForm"
import {
  getAllCategories,
  getAllProductsGroup,
  getProductByID,
} from "@/fetchers"
import { FC } from "react"

type Props = {
  params: {
    id: string
  }
}

const ProductFormPage: FC<Props> = async ({ params: { id } }) => {
  const productPromise = getProductByID(id)
  const categoriesPromise = getAllCategories(1)

  const groupsPromise = getAllProductsGroup()

  const [product, categories, groups] = await Promise.all([
    productPromise,
    categoriesPromise,
    groupsPromise,
  ])

  return (
    <EditProductForm
      product={product?.data?.result}
      categories={categories.data?.result || []}
      groups={groups.data?.result || []}
    />
  )
}
export default ProductFormPage
