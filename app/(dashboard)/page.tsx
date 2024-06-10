import StatisticCard from "@/components/StatisticCard"
import Tile from "@/components/Tile"
import SearchForm from "@/components/SearchForm"
import DataTable from "@/components/data-table"
import { Clock, CreditCard, ShoppingBag, Users } from "lucide-react"
import DataPagination from "@/components/DataPagination"
import { getUsers } from "@/fetchers"
import UserTableRow from "@/components/UserTableRow"
import { Suspense } from "react"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: Props) {
  const users = await getUsers(searchParams.name as string)

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
      <Tile className="flow mb-5">
        <header className="flex items-center justify-between flex-wrap">
          <h2 className="text-lg font-[600]">العملاء</h2>
          <Suspense fallback="loading...">
            <SearchForm placeholder="أدخل اسم العميل" queryName="name" />
          </Suspense>
        </header>
        <Suspense fallback="loading...">
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
            {users?.data?.result.map((user, idx) => (
              <UserTableRow user={user} key={user.id} number={idx + 1} />
            ))}
          </DataTable>
        </Suspense>
        <div className="text-start">
          <Suspense fallback="loading...">
            <DataPagination />
          </Suspense>
        </div>
      </Tile>
    </div>
  )
}
