import { Button } from "chronoxis"
import { ArrowLeftIcon } from "lucide-react"
import { useRouteError } from "react-router-dom"

export default function Error404() {
  const error = useRouteError()

  const errorMessage = (error as any).statusText || (error as any).message

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(30deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)),
            linear-gradient(150deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)),
            linear-gradient(30deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)),
            linear-gradient(150deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)),
            linear-gradient(60deg, var(--primary-foreground) 25%, transparent 25.5%, transparent 75%, var(--primary-foreground) 75%, var(--primary-foreground))`,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="relative px-4 py-16 text-center space-y-8 max-w-2xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="relative">
          <h1 className="text-8xl md:text-8xl font-bold bg-gradient-to-b from-primary to-primary/50 bg-clip-text animate-bounce">
            404
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground">
            {errorMessage
              ? "Sorry, an unexpected error has occurred."
              : "Page Not Found"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            {errorMessage
              ? errorMessage
              : `The page you're looking for doesn't exist or has been moved.`}
          </p>
        </div>

        <div className="pt-4">
          <Button variant="opposite" onClick={() => window.location.reload()}>
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-foreground -translate-x-4 -translate-y-4" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-foreground translate-x-4 translate-y-4" />
      </div>
    </div>
  )
}
