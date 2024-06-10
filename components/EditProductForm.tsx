import { Category, GroupType, Product } from "@/types"
import ProductForm from "./product-form"

type Props = {
  product?: Product
  categories: Category[]
  groups: GroupType[]
}

const EditProductForm = ({ product, categories, groups }: Props) => {
  return (
    <ProductForm
      product={product}
      categories={categories || []}
      groups={groups || []}
      mode="edit"
    />
  )
}
export default EditProductForm
