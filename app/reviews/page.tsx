import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { reviewsData } from "@/constants"
import { Trash } from "lucide-react"

const ReviewsPage = () => {
  return (
    <Tile>
      <DataTable
        headers={[
          "#",
          "اسم المستخدم",
          "المنتج",
          "التعليق",
          "التقييم",
          "الاعجابات",
          "عدم الاعجابات",
          "",
        ]}
      >
        {reviewsData.map(review => (
          <TableRow key={review.id}>
            <TableCell className="py-4 px-6">{review.id}</TableCell>
            <TableCell className="py-4 px-6">{review.username}</TableCell>
            <TableCell className="py-4 px-6">{review.productName}</TableCell>
            <TableCell className="py-4 px-6">{review.comment}</TableCell>
            <TableCell className="py-4 px-6">{review.rate}</TableCell>
            <TableCell className="py-4 px-6">{review.likes}</TableCell>
            <TableCell className="py-4 px-6">{review.dislikes}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Button className="border border-primary-green bg-transparent text-primary-green hover:bg-primary-green hover:text-white">
                  اظهار
                </Button>
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="حذف التقييم"
                >
                  <Trash size={15} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    </Tile>
  )
}
export default ReviewsPage
