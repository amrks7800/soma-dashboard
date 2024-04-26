import { FilterOption, SidebarItem, TUser } from "@/types"
import {
  Calculator,
  Contact,
  Disc,
  GitCommitVerticalIcon,
  Grid3X3,
  Group,
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
      {
        text: "اضافة مجموعة",
        icon: <Group size={18} color="#6b7b93" />,
        link: "/product/group",
      },
    ],
  },
  {
    text: "الأقسام و الفئات",
    icon: <SearchSlashIcon size={18} color="#6b7b93" />,
    link: "/category",
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

export const filterOptions: FilterOption[] = [
  { id: 0, title: "قيد الانتظار" },
  { id: 1, title: "قيد التأكيد" },
  { id: 2, title: "قيد التسليم" },
  { id: 3, title: "تم التسليم" },
]

export const orderSlug = [
  "قيد الانتظار (في انتظار تأكيد العميل )",
  "قيد التأكيد (في انتظار تأكيد الموقع)",
  "قيد التسليم ( خاصه بطباعه الطلبات للتسليم الى شركة الشحن)",
  "طلبات تم تسليمها الي العميل",
]

export const ordersData = [
  {
    orderNumber: "#12345",
    userName: "John Doe",
    orderDate: new Date(2024, 3, 20).toDateString(), // Example date (April 20, 2024)
    totalCost: 45.99,
    deliveryCost: 5.0,
    address: "123 Main Street, Anytown, CA 12345",
    orderStatus: "waiting",
  },
  {
    orderNumber: "#67890",
    userName: "Jane Smith",
    orderDate: new Date(2024, 3, 22).toDateString(), // Example date (April 22, 2024)
    totalCost: 129.75,
    deliveryCost: 0.0, // Free delivery
    address: "456 Elm Street, Anytown, CA 98765",
    orderStatus: "waiting",
  },
  {
    orderNumber: "#09876",
    userName: "Alice Walker",
    orderDate: new Date(2024, 4, 23).toDateString(), // Example date (today)
    totalCost: 27.5,
    deliveryCost: 3.99,
    address: "789 Oak Lane, Springfield, IL 62704",
    orderStatus: "waiting",
  },
  {
    orderNumber: "#34567",
    userName: "Bob Jones",
    orderDate: new Date(2024, 4, 21).toDateString(), // Example date (two days ago)
    totalCost: 82.14,
    deliveryCost: 0.0, // Free delivery
    address: "1000 Maple Street, Anytown, CA 98765",
    orderStatus: "waiting",
  },
]

export const productsData = [
  {
    id: 342,
    imageUrl:
      "https://utfs.io/f/ca0c8e98-b523-47b5-8183-eb8a602e5774-n7tc0m.png", // Replace with actual image URL
    productName: "Product 1",
    price: 72.87, // Random price
    availableQuantity: 7, // Random stock
    discount: 12, // Random discount percentage
    available: true, // Random availability
  },
  {
    id: 819,
    imageUrl:
      "https://utfs.io/f/3ca553b3-0d69-433a-bd60-9864520bf3ff-jmipy7.png", // Replace with actual image URL
    productName: "Product 2",
    price: 27.14, // Random price
    availableQuantity: 4, // Random stock
    discount: 18, // Random discount percentage
    available: false, // Random availability
  },
  // ... 8 more product objects from previous generation
  {
    id: 123,
    imageUrl:
      "https://utfs.io/f/cdd5f13e-6507-413f-8962-ae16da4a8482-m2cayy.png", // Replace with actual image URL
    productName: "Product 11",
    price: 48.52, // Random price
    availableQuantity: 2, // Random stock
    discount: 5, // Random discount percentage
    available: true, // Random availability
  },
  {
    id: 951,
    imageUrl:
      "https://utfs.io/f/26d55d67-ab8d-4a9e-8eaf-cfd0ae007d72-enwcij.png", // Replace with actual image URL
    productName: "Product 12",
    price: 93.78, // Random price
    availableQuantity: 9, // Random stock
    discount: 15, // Random discount percentage
    available: false, // Random availability
  },
]
