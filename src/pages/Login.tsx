import { useGlobalStore } from "@/store/globalStore"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
import { ChangeEvent, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as z from "zod"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  avatarUrl: z.string(),
})

export const Login = () => {
  const [avatarSrc, setAvatarSrc] = useState<string>(
    "/avatar.svg?height=100&width=100"
  )
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const { setAccount } = useGlobalStore()

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      avatarUrl: "/avatar.svg?height=100&width=100",
    },
  })

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const uploadToImgBB = async (file: File) => {
    const formData = new FormData()
    formData.append("image", file)

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: formData,
        }
      )
      const data = await response.json()
      if (data.success) {
        return data.data.url
      }
      throw new Error(data.error?.message || "Upload failed")
    } catch (error) {
      console.error("Error uploading image:", error)
      return null
    }
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (typeof e.target?.result === "string") {
          setAvatarSrc(e.target.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      if (selectedFile) {
        setIsUploading(true)
        const uploadedUrl = await uploadToImgBB(selectedFile)
        if (uploadedUrl) {
          data.avatarUrl = uploadedUrl
          form.setValue("avatarUrl", uploadedUrl)
        }
      }
      setAccount({ ...data })
      navigate("/")
    } catch (error) {
      console.error("Error during form submission:", error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="grid min-h-svh w-full lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex w-32 items-center justify-center rounded-md">
            <img src="/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col items-center gap-2 mb-3 text-center">
                  <h1 className="text-2xl font-bold">Login to your account</h1>
                  <p className="text-balance text-sm text-muted-foreground">
                    Enter your credentials to access your account
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Username</FormLabel>
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
                      <FormLabel required>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="avatarUrl"
                  render={() => (
                    <FormItem>
                      <FormLabel>Avatar</FormLabel>
                      <FormControl>
                        <div className="flex justify-center">
                          <Avatar
                            className="h-24 w-24 cursor-pointer border border-border"
                            onClick={handleAvatarClick}
                          >
                            <AvatarImage src={avatarSrc} alt="User avatar" />
                            <AvatarFallback>
                              {isUploading ? "..." : "U"}
                            </AvatarFallback>
                          </Avatar>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-6">
                  {isUploading ? <BasicSpinner /> : "Login"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block bg-[url('/bg-login.svg')] bg-cover bg-no-repeat" />
    </div>
  )
}
