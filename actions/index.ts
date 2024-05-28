"use server"

import { baseMutation } from "@/lib/utils"
import { revalidateTag } from "next/cache"

export const login = async (formData: FormData) => {
  const email = "System.admin@elaf.com"
  const password = "P@ssw0rd"

  const data = await baseMutation("POST", "login", { email, password })

  console.log(data)
}

export const deleteProductByID = async (id: string) => {
  try {
    const product = await baseMutation("PUT", `api/v1/deleteProduct/${id}`)

    return product
  } catch (err) {
    console.log(err)
  }
}

export const deleteUserByID = async (id: string) => {
  await baseMutation("PUT", `api/v1/deleteUser/${id}`)
}

export const addCategory = async (formData: FormData) => {
  const result = await baseMutation("POST", `api/v1/category`, formData)

  revalidateTag("category")

  return result
}

export const editCategory = async (formData: FormData, id: string) => {
  const result = await baseMutation("PUT", `api/v1/category/${id}`, formData)

  revalidateTag("category")

  return result
}

export const deleteCategoryByID = async (id: string) => {
  const result = await baseMutation("PUT", `api/v1/deleteCategory/${id}`)

  revalidateTag("category")

  return result
}

export const addProduct = async (formData: FormData) => {
  // const data = new FormData()

  // data.append("mainImage", formData.get("mainImage") as string)
  // data.append("coverImage", formData.get("coverImage") as string)
  // data.append("files", formData.get("files") as string)
  // data.append("productName", formData.get("productName") as string)
  // data.append("price", formData.get("price") as string)
  // data.append("productCapacity", formData.get("productCapacity") as string)
  // data.append("discountPrice", formData.get("discountPrice") as string)
  // data.append("header", formData.get("header") as string)
  // data.append("description", formData.get("description") as string)
  // data.append("categoryId", formData.get("categoryId") as string)
  // data.append("groupId", formData.get("groupId") as string)
  // data.append("colorName", formData.get("colorName") as string)

  const result = await baseMutation("POST", `api/v1/product`, formData)

  console.log(result)

  revalidateTag("product")

  return result
}
