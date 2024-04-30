import { Color, FilterOption, Product, SidebarItem, TUser } from "@/types"
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

export const productsData: Product[] = [
  {
    id: 342,
    imageUrl:
      "https://utfs.io/f/ca0c8e98-b523-47b5-8183-eb8a602e5774-n7tc0m.png", // Replace with actual image URL
    productName: "Product 1",
    price: 72.87, // Random price
    availableQuantity: 7, // Random stock
    discount: 12, // Random discount percentage
    available: true, // Random availability
    archiveImageUrl: "",
    subImagesUrls: [""],
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
    archiveImageUrl: "",
    subImagesUrls: [""],
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
    archiveImageUrl: "",
    subImagesUrls: [""],
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
    archiveImageUrl: "",
    subImagesUrls: [""],
  },
]

export const colorsData: Color[] = [
  {
    id: 1,
    nameAr: "أبيض", // Abiad - White
    hex: "#ffffff",
  },
  {
    id: 2,
    nameAr: "أسود", // Aswad - Black
    hex: "#000000",
  },
  {
    id: 3,
    nameAr: "أحمر", // Ahmar - Red
    hex: "#ff0000",
  },
  {
    id: 4,
    nameAr: "أخضر", // Akhdar - Green
    hex: "#00ff00",
  },
  {
    id: 5,
    nameAr: "أزرق", // Azraq - Blue
    hex: "#0000ff",
  },
  {
    id: 6,
    nameAr: "برتقالي", // Burtuqali - Orange
    hex: "#ffa500",
  },
  {
    id: 7,
    nameAr: "أصفر", // Asfar - Yellow
    hex: "#ffff00",
  },
  {
    id: 8,
    nameAr: "وردي", // Wardi - Pink
    hex: "#ffc0cb",
  },
  {
    id: 9,
    nameAr: "بني", // Bunni - Brown
    hex: "#a52a2a",
  },
  {
    id: 10,
    nameAr: "رمادي", // Ramadi - Gray
    hex: "#808080",
  },
  // ... You can add more colors here following the same structure
]

export const sectionsData = [
  {
    id: 1,
    nameAr: "إلكترونيات", // Electronics (Arabic)
    nameEn: "Electronics", // Electronics (English)
    available: true,
    description:
      "Find a wide variety of electronics including TVs, laptops, smartphones, and more.",
  },
  {
    id: 2,
    nameAr: "أزياء رجالية", // Men's Fashion (Arabic)
    nameEn: "Men's Fashion", // Men's Fashion (English)
    available: true,
    description: "Shop for clothing, shoes, and accessories for men.",
  },
  {
    id: 3,
    nameAr: "أزياء نسائية", // Women's Fashion (Arabic)
    nameEn: "Women's Fashion", // Women's Fashion (English)
    available: true,
    description:
      "Discover the latest trends in women's clothing, shoes, and accessories.",
  },
  {
    id: 4,
    nameAr: "ألعاب وأطفال", // Toys & Kids (Arabic)
    nameEn: "Toys & Kids", // Toys & Kids (English)
    available: true,
    description:
      "Explore a fun selection of toys, games, and everything for kids.",
  },
  {
    id: 5,
    nameAr: "منزل ومطبخ", // Home & Kitchen (Arabic)
    nameEn: "Home & Kitchen", // Home & Kitchen (English)
    available: true,
    description:
      "Equip your home with furniture, appliances, and kitchen essentials.",
  },
  {
    id: 6,
    nameAr: "جمال وصحة", // Beauty & Health (Arabic)
    nameEn: "Beauty & Health", // Beauty & Health (English)
    available: false, // This category is temporarily unavailable
    description:
      "Browse makeup, skincare, toiletries, and health products. (Currently unavailable)",
  },
  {
    id: 7,
    nameAr: "رياضة وترفيه", // Sports & Entertainment (Arabic)
    nameEn: "Sports & Entertainment", // Sports & Entertainment (English)
    available: true,
    description:
      "Find everything you need for your active lifestyle and entertainment.",
  },
  // ... You can add more categories here following the same structure
]

