import { FC, ReactNode } from "react"

type Props = {
  title: string
  subtitle: string
  icon: ReactNode
  accentColor: string
}

const StatisticCard: FC<Props> = ({ accentColor, icon, subtitle, title }) => {
  return (
    <div className="shadow-main rounded-md bg-white p-6 flex items-center justify-between">
      <div
        className={`grid place-content-center w-14 rounded-full aspect-square ${accentColor}`}
      >
        {icon}
      </div>
      <div className="space-y-4 text-end">
        <h2 className="text-sm text-gray-500">{title}</h2>
        <h3 className="text-black font-semibold">{subtitle}</h3>
      </div>
    </div>
  )
}
export default StatisticCard
