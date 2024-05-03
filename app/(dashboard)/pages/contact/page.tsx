import FormGroup from "@/components/FormGroup"
import Tile from "@/components/Tile"
import { Button } from "@/components/ui/button"

const ContactPage = () => {
  return (
    <Tile className="flow grid" as={"form"}>
      <FormGroup
        label="الموبايل:"
        labelStyles="text-[#525f7f]"
        defaultValue={"+966 53 665 4128"}
        dir="ltr"
      />
      <FormGroup
        label="الواتس لينك:"
        labelStyles="text-[#525f7f]"
        defaultValue={"https://wa.me/966536654128"}
        dir="ltr"
      />
      <FormGroup
        label="الانستجرام لينك:"
        labelStyles="text-[#525f7f]"
        defaultValue={"https://www.instagram.com/?hl=ar"}
        dir="ltr"
      />
      <FormGroup
        label="التيك توك لينك:"
        labelStyles="text-[#525f7f]"
        defaultValue={"https://www.tiktok.com/ar/"}
        dir="ltr"
      />
      <Button
        variant={"outline"}
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      >
        حفظ
      </Button>
    </Tile>
  )
}
export default ContactPage
