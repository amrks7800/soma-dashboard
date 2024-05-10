"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  const handleSwitchTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMounted && (
      <div className="flex items-center gap-4">
        <Switch onClick={handleSwitchTheme} />
        {resolvedTheme === "dark" ? <Moon /> : <Sun />}
      </div>
    )
  )
}
