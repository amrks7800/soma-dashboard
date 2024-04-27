import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { bannersData, whoAreUsPageData } from "@/constants"
import { Edit } from "lucide-react"
import Image from "next/image"

const MainPage = () => {
  return (
    <Tile className="px-0 py-5">
      <DataTable headers={["اسم مكان الصورة", "الصورة", "الوصف", "الحالة", ""]}>
        {bannersData.map(banner => (
          <TableRow key={banner.id}>
            <TableCell className="py-4 px-6">{banner.pageName}</TableCell>
            <TableCell className="py-4 px-6">
              <Image
                src={banner.imageUrl}
                alt="section image"
                width={100}
                height={100}
                className="rounded-full object-cover object-center"
              />
            </TableCell>
            <TableCell className="py-4 px-6">{banner.description}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
                {banner.visible ? "ظاهر" : "غير ظاهر"}
              </div>
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="تعديل الفقرة"
                >
                  <Edit size={15} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    </Tile>
  )
}
export default MainPage
