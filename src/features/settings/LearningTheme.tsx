import { syntaxStylesheet, SyntaxStylesheetValue } from "@/lib/syntaxStylesheet"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "chronoxis"
import { useFormContext } from "react-hook-form"
import { LearningFormValues } from "./Learning"

export const LearningTheme = ({
  editorTheme,
}: {
  editorTheme: SyntaxStylesheetValue
}) => {
  const { control } = useFormContext<LearningFormValues>()

  return (
    <FormField
      control={control}
      name="theme"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Code Editor Theme</FormLabel>
          <FormControl>
            <Select
              defaultValue={editorTheme}
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                {syntaxStylesheet.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>
            This change the style of the editors in the app.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
