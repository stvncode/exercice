export const AlternativeTechs = () => (
  <div className="space-y-6">
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">
        Alternative technologies you might consider for your tech stack.
      </p>
    </div>
    <div className="space-y-4">
      <div className="grid gap-2">
        {/* Core Framework */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">React</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Vue.js, Svelte, Solid.js
          </span>
        </div>

        {/* Form Management */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">React Hook Form</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Formik, Final Form, Remix Forms
          </span>
        </div>

        {/* UI Components */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Shadcn UI</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Radix UI, Chakra UI
          </span>
        </div>

        {/* Routing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">React Router Dom</span>
          </div>
          <span className="text-sm text-muted-foreground">
            TanStack Router, Wouter
          </span>
        </div>

        {/* Data Fetching */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">React Query</span>
          </div>
          <span className="text-sm text-muted-foreground">
            SWR, Apollo Client, RTK Query
          </span>
        </div>

        {/* Styling */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Stitches, CSS Modules, Emotion
          </span>
        </div>

        {/* TypeScript Enhancement */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Flow, Reason, PureScript
          </span>
        </div>

        {/* Schema Validation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Zod</span>
          </div>
          <span className="text-sm text-muted-foreground">Joi, io-ts, Yup</span>
        </div>

        {/* Testing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Playwright</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Cypress, Selenium, TestCafe
          </span>
        </div>

        {/* Animation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Framer</span>
          </div>
          <span className="text-sm text-muted-foreground">
            GSAP, React Spring, Motion One
          </span>
        </div>

        {/* Functional Programming */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">TS Belt</span>
          </div>
          <span className="text-sm text-muted-foreground">fp-ts, Ramda</span>
        </div>

        {/* Testing Framework */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Vitest</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Jest, Mocha, AVA
          </span>
        </div>

        {/* State Management */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Zustand</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Jotai, Recoil, Redux Toolkit
          </span>
        </div>
      </div>
    </div>
  </div>
)
