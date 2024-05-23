import { baseQuery } from "@/lib/utils"
import {
  Category,
  Product,
  ProductsQueryReturnType,
  ReturnType,
  TUser,
} from "@/types"

export const getProducts = async () => {
  const products = await baseQuery<ProductsQueryReturnType>("products/recent", [
    "product",
  ])

  return products
}

export const getProductByID = async (id: string) => {
  const product = await baseQuery<ReturnType<Product>>(`product/${id}`)

  return product
}

export const getUsers = async (name?: string) => {
  const users = await baseQuery<ReturnType<TUser[]>>(
    name ? `api/v1/user/customers?name=${name}` : "api/v1/user/customers",
    ["user"]
  )

  return users
}

export const getAllCategories = async () => {
  const categories = await baseQuery<ReturnType<Category[]>>(`categories`, [
    "category",
  ])

  return categories
}
