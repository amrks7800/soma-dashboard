import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import Providers from "@/components/Providers"
import { Toaster } from "@/components/ui/toaster"

const cairo = Cairo({ subsets: ["latin", "arabic"] })

export const metadata: Metadata = {
  title: "elaf-dashboard",
  description: "dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cairo.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
