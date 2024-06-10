import FormGroup from "./FormGroup"
import { FC } from "react"
import { addNewGroup, editGroupByID } from "@/actions"
import SubmitButton from "./SubmitButton"
import { Loader } from "lucide-react"

type Props = {
  closeModal: () => void
}

const GroupForm: FC<Props> = ({ closeModal }) => {
  const formAction = async (formData: FormData) => {
    const name = formData.get("name") as string

    const result = await addNewGroup(name)

    if (result.success) closeModal()
  }

  return (
    <form className="grid gap-4" action={formAction}>
      <FormGroup
        labelStyles="text-primary-blue"
        label="اسم المجموعة"
        id="group-name"
        placeholder="ادخل اسم المجموعة"
        name="name"
      />

      <SubmitButton
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
        buttonText="حفظ"
        loadingUi={<Loader className="animate-spin" />}
      />
    </form>
  )
}
export default GroupForm
