import Modal from "./Modal"
import { TableCell, TableRow } from "./ui/table"
import { Trash } from "lucide-react"
import { FC } from "react"
import { getUserMessageByID } from "@/fetchers"
import { Button } from "./ui/button"
import { deleteUserMessageByID } from "@/actions"
import DeleteButton from "./DeleteButton"

type Props = {
  id: string
}

const MessageRow: FC<Props> = async ({ id }) => {
  const { data } = await getUserMessageByID(id)

  console.log(data)

  return (
    <TableRow key={data?.result[0]?.id}>
      <TableCell className="py-4 px-6">{1}</TableCell>
      <TableCell className="py-4 px-6">{data?.result[0]?.name}</TableCell>
      <TableCell className="py-4 px-6">{data?.result[0]?.email}</TableCell>
      <TableCell className="py-4 px-6">{data?.result[0]?.phone}</TableCell>
      <TableCell className="py-4 px-6">{data?.result[0]?.createdAt}</TableCell>
      <TableCell className="py-4 px-6">
        <div className="flex items-center gap-2">
          <Modal
            triggerText={"رؤية الرسالة"}
            triggerProps={{
              className:
                "py-2 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
            }}
          >
            <p className="text-xl">{data?.result[0]?.message}</p>
          </Modal>
          <form
            action={async () => {
              "use server"
              await deleteUserMessageByID(data?.result[0].id || "")
            }}
          >
            <DeleteButton />
          </form>
        </div>
      </TableCell>
    </TableRow>
  )
}
export default MessageRow