export const categoriesData = [
  {
    id: 1,
    nameAr: "إلكترونيات", // Electronics (Arabic)
    nameEn: "Electronics", // Electronics (English)
    available: true,
    description:
      "Find a wide variety of electronics including TVs, laptops, smartphones, and more.",
  },
  {
    id: 2,
    nameAr: "أزياء رجالية", // Men's Fashion (Arabic)
    nameEn: "Men's Fashion", // Men's Fashion (English)
    available: true,
    description: "Shop for clothing, shoes, and accessories for men.",
  },
  {
    id: 3,
    nameAr: "أزياء نسائية", // Women's Fashion (Arabic)
    nameEn: "Women's Fashion", // Women's Fashion (English)
    available: true,
    description:
      "Discover the latest trends in women's clothing, shoes, and accessories.",
  },
  {
    id: 4,
    nameAr: "ألعاب وأطفال", // Toys & Kids (Arabic)
    nameEn: "Toys & Kids", // Toys & Kids (English)
    available: true,
    description:
      "Explore a fun selection of toys, games, and everything for kids.",
  },
  {
    id: 5,
    nameAr: "منزل ومطبخ", // Home & Kitchen (Arabic)
    nameEn: "Home & Kitchen", // Home & Kitchen (English)
    available: true,
    description:
      "Equip your home with furniture, appliances, and kitchen essentials.",
  },
  {
    id: 6,
    nameAr: "جمال وصحة", // Beauty & Health (Arabic)
    nameEn: "Beauty & Health", // Beauty & Health (English)
    available: false, // This category is temporarily unavailable
    description:
      "Browse makeup, skincare, toiletries, and health products. (Currently unavailable)",
  },
  {
    id: 7,
    nameAr: "رياضة وترفيه", // Sports & Entertainment (Arabic)
    nameEn: "Sports & Entertainment", // Sports & Entertainment (English)
    available: true,
    description:
      "Find everything you need for your active lifestyle and entertainment.",
  },
  // ... You can add more categories here following the same structure
]

export const messagesData = [
  {
    id: 1,
    message: "Hi there! How can I help you today?",
    sender: {
      name: "Customer Support",
      email: "support@yourstore.com",
      phone: "+1234567890",
    },
    date: new Date(2024, 4, 28).toDateString(), // Today's date
  },
  {
    id: 2,
    message: "Just placed an order, wanted to confirm the delivery timeframe.",
    sender: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+9876543210",
    },
    date: new Date(2024, 4, 27).toDateString(), // Yesterday's date
  },
  {
    id: 3,
    message: "Do you offer a return policy for a product I recently purchased?",
    sender: {
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "", // Optional phone number
    },
    date: new Date(2024, 4, 25).toDateString(), // Two days ago
  },
  // ... You can add more messages here following the same structure
]

export const subscribersData = [
  {
    id: "#1",
    email: "user1@example.com",
  },
  {
    id: "#2",
    email: "user2@domain.com",
  },
  {
    id: "#3",
    email: "john.smith@company.org",
  },
  {
    id: "#4",
    email: "jane.doe@email.net",
  },
  // ... Add more objects following the same structure
]

const today = new Date()

export const couponsData = [
  {
    id: 1,
    couponCode: "FREESHIP10",
    couponType: "free_delivery",
    discountValue: null,
    expiryDate: today.setDate(today.getDate() + 30).toLocaleString("en-US"), // Expiry in 30 days
    numberOfUsers: 100,
  },
  {
    id: 2,
    couponCode: "SUMMER20",
    couponType: "discount",
    discountValue: 20,
    expiryDate: today.setDate(today.getDate() + 15).toLocaleString("en-US"), // Expiry in 15 days
    numberOfUsers: 50,
  },
  {
    id: 3,
    couponCode: "FALLSAVE15",
    couponType: "discount",
    discountValue: 15,
    expiryDate: today.setDate(today.getDate() + 60).toLocaleString("en-US"), // Expiry in 60 days
    numberOfUsers: 200,
  },
  // ... You can add more coupons here following the same structure
]

