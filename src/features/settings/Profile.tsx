import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useGlobalStore } from "@/store/globalStore"
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
  Input,
} from "chronoxis"
import { useState } from "react"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export const Profile = () => {
  const {
    account: { username, email, avatarUrl },
    setAccount,
  } = useGlobalStore()

  const [loading, setLoading] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username,
      email,
    },
    mode: "onChange",
  })

  const onSubmit = (data: ProfileFormValues) => {
    setLoading(true)
    setTimeout(() => setLoading(false), 300)
    setAccount({ ...data, login: true, avatarUrl })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="opposite" type="submit" className="w-36">
          {loading ? <BasicSpinner /> : "Update profile"}
        </Button>
      </form>
    </Form>
  )
}
