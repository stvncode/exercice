import { themeEnum } from "@/lib/syntaxStylesheet"
import { useGlobalStore } from "@/store/globalStore"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  BasicSpinner,
  Button,
  Form,
  FormField,
  FormItem,
  FormMessage,
  Switch,
} from "chronoxis"
import { useState } from "react"
import { LearningTheme } from "./LearningTheme"

const learningSchema = z.object({
  theme: themeEnum,
  advance: z.boolean(),
})

export type LearningFormValues = z.infer<typeof learningSchema>

export const Learning = () => {
  const { learning, setLearning } = useGlobalStore()

  const [loading, setLoading] = useState(false)

  const form = useForm<LearningFormValues>({
    resolver: zodResolver(learningSchema),
    defaultValues: {
      theme: learning.editorTheme,
      advance: learning.autoAdvance,
    },
    mode: "onChange",
  })

  const onSubmit = (data: LearningFormValues) => {
    setLoading(true)
    setTimeout(() => setLoading(false), 200)
    setLearning(data.theme, data.advance)
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <LearningTheme editorTheme={learning.editorTheme} />
          {/* Learning Options */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Show Hints</label>
              <p className="text-sm text-muted-foreground">
                Display hints for exercises
              </p>
            </div>
            <Switch defaultChecked={false} disabled />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Auto-advance</label>
              <p className="text-sm text-muted-foreground">
                Move to next exercise automatically
              </p>
            </div>
            <FormField
              control={form.control}
              name="advance"
              render={({ field }) => (
                <FormItem>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button variant="opposite" type="submit" className="w-36">
            {loading ? <BasicSpinner /> : "Update learning"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
