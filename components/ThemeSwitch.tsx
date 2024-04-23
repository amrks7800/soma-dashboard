"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import { MouseEvent } from "react"

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()

  const handleSwitchTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Switch onClick={handleSwitchTheme} />
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </div>
  )
}
