import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/Providers"
import { dashboardLinks } from "@/constants"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="h-screen overflow-auto grid grid-cols-[280px_1fr]">
            <Sidebar
              sidebarProps={{
                className: "",
              }}
              title="soma-dashboard"
              items={dashboardLinks}
            />
            <div className="container py-4">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
