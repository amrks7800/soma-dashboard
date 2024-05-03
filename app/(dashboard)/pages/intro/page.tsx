import Modal from "@/components/Modal"
import ParagraphForm from "@/components/ParagraphForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { whoAreUsPageData } from "@/constants"
import { Edit } from "lucide-react"
import Image from "next/image"

const IntroPage = () => {
  return (
    <Tile className="px-0 py-5">
      <DataTable
        headers={["#", "عنوان الفقرة", "الوصف", "الصورة", "الحالة", ""]}
      >
        {whoAreUsPageData.map(phrase => (
          <TableRow key={phrase.id}>
            <TableCell className="py-4 px-6">{phrase.id}</TableCell>
            <TableCell className="py-4 px-6">{phrase.title}</TableCell>
            <TableCell className="py-4 px-6">{phrase.description}</TableCell>
            <TableCell className="py-4 px-6">
              <Image
                src={phrase.imageUrl}
                alt="section image"
                width={100}
                height={100}
                className="rounded-full object-cover object-center"
              />
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
                {phrase.visible ? "ظاهر" : "غير ظاهر"}
              </div>
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Modal
                  triggerText={<Edit size={15} />}
                  triggerProps={{
                    className:
                      "aspect-square w-[35px] border border-input bg-background hover:bg-accent hover:text-accent-foreground grid place-content-center rounded-md",
                  }}
                >
                  <ParagraphForm paragraph={phrase} />
                </Modal>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    </Tile>
  )
}
export default IntroPage
