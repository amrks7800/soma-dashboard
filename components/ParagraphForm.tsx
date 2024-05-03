import { Paragraph } from "@/types"
import FileFormGroup from "./FileFormGroup"
import FormGroup from "./FormGroup"
import { FC } from "react"
import { DataSelect } from "./DataSelect"
import { Button } from "./ui/button"

type Props = {
  paragraph: Paragraph
}

const ParagraphForm: FC<Props> = ({ paragraph }) => {
  return (
    <form className="grid gap-4">
      <FormGroup label="عنوان الفقرة" defaultValue={paragraph.title} />
      <FileFormGroup label="صورة الفقرة" />
      <textarea defaultValue={paragraph.description} className="p-4"></textarea>
      <DataSelect
        placeholder="الحالة"
        defaultValue={String(paragraph.visible)}
        triggerProps={{
          className: "w-full",
        }}
        options={[
          {
            name: "ظاهر",
            value: "true",
          },
          {
            name: "غير ظاهر",
            value: "false",
          },
        ]}
      />
      <Button
        variant={"outline"}
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      >
        حفظ التعديلات
      </Button>
    </form>
  )
}
export default ParagraphForm
