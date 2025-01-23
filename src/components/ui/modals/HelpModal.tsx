import { SetState } from "@/types/react"

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from "chronoxis"
import { Copy } from "lucide-react"
import { useEffect } from "react"

export const HelpModal = ({
  openState: [open, setOpen],
}: {
  openState: [boolean, SetState<boolean>]
}) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "h" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Need some help?</DialogTitle>
          <DialogDescription>
            If you have any problem, don't hesitate to send an email to this
            address.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="stevens.travers@external.thalesgroup.com"
              readOnly
              className="h-8"
            />
          </div>
          <Button type="submit" size="icon">
            <span className="sr-only">Copy</span>
            <Copy size={14} />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="mt-4"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
