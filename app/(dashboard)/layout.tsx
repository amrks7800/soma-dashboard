import "../globals.css"
import { dashboardLinks } from "@/constants"
import Sidebar from "@/components/sidebar"
import SidebarHeader from "@/components/SidebarHeader"
import DashboardHeader from "@/components/DashboardHeader"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SidebarHeader />
      <main className="md:grid md:grid-cols-[250px_1fr] dashboard">
        <Sidebar
          sidebarProps={{
            className: "",
          }}
          title="elaf-dashboard"
          items={dashboardLinks}
        />
        <div>
          <DashboardHeader />

          <div className="screen-minus-headers overflow-auto">
            <div className="">
              <div className="container py-4 bg-light-blue dark:bg-primary-dark">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
