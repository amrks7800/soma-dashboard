import ProductForm from "@/components/product-form"
import { getAllCategories, getAllProductsGroup } from "@/fetchers"

const NewProductFormPage = async () => {
  const categoriesPromise = getAllCategories(1)

  const groupsPromise = getAllProductsGroup()

  const [groups, categories] = await Promise.all([
    groupsPromise,
    categoriesPromise,
  ])

  return (
    <ProductForm
      categories={categories.data?.result || []}
      groups={groups.data?.result || []}
      mode="add"
    />
  )
}

export default NewProductFormPage
