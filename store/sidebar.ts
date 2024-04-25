import { create } from "zustand"

type SidebarState = {
  isOpen: boolean
  toggleSidebar: () => void
}

const useSidebar = create<SidebarState>(set => ({
  isOpen: false,
  toggleSidebar: () => set(state => ({ isOpen: !state.isOpen })),
}))

export default useSidebar
