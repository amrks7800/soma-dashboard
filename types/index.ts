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
  id: string
  productName: string
  productReviews: string[]
  price: string
  mainImage: string
  coverImage: string
  header: string
  productCapacity: number
  discountPrice: number
  createdAt: string
  totalRates: string | null
  ratedUsersCount: string | null
  description: string
  colorName: string
  categoryId: string
  category: {
    categoryNameAr: string
    categoryNameEn: string
    productModules: string[]
  }
  group: string | undefined
  productImages: string[]
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
  id: string
  name: string
  createdAt: string
  createdBy: string
  deletedAt: string | null
  deletedBy: string | null
}

export type ReturnType<T extends {}> = {
  message: string
  result: T
  statusEnum: number
}

export type ProductsQueryReturnType = ReturnType<Product[]>

export type Module = {
  productName: string
  logoUrl: string
  createdBy: string
  categoryId: string
  id: string
}

export type Message = {
  id: string
  name: string
  email: string
  createdAt: string
  phone: string
}
