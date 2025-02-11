import { useTheme } from "@/components/theme/theme.provider"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  BasicSpinner,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "chronoxis"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  font: z.enum(["geist"]),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export const Appearance = () => {
  const { theme, setTheme } = useTheme()

  const [loading, setLoading] = useState(false)

  const defaultValues: Partial<AppearanceFormValues> = {
    theme: theme === "system" ? "light" : theme,
    font: "geist",
  }

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: AppearanceFormValues) {
    setLoading(true)
    setTimeout(() => setLoading(false), 200)
    setTheme(data.theme)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Choose your font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="geist">Geist mono</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </div>
              <FormDescription>
                Set the font you want to use in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-md grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#ecedef] dark:bg-[#cbcbcb] p-2">
                        <div className="space-y-2 rounded-md bg-background p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef] dark:bg-[#cbcbcb]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef] dark:bg-[#cbcbcb]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-background p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef] dark:bg-[#cbcbcb]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef] dark:bg-[#cbcbcb]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-background p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef] dark:bg-[#cbcbcb]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef] dark:bg-[#cbcbcb]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                      <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                        <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button variant="opposite" type="submit" className="w-40">
          {loading ? <BasicSpinner /> : "Update appearance"}
        </Button>
      </form>
    </Form>
  )
}
