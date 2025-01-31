import { framerLinks } from "@/lib/links/framer"
import { playwrightLinks } from "@/lib/links/playwright"
import { reactLinks } from "@/lib/links/react"
import { reactHookFormLinks } from "@/lib/links/react-hook-form"
import { reactQueryLinks } from "@/lib/links/react-query"
import { shadcnUILinks } from "@/lib/links/shadcn-ui"
import { tailwindLinks } from "@/lib/links/tailwind"
import { tSBeltLinks } from "@/lib/links/ts-belt"
import { typescriptLinks } from "@/lib/links/typescript"
import { vitestLinks } from "@/lib/links/vitest"
import { zodLinks } from "@/lib/links/zod"
import { zustandLinks } from "@/lib/links/zustand"
import { Flex } from "chronoxis"

export const DocLinks = () => {
  const links = [
    reactLinks.docs.url,
    reactHookFormLinks.docs.url,
    reactQueryLinks.docs.url,
    shadcnUILinks.docs.url,
    tailwindLinks.docs.url,
    typescriptLinks.docs.url,
    framerLinks.docs.url,
    playwrightLinks.docs.url,
    tSBeltLinks.docs.url,
    vitestLinks.docs.url,
    zodLinks.docs.url,
    zustandLinks.docs.url,
  ]
  return (
    <>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          A list of every docs for the libraries used in this project.
        </p>
      </div>
      <Flex direction="column" className="space-y-2">
        {links.map((link) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={link}>
            <span className="text-xs">-</span>
            <span className="hover:underline text-xs"> {link}</span>
          </a>
        ))}
      </Flex>
    </>
  )
}
