import DataPagination from "@/components/DataPagination"
import Modal from "@/components/Modal"
import SearchForm from "@/components/SearchForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { getAllUserMessages } from "@/fetchers"
import { Trash } from "lucide-react"
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
          <TableRow key={message.id}>
            <TableCell className="py-4 px-6">{message.id}</TableCell>
            <TableCell className="py-4 px-6">{message.name}</TableCell>
            <TableCell className="py-4 px-6">{message.email}</TableCell>
            <TableCell className="py-4 px-6">{message.phone}</TableCell>
            <TableCell className="py-4 px-6">{message.createdAt}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Modal
                  triggerText={"رؤية الرسالة"}
                  triggerProps={{
                    className:
                      "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                  }}
                >
                  <p className="text-xl">{message.createdAt}</p>
                </Modal>
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="حذف الرسالة"
                >
                  <Trash size={15} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <div className="text-end">
        <DataPagination />
      </div>
    </Tile>
  )
}
export default MessagesPage
