import { ReactNode } from "react"

export type SidebarItem = {
  text: string
  icon: ReactNode
  link: string
  menu: boolean
  menuItems?: SidebarMenuItem[]
  count?: boolean
}
export type SidebarMenuItem = {
  text: string
  icon: ReactNode
  link: string
}

export type TUser = {
  id: string
  name: string
  email: string
  createdAt: string
}

export type FilterOption = {
  id: number
  title: string
}

export type Color = {
  nameAr: string
  hex: string
  id: number
}

export type Product = {
  productName: string
  productReviews: string
  price: string
  discountPrice: number | null
  createdAt: string
  totalRates: number | null
  ratedUsersCount: number | null
  description: string
  colorName: string
  id: string
  productImages: string
  mainImage: string
  coverImage: string
  header: string
  productCapacity?: number
  group: null | string
}

export type Category = {
  id: string
  categoryNameAr: string
  categoryNameEn: string
  description: string
  logoUrl: string
}

export type Coupon = {
  id: number
  couponCode: string
  couponType: string
  discountValue: number
  expiryDate: string
  numberOfUsers: number
}

export type Paragraph = {
  id: number
  title: string
  description: string
  imageUrl: string
  visible: boolean
}

export type GroupType = {
  name: string
  description: string
}

export type ReturnType<T extends {}> = {
  message: string
  result: T
  statusEnum: number
}

export type ProductsQueryReturnType = ReturnType<Product[]>