export const reviewsData = [
  {
    id: 1,
    username: "John Doe",
    productName: "Wireless Headphones",
    comment:
      "Great sound quality and comfortable to wear. Battery life is also good.",
    rate: 5,
    likes: 12,
    dislikes: 2,
  },
  {
    id: 2,
    username: "Jane Smith",
    productName: "Running Shoes",
    comment:
      "These shoes are perfect for my daily runs. They provide good support and are very lightweight.",
    rate: 4,
    likes: 8,
    dislikes: 1,
  },
  {
    id: 3,
    username: "Alice Walker",
    productName: "Smartwatch",
    comment:
      "The watch has a lot of features, but the battery life could be better. Overall, I'm happy with it.",
    rate: 3,
    likes: 5,
    dislikes: 4,
  },
  {
    id: 4,
    username: "Bob Jones",
    productName: "Laptop",
    comment:
      "This laptop is very fast and powerful. The screen is also very clear and bright.",
    rate: 5,
    likes: 15,
    dislikes: 0,
  },
  {
    id: 5,
    username: "David Lee",
    productName: "Camera",
    comment:
      "The camera takes great pictures, but it's a bit bulky and heavy to carry around.",
    rate: 4,
    likes: 7,
    dislikes: 3,
  },
  // ... Add more reviews here following the same structure
]

export const accountsData = [
  {
    id: 1,
    username: "John Doe",
    orderId: "#ABC123",
    orderDate: new Date(2024, 3, 15).toDateString(), // Order date (March 15, 2024)
    totalCost: 78.99,
    promocode: "SPRING10",
  },
  {
    id: 2,
    username: "Jane Smith",
    orderId: "#DEF456",
    orderDate: new Date(2024, 4, 20).toDateString(), // Order date (April 20, 2024)
    totalCost: 125.42,
    promocode: "", // No promo code used
  },
  {
    id: 3,
    username: "Alice Walker",
    orderId: "#GHI789",
    orderDate: new Date(2024, 4, 12).toDateString(), // Order date (April 12, 2024)
    totalCost: 49.95,
    promocode: "FREESHIP",
  },
  // ... Add more reviews here following the same structure
]

export const whoAreUsPageData = [
  {
    id: 1,
    title: "Great Product!",
    description:
      "This product is exactly what I was looking for. It works perfectly and is very easy to use.",
    imageUrl: "https://via.placeholder.com/200/778899?text=Review+Image+1", // Replace with actual image URL
    visible: true,
  },
  {
    id: 2,
    title: "Not impressed",
    description:
      "The product arrived damaged and didn't meet my expectations. Disappointed.",
    imageUrl: "https://via.placeholder.com/150/ff0000?text=Review+Image+2", // Replace with actual image URL
    visible: false, // This review might be hidden due to negative content
  },
  {
    id: 3,
    title: "Would recommend",
    description:
      "Overall, a good product for the price. I'm happy with my purchase.",
    imageUrl: "https://via.placeholder.com/300/00ff00?text=Review+Image+3", // Replace with actual image URL
    visible: true,
  },
  {
    id: 4,
    title: "Awaiting Delivery",
    description: "Haven't received the product yet, so I can't write a review.",
    imageUrl: "https://via.placeholder.com/300/853f9c?text=Review+Image+3", // No image provided yet
    visible: true, // Might be hidden until the review is complete
  },
  // ... Add more reviews here following the same structure
]

export const bannersData = [
  {
    id: 1,
    pageName: "Home",
    description: "The main landing page of the website.",
    imageUrl: "https://via.placeholder.com/300x200?text=Home+Page", // Replace with desired size
    visible: true,
  },
  {
    id: 2,
    pageName: "About Us",
    description: "Company information, mission, and team members.",
    imageUrl: "https://via.placeholder.com/250?text=About+Us", // Replace with desired size
    visible: true,
  },
  {
    id: 3,
    pageName: "Products",
    description: "Browse and explore all our available products.",
    imageUrl: "https://via.placeholder.com/400x300?text=Products", // Replace with desired size
    visible: true,
  },
  {
    id: 4,
    pageName: "Contact Us",
    description: "Find our contact details and reach out to us.",
    imageUrl: "https://via.placeholder.com/350?text=Contact+Us", // Replace with desired size
    visible: true,
  },
  {
    id: 5,
    pageName: "FAQ",
    description: "Frequently Asked Questions and Answers.",
    imageUrl: "https://via.placeholder.com/200x150?text=FAQ", // Replace with desired size
    visible: true,
  },
  // ... Add more pages here following the same structure
]
