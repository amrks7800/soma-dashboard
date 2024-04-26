import StatisticCard from "@/components/StatisticCard"
import Tile from "@/components/Tile"
import SearchForm from "@/components/SearchForm"
import DataTable from "@/components/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { Clock, CreditCard, ShoppingBag, Trash, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import DataPagination from "@/components/DataPagination"

// replace those mock user data with your api
import { userData } from "@/constants"

export default function Home() {
  return (
    <div className="flow">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatisticCard
          title="عدد المنتجات"
          subtitle="263"
          icon={<ShoppingBag size={25} color="white" />}
          accentColor="bg-accent-orange"
        />
        <StatisticCard
          title="الطلبات المنتظرة"
          subtitle="3"
          icon={<Clock size={25} color="white" />}
          accentColor="bg-primary-blue"
        />
        <StatisticCard
          title="عدد المستخدمين"
          subtitle="68"
          icon={<Users size={25} color="white" />}
          accentColor="bg-accent-indigo"
        />
        <StatisticCard
          title="الأجمالي"
          subtitle="0 ر.س"
          icon={<CreditCard size={25} color="white" />}
          accentColor="bg-accent-pink"
        />
      </div>
      <Tile className="flow">
        <header className="flex items-center justify-between flex-wrap">
          <h2 className="text-lg font-[600]">العملاء</h2>
          <SearchForm placeholder="أدخل اسم العميل" />
        </header>
        <DataTable
          headers={[
            "ID",
            "الاسم الاول",
            "الاسم الاخير",
            "البريد الالكتروني",
            "تاريخ انشاء الحساب",
            "",
          ]}
        >
          {userData.map(user => (
            <TableRow key={user.id}>
              <TableCell className="py-4 px-6">{user.id}</TableCell>
              <TableCell className="py-4 px-6">{user.firstName}</TableCell>
              <TableCell className="py-4 px-6">{user.lastName}</TableCell>
              <TableCell className="py-4 px-6">{user.email}</TableCell>
              <TableCell className="py-4 px-6">
                {user.profileCreationDate}
              </TableCell>
              <TableCell className="py-4 px-6">
                <Button className="aspect-square w-[50px]" variant={"outline"}>
                  <Trash size={15} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </DataTable>
        <div className="text-start">
          <DataPagination />
        </div>
      </Tile>
    </div>
  )
}
