"use client"
import { ThemeProvider } from "next-themes"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider enableSystem defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  )
}
export default Providers
