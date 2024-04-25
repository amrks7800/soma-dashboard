import { SidebarItem, TUser } from "@/types"
import {
  Calculator,
  Contact,
  Disc,
  GitCommitVerticalIcon,
  Grid3X3,
  HomeIcon,
  Landmark,
  ListTodo,
  MessageCircleCode,
  Notebook,
  Palette,
  Plus,
  SearchSlashIcon,
  ShoppingBag,
  Truck,
  TruckIcon,
  User,
} from "lucide-react"

export const dashboardLinks: SidebarItem[] = [
  {
    text: "لوحة التحكم",
    icon: <HomeIcon size={18} color="#6b7b93" />,
    link: "/",
    menu: false,
  },
  {
    text: "الطلبات",
    icon: <Truck size={18} color="#6b7b93" />,
    link: "/orders",
    menu: false,
  },
  {
    text: "المنتجات",
    icon: <Grid3X3 size={18} color="#6b7b93" />,
    link: "/products",
    menu: true,
    menuItems: [
      {
        text: "المنتجات",
        icon: <ListTodo size={18} color="#6b7b93" />,
        link: "/products",
      },
      {
        text: "اضافة منتجات",
        icon: <ShoppingBag size={18} color="#6b7b93" />,
        link: "/products/new",
      },
      {
        text: "الألوان",
        icon: <Palette size={18} color="#6b7b93" />,
        link: "/colors",
      },
    ],
  },
  {
    text: "الأقسام و الفئات",
    icon: <SearchSlashIcon size={18} color="#6b7b93" />,
    link: "/products",
    menu: true,
    menuItems: [
      {
        text: "اضافة أقسام",
        icon: <Plus size={18} color="#6b7b93" />,
        link: "/category/add",
      },
      {
        text: "اضافة فئات",
        icon: <Plus size={18} color="#6b7b93" />,
        link: "/subcategory/add",
      },
    ],
  },
  {
    text: "رسائل المستخدمين",
    icon: <MessageCircleCode size={18} color="#6b7b93" />,
    link: "/messages",
    menu: false,
    count: true,
  },
  {
    text: "الاشتراكات",
    icon: <TruckIcon size={18} color="#6b7b93" />,
    link: "/subscribe",
    menu: false,
    count: true,
  },
  {
    text: "الكوبونات",
    icon: <Disc size={18} color="#6b7b93" />,
    link: "/coupons",
    menu: false,
  },
  {
    text: "المراجعات و التقييمات",
    icon: <GitCommitVerticalIcon size={18} color="#6b7b93" />,
    link: "/reviews",
    menu: false,
  },
  {
    text: "حسابات الموقع",
    icon: <Calculator size={18} color="#6b7b93" />,
    link: "/finance",
    menu: false,
  },
  {
    text: "الصفحات",
    icon: <Notebook size={18} color="#6b7b93" />,
    link: "/pages",
    menu: true,
    menuItems: [
      {
        text: "صفحة من نحن",
        icon: <User size={18} color="#6b7b93" />,
        link: "/pages/intro",
      },
      {
        text: "بانرات الصفحة الرئيسية",
        icon: <Landmark size={18} color="#6b7b93" />,
        link: "/pages/main",
      },
      {
        text: "تعديل وسائل التواصل",
        icon: <Contact size={18} color="#6b7b93" />,
        link: "/pages/contact",
      },
    ],
  },
]

export const userData: TUser[] = [
  {
    id: 1,
    firstName: "John", // Replace with actual first name
    lastName: "Doe", // Replace with actual last name
    email: "johndoe@example.com", // Replace with actual email address
    profileCreationDate: new Date().toDateString(), // Current date and time
  },
  {
    id: 2,
    firstName: "Alice", // This will be random based on the firstNames array
    lastName: "Smith", // This will be random based on the lastNames array
    email: "Alice.Smith@example.com", // Email constructed from first and last name
    profileCreationDate: "2024-04-25T...", // Random date within the last 30 days
  },
  {
    id: 3,
    firstName: "Bob", // This will be random based on the firstNames array
    lastName: "Johnson", // This will be random based on the lastNames array
    email: "Bob.Johnson@example.com", // Email constructed from first and last name
    profileCreationDate: "2024-04-23T...", // Random date within the last 30 days
  },
]
