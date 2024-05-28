import { addProduct } from "@/actions"
import ProductForm from "@/components/product-form"
import { getAllCategories, getAllProductsGroup } from "@/fetchers"

export const dynamic = "force-dynamic"

export const revalidate = 0

const NewProductFormPage = async () => {
  const categoriesPromise = getAllCategories(1)

  const groupsPromise = getAllProductsGroup()

  const [groups, categories] = await Promise.all([
    groupsPromise,
    categoriesPromise,
  ])

  const formAction = async (formData: FormData) => {
    "use server"

    const result = await addProduct(formData)

    console.log(result)
  }

  return (
    <ProductForm
      action={formAction}
      categories={categories.data?.result || []}
      groups={groups.data?.result || []}
    />
  )
}
export default NewProductFormPage
