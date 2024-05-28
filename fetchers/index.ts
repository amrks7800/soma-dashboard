import { baseQuery } from "@/lib/utils"
import {
  Category,
  GroupType,
  Message,
  Module,
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

export const getAllCategories = async (page: number) => {
  const categories = await baseQuery<ReturnType<Category[]>>(
    page > 1 ? `categories?pageNumber=${page}` : `categories`,
    ["category"]
  )

  return categories
}

export const getAllModules = async () => {
  const modules = await baseQuery<ReturnType<Module[]>>(
    `api/v1/productmodule`,
    ["module"]
  )

  return modules
}

export const getAllUserMessages = async (page: number) => {
  const userMessagesResponse = await baseQuery<
    ReturnType<Message[]> & { totalItems: number; totalPages: number }
  >(page > 1 ? `api/v1/messages?pageNumber=${page}` : `api/v1/messages`, [
    "message",
  ])

  return userMessagesResponse
}

export const getAllUserSubscriptions = async () => {
  const userSubscriptions = await baseQuery(`subscriptions`, ["sub"])

  return userSubscriptions
}

export const getAllProductsGroup = async () => {
  const groups = await baseQuery<ReturnType<GroupType[]>>(
    `api/v1/productsGroup`,
    ["productGroup"]
  )

  return groups
}
