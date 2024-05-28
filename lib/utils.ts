import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios, { AxiosError } from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwZTQ5YzZjLWU1NDEtNGY3NS05YjFjLTU4YzRjMTkxM2NiYSIsImlhdCI6MTcxNjkwODgzNiwiZXhwIjoxNzE5NTAwODM2fQ.Kr_7XJIOwvAHiQkQMrpBNOIo6qG7-F08OUNEPIUVmXg"

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
      error: err as Error,
      data: null,
    }
  }
}

export async function baseMutation<T extends {}>(
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  body?: T
) {
  try {
    let caller

    switch (method) {
      case "POST":
        caller = axios.post
        break
      case "PATCH":
        caller = axios.patch
        break
      case "PUT":
        caller = axios.put
        break
      case "DELETE":
        caller = axios.delete
        break
      default:
        caller = axios.post
    }

    const promise = await caller(
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
      error: (err as AxiosError).response,
      data: null,
    }
  }
}
