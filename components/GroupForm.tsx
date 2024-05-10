import { Button } from "@/components/ui/button"
import FormGroup from "./FormGroup"
import { GroupType } from "@/types"
import { FC } from "react"

type Props = {
  group?: GroupType
}

const GroupForm: FC<Props> = ({ group }) => {
  return (
    <form className="grid gap-4">
      <FormGroup
        labelStyles="text-primary-blue"
        label="اسم المجموعة"
        id="group-name"
        placeholder="ادخل اسم المجموعة"
        defaultValue={group?.name}
      />
      <label htmlFor="group-desc" className="text-primary-blue">
        وصف المجموعة
      </label>
      <textarea
        id="group-desc"
        className="border"
        defaultValue={group?.description}
      ></textarea>
      <Button
        variant={"outline"}
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      >
        حفظ
      </Button>
    </form>
  )
}
export default GroupForm
