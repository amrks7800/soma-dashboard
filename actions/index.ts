"use server"

import { baseMutation } from "@/lib/utils"
import { CouponQueryArgs } from "@/types"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const login = async (formData: FormData) => {
  const email = "System.admin@elaf.com"
  const password = "P@ssw0rd"

  const data = await baseMutation("POST", "login", { email, password })

  console.log(data)
}

export const deleteProductByID = async (id: string) => {
  const product = await baseMutation("PUT", `api/v1/deleteProduct/${id}`)

  return product
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
  const result = await baseMutation("POST", `api/v1/product`, formData)

  console.log(result.error)

  revalidateTag("product")

  if (result.success) redirect("/products")

  return result
}

export const editProduct = async (formData: FormData, id: string) => {
  console.log("new product", formData)

  const result = await baseMutation("PUT", `api/v1/product/${id}`, formData)

  console.log(result.error)

  revalidateTag("product")

  if (result.success) redirect("/products")

  return result
}

export const editGroupByID = async (id: string, name: string) => {
  const result = await baseMutation("PUT", `api/v1/productGroup/${id}`, {
    name,
  })

  revalidateTag("productGroup")

  return result
}

export const addNewGroup = async (name: string) => {
  const result = await baseMutation("POST", `api/v1/productGroup`, {
    name,
  })

  revalidateTag("productGroup")

  return result
}

export const deleteGroupByID = async (id: string) => {
  const result = await baseMutation("DELETE", `api/v1/deleteProductGroup/${id}`)

  revalidateTag("productGroup")
}

export const addProductModule = async (formData: FormData) => {
  const result = await baseMutation("POST", `api/v1/productModule`, formData)

  revalidateTag("module")

  return result
}

export const editProductModule = async (formData: FormData, id: string) => {
  const result = await baseMutation(
    "PUT",
    `api/v1/updateProductModule/${id}`,
    formData
  )

  revalidateTag("module")

  return result
}

export const deleteUserMessageByID = async (id: string) => {
  const userMessage = await baseMutation("PUT", `api/v1/messages/${id}`)

  console.log(userMessage)

  revalidateTag("message")

  return userMessage
}

export const deleteUserSubscriptionByID = async (id: string) => {
  const result = await baseMutation("DELETE", `api/v1/subscriptions/${id}`)

  revalidateTag("sub")

  console.log(result)

  return result
}

export const addNewCoupon = async (coupon: CouponQueryArgs) => {
  const result = await baseMutation("POST", `api/v1/coupon`, coupon)

  console.log(result)

  revalidateTag("coupon")

  return result
}

export const editCouponByID = async (id: string, coupon: CouponQueryArgs) => {
  const result = await baseMutation("PUT", `api/v1/coupon/${id}`, coupon)

  console.log(result)

  revalidateTag("coupon")

  return result
}

export const deleteCouponByID = async (id: string) => {
  const result = await baseMutation("PUT", `api/v1/deleteCoupon/${id}`)

  console.log(result)

  revalidateTag("coupon")

  return result
}
