import {
  Alert,
  AlertDescription,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Flex,
} from "chronoxis"
import { Clover } from "lucide-react"

export const FinalTest = () => (
  <div className="flex-1 space-y-8 p-8 pt-6">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">
        Final Project: Enhanced Todo App
      </h2>
    </div>

    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Project Requirements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertDescription>
            Build a Todo application that demonstrates your understanding of
            modern React development. This project will test your ability to
            integrate various libraries and implement best practices.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Core Requirements</h3>
            <p className="ml-8">
              Your todo application should implement the following features:
            </p>

            <div className="space-y-2 ml-4">
              <h4 className="font-medium">1. Data Management</h4>
              <p className="ml-8">
                - Use Zustand for state management to store todos
              </p>
              <p className="ml-8">
                - Use Zod for data validation of todo items
              </p>

              <h4 className="font-medium pt-4">2. Form Handling</h4>
              <p className="ml-8">- Use React Hook Form for all forms</p>
              <p className="ml-8">
                - Implement form validation with both Zod and React Hook Form
              </p>

              <h4 className="font-medium pt-4">3. Routing & Navigation</h4>
              <p className="ml-8">
                - Use React Router Dom to create routes for:
              </p>
              <p className="ml-16"> • Todo list view</p>
              <p className="ml-16"> • Individual todo detail view</p>

              <h4 className="font-medium pt-4">4. UI Requirements</h4>
              <p className="ml-8">
                - Use Shadcn UI components for consistent design
              </p>
              <p className="ml-8">
                - Implement responsive design with Tailwind CSS
              </p>
              <p className="ml-8">- Add animations with Framer Motion for:</p>
              <p className="ml-16"> • Todo item transitions</p>
              <p className="ml-16"> • Page transitions</p>
              <p className="ml-16"> • Loading states</p>

              <h4 className="font-medium pt-4">5. TypeScript Integration</h4>
              <p className="ml-8">
                - Use TypeScript for all components and functions
              </p>
              <p className="ml-8">
                - Implement proper type safety and interfaces
              </p>
              <p className="ml-8">
                - Optional: Use TS-Belt for functional programming patterns
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Bonus Features</h3>
            <div className="space-y-2 ml-4">
              <p className="ml-8">- Dark mode support</p>
              <p className="ml-8">
                - Implement React Query for API calls (with mock API or local
                storage)
              </p>
              <p className="ml-8">- Drag and drop todo reordering</p>
              <p className="ml-8">- Todo categories/tags</p>
              <p className="ml-8">- Due dates and reminders</p>
              <p className="ml-8">- Priority levels</p>
              <p className="ml-8">- Search and filter functionality</p>
              <p className="ml-8">- Data persistence with localStorage</p>
              <p className="ml-8">- Performance optimization techniques</p>
              <p className="ml-8">- Write unit tests with Vitest</p>
              <p className="ml-8">- Implement E2E tests with Playwright</p>
            </div>
          </section>
        </div>
        <Flex
          align="center"
          justify="center"
          className="py-8 pt-12 text-3xl font-bold gap-3"
        >
          <span>Good luck</span> <Clover className="text-success" />
        </Flex>
      </CardContent>
    </Card>
  </div>
)
