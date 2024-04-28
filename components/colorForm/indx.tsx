import { Color } from "@/types"
import { FC } from "react"
import FormGroup from "../FormGroup"
import { Button } from "../ui/button"

type Props = {
  color?: Color
}

const ColorForm: FC<Props> = ({ color }) => {
  return (
    <form className="grid gap-4">
      <FormGroup
        defaultValue={color?.nameAr}
        label="اسم اللون"
        placeholder="مثل: احمر"
        id="color-name"
        name="colorName"
      />
      <FormGroup
        defaultValue={color?.hex}
        label="كود اللون"
        placeholder="مثل: #000"
        id="color-hex"
        name="colorHex"
      />
      <div className="flex items-center justify-end gap-4">
        <Button className="bg-primary-blue text-white font-[600]">
          حفظ التعديلات
        </Button>
        <Button className="bg-light-gray text-white font-[600]">الغاء</Button>
      </div>
    </form>
  )
}
export default ColorForm
