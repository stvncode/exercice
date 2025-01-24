import {
  initialFavorites,
  initialOthers,
} from "@/components/ui/layout/sidebar/data"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Account {
  username: string
  email: string
  avatarUrl: string
}

interface GlobalState {
  // Account
  account: Account
  // Sidebar
  favorites: string[]
  others: string[]
}

interface GlobalStateFunction extends GlobalState {
  // Account
  setAccount: (account: Account) => void
  logout: () => void
  // Sidebar
  moveFavorite: (from: number, to: number) => void
  moveOther: (from: number, to: number) => void
  moveToOther: (fromIndex: number) => void
  moveToFavorite: (fromIndex: number) => void
  setFavorites: (favorites: string[]) => void
  setOthers: (others: string[]) => void
}

export const initialState: GlobalState = {
  account: {
    username: "",
    email: "",
    avatarUrl: "",
  },
  favorites: initialFavorites,
  others: initialOthers,
}

export const useGlobalStore = create<GlobalStateFunction>()(
  persist(
    (set) => ({
      ...initialState,

      setAccount: (account: Account) => set({ account }),
      logout: () => set({ account: initialState.account }),
      moveFavorite: (from, to) =>
        set((state) => {
          const newFavorites = [...state.favorites]
          const [item] = newFavorites.splice(from, 1)
          newFavorites.splice(to, 0, item)
          return { favorites: newFavorites }
        }),

      moveOther: (from, to) =>
        set((state) => {
          const newOthers = [...state.others]
          const [item] = newOthers.splice(from, 1)
          newOthers.splice(to, 0, item)
          return { others: newOthers }
        }),

      moveToOther: (fromIndex) =>
        set((state) => {
          const newFavorites = [...state.favorites]
          const [item] = newFavorites.splice(fromIndex, 1)
          return {
            favorites: newFavorites,
            others: [...state.others, item],
          }
        }),

      moveToFavorite: (fromIndex) =>
        set((state) => {
          const newOthers = [...state.others]
          const [item] = newOthers.splice(fromIndex, 1)
          return {
            others: newOthers,
            favorites: [...state.favorites, item],
          }
        }),
      setFavorites: (favorites) => set({ favorites }),
      setOthers: (others) => set({ others }),
    }),
    {
      name: "learning-store",
    }
  )
)

export const useAccount = () => useGlobalStore((state) => state.account)
export const useFavorites = () => useGlobalStore((state) => state.favorites)
export const useOthers = () => useGlobalStore((state) => state.others)
