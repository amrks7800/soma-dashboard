import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios, { AxiosError } from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjOTYwMzk5LTRhZWItNDgzNi04ZTk1LTUyYWYxOTBjYzZlYiIsImlhdCI6MTcxODAzNjAwNiwiZXhwIjoxNzIwNjI4MDA2fQ.L8Vb1mW-yJypr0SqOFrt8JVR8uWW8sVCanKy96iAHRs"

axios.defaults.headers["authorization"] = `bearer ${token}`

export async function baseQuery<T extends {}>(
  url: string,
  tags: string[] = [""]
) {
  try {
    const promise = await fetch(`https://elaf-backend.onrender.com/${url}`, {
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
    return {
      success: false,
      error: (err as Error).message,
      data: null,
    }
  }
}

export async function baseMutation<T extends {}>(
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  body?: T
) {
  const axiosMethods = {
    POST: axios.post,
    PUT: axios.put,
    PATCH: axios.patch,
    DELETE: axios.delete,
  }

  try {
    const mutate = axiosMethods[method] || axios.post

    const promise = await mutate(
      `https://elaf-backend.onrender.com/${url}`,
      body,
      {
        headers: {
          "Content-type":
            body instanceof FormData
              ? "multipart/form-data"
              : "application/json",
        },
      }
    )

    console.log(promise.statusText, promise.status)

    const data = promise.data

    return {
      success: true,
      error: null,
      data,
    }
  } catch (err) {
    return {
      success: false,
      error: {
        status: (err as AxiosError).response?.status,
        statusText: (err as AxiosError).response?.statusText,
      },
      data: null,
    }
  }
}

// libs/utils.ts

export const range = (end: number): number[] => {
  return Array.from({ length: end }, (_, i) => i + 1)
}
