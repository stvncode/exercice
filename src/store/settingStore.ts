import { create } from "zustand"

type SettingsStore = {
  isOpen: boolean
  setOpen: (open: boolean) => void
  toggleOpen: () => void
}

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  setOpen: (open) => set({ isOpen: open }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))
