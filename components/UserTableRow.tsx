import { FC } from "react"
import { TableCell, TableRow } from "@/components/ui/table"
import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { deleteUserByID } from "@/actions"
import { revalidateTag } from "next/cache"
import { TUser } from "@/types"

type Props = {
  user: TUser
  number: number
}

const UserTableRow: FC<Props> = ({ user, number }) => {
  const [firstName, lastName] = user.name.split(" ")
  return (
    <TableRow>
      <TableCell className="py-4 px-6">{number}</TableCell>
      <TableCell className="py-4 px-6">{firstName}</TableCell>
      <TableCell className="py-4 px-6">{lastName}</TableCell>
      <TableCell className="py-4 px-6">{user.email}</TableCell>
      <TableCell className="py-4 px-6">{user.createdAt}</TableCell>
      <TableCell className="py-4 px-6">
        <form
          action={async () => {
            "use server"
            await deleteUserByID(user.id)
            revalidateTag("user")
          }}
        >
          <Button className="aspect-square w-[50px]" variant={"outline"}>
            <Trash size={15} />
          </Button>
        </form>
      </TableCell>
    </TableRow>
  )
}
export default UserTableRow
