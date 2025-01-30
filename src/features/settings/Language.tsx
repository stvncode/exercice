import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "chronoxis"
import { useForm } from "react-hook-form"
import { z } from "zod"

const languageFormSchema = z.object({
  language: z.enum(["english"], {
    required_error: "Please select a language.",
  }),
})

type LanguageFormValues = z.infer<typeof languageFormSchema>

const defaultValues: Partial<LanguageFormValues> = {
  language: "english",
}

export const Language = () => {
  const form = useForm<LanguageFormValues>({
    resolver: zodResolver(languageFormSchema),
    defaultValues,
  })

  function onSubmit(data: LanguageFormValues) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Choose your language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="english">English</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </div>
              <FormDescription>
                Select your preferred language. More languages will be available
                soon.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="opposite" type="submit">
          Update language
        </Button>
      </form>
    </Form>
  )
}
