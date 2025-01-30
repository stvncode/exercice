import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type SettingsItems =
  | "profile"
  | "language"
  | "appearance"
  | "shortcuts"
  | "links"
  | "alternative"
  | "timer"
  | "accessibility"
  | "learning"
  | "difficulty"
  | "progress"

export interface SettingsSidebarItems {
  nav: {
    name: string
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
    tab: SettingsItems
    disabled?: boolean
  }[]
}
