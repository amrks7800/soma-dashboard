import DataPagination from "@/components/DataPagination"
import MessageRow from "@/components/MessageRow"
import SearchForm from "@/components/SearchForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { getAllUserMessages } from "@/fetchers"
import { Suspense } from "react"

const MessagesPage = async () => {
  const messages = await getAllUserMessages(1)

  console.log(messages.data)

  return (
    <Tile className="flow">
      <header className="flex items-center justify-between flex-wrap">
        <h2 className="text-lg font-[600]">الرسائل</h2>
        <Suspense fallback="loading...">
          <SearchForm placeholder="أدخل اسم الشخص" />
        </Suspense>
      </header>
      <DataTable
        headers={[
          "ID",
          "الاسم",
          "البريد الالكتروني",
          "رقم الهاتف",
          "وقت الرسالة",
          "",
        ]}
      >
        {messages.data?.result.map(message => (
          <MessageRow id={message.id} key={message.id} />
        ))}
      </DataTable>
      <div className="text-end">
        <Suspense fallback="loading...">
          <DataPagination pagesCount={messages.data?.totalPages} />
        </Suspense>
      </div>
    </Tile>
  )
}
export default MessagesPage
