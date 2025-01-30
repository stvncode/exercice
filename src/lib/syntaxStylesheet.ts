import crystal from "react-syntax-highlighter/dist/esm/languages/prism/crystal"
import {
  a11yDark,
  monokai,
  sunburst,
  tomorrowNightBlue,
  zenburn,
} from "react-syntax-highlighter/dist/esm/styles/hljs"
import {
  base16AteliersulphurpoolLight,
  coldarkCold,
  coyWithoutShadows,
  ghcolors,
  lucario,
  twilight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism"
import { match } from "ts-pattern"
import { z } from "zod"

const themes = [
  "a11yDark",
  "base16AteliersulphurpoolLight",
  "coldarkCold",
  "coyWithoutShadows",
  "crystal",
  "ghcolors",
  "lucario",
  "monokai",
  "sunburst",
  "tomorrowNightBlue",
  "twilight",
  "vscDarkPlus",
  "zenburn",
] as const

export type SyntaxStylesheetValue = (typeof themes)[number]
export const themeEnum = z.enum(themes)

export const syntaxStylesheet: {
  name: string
  value: SyntaxStylesheetValue
}[] = [
  { name: "A11yDark", value: "a11yDark" },
  { name: "Coldark Cold", value: "coldarkCold" },
  {
    name: "Base16 Ateliersulphurpool Light",
    value: "base16AteliersulphurpoolLight",
  },
  { name: "Coy Without Shadows", value: "coyWithoutShadows" },
  { name: "Crystal", value: "crystal" },
  { name: "GhColors", value: "ghcolors" },
  { name: "Lucario", value: "lucario" },
  { name: "Monokai", value: "monokai" },
  { name: "Sunburst", value: "sunburst" },
  { name: "Tomorrow Night Blue", value: "tomorrowNightBlue" },
  { name: "Twilight", value: "twilight" },
  { name: "VSC Dark Plus", value: "vscDarkPlus" },
  { name: "Zenburn", value: "zenburn" },
]

export const editorStyle = (theme: SyntaxStylesheetValue) =>
  match(theme)
    .with("a11yDark", () => a11yDark)
    .with("base16AteliersulphurpoolLight", () => base16AteliersulphurpoolLight)
    .with("coldarkCold", () => coldarkCold)
    .with("coyWithoutShadows", () => coyWithoutShadows)
    .with("crystal", () => crystal)
    .with("ghcolors", () => ghcolors)
    .with("lucario", () => lucario)
    .with("monokai", () => monokai)
    .with("sunburst", () => sunburst)
    .with("tomorrowNightBlue", () => tomorrowNightBlue)
    .with("twilight", () => twilight)
    .with("vscDarkPlus", () => vscDarkPlus)
    .with("zenburn", () => zenburn)
    .exhaustive()

export const exampleTheme = `
    import React from 'react'
    
    export const Button = ({ children }) => (
        <button>
          {children}
        </button>
      )
    }
        `
