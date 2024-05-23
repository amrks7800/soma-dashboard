import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const baseUrl = process.env.API_URL || ""

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3OGFiNDdhLTI0ZGEtNGJkNy04MWE3LTE3ZTFmMDkxMzMzMiIsImlhdCI6MTcxNjQ5MzQ1MSwiZXhwIjoxNzE5MDg1NDUxfQ.w7Ek7GdLOgyiVw3DKj9Qpdp7TRwPWO0OoNLT82VCDUA"

export async function baseQuery<T extends {}>(
  url: string,
  tags: string[] = [""]
) {
  try {
    const promise = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: `bearer ${token}`,
      },
      next: {
        tags,
      },
    })

    if (!promise.ok) throw new Error(`failed ${promise.status}`)

    const data = (await promise.json()) as T

    return {
      success: true,
      error: null,
      data,
    }
  } catch (err) {
    if (err instanceof Error)
      return {
        success: false,
        error: err,
        data: null,
      }
  }
}

export async function baseMutation<T extends {}>(
  method: string,
  url: string,
  body?: T
) {
  try {
    const promise = await fetch(`${baseUrl}${url}`, {
      method,
      body: body instanceof FormData ? body : JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-type":
          body instanceof FormData ? "multipart/form-data" : "application/json",
        authorization: `bearer ${token}`,
      },
    })

    console.log("status", promise.status)

    if (!promise.ok) throw new Error(`failed ${promise.status}`)

    const data = (await promise.json()) as T

    return {
      success: true,
      error: null,
      data,
    }
  } catch (err) {
    if (err instanceof Error)
      return {
        success: false,
        error: err,
        data: null,
      }
  }
}
