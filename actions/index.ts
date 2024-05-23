"use server"

import { baseMutation } from "@/lib/utils"
import { Category } from "@/types"
import { revalidateTag } from "next/cache"

export const login = async (formData: FormData) => {
  // const email = formData.get("email") as string
  // const password = formData.get("password") as string

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

  console.log(result)

  revalidateTag("category")
}
