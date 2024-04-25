import StatisticCard from "@/components/StatisticCard"
import { Clock, CreditCard, ShoppingBag, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="bg">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
    </div>
  )
}
