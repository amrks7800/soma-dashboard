import { FC, ReactNode } from "react"

type Props = {
  title: string
  subtitle: string
  icon: ReactNode
  accentColor: string
}

const StatisticCard: FC<Props> = ({ accentColor, icon, subtitle, title }) => {
  return (
    <div className="rounded-md bg-white dark:bg-secondary p-6 flex items-center justify-between shadow-tile">
      <div
        className={`grid place-content-center w-14 rounded-full aspect-square ${accentColor}`}
      >
        {icon}
      </div>
      <div className="space-y-4 text-end">
        <h2 className="text-sm text-gray-500 dark:text-gray-300">{title}</h2>
        <h3 className="text-black font-semibold dark:text-white">{subtitle}</h3>
      </div>
    </div>
  )
}
export default StatisticCard
