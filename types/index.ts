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
  group:
    | {
        id: string
        products: {
          id: string
          mainImage: string
          colorName: string
          productName: string
        }[]
      }
    | undefined
  productImages: Image[]
}

type Image = {
  id: string
  imageUrl: string
}

export type Category = {
  id: string
  categoryNameAr: string
  categoryNameEn: string
  description: string
  logoUrl: string
}

export type Coupon = {
  id: string
  code: string
  voucherTypeId: number
  discountPrice: string
  discountPrecentage: null | number
  discountLimit: string
  productCount: number
  expireDate: string
  userCount: number
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
  totalItems?: number
  totalPages?: number
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
  message?: string
}

export type Review = {
  id: string
  productReviews: string[]
  likesCount: number
  dislikesCount: number
}

export type UserSubscription = {
  id: string
  email: string
}

export type CouponQueryArgs = {
  productCount: number
  userCount: number
  voucherTypeId: 0 | 1
  expireDate: string
  discountPrice: string
  discountPercentage: string
  discountLimit: string
}
