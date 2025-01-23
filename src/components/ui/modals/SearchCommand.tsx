import { SetState } from "@/types/react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "chronoxis"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { sidebarItems } from "../layout/sidebar/data"

export const SearchCommand = ({
  openState: [open, setOpen],
}: {
  openState: [boolean, SetState<boolean>]
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search pages..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {sidebarItems.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={() => {
                navigate(item.url)
                setOpen(false)
              }}
              className="flex items-center gap-2"
            >
              {item.emoji}
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
