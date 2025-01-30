export const zodExercises = [
  {
    id: 1,
    title: "Create a basic user schema",
    objective:
      "Implement a basic Zod schema for user data validation with required name and age fields.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create a schema for user with name (string) and age (number)
// Step 2: Add validation constraints (min age 18, name min length 2)
// Step 3: Create a type from the schema
// Step 4: Validate sample data
    `,
    solution: `
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(18, "Must be at least 18 years old")
})

type User = z.infer<typeof userSchema>

// Example usage
try {
  const validUser = userSchema.parse({
    name: "John",
    age: 25
  })
  console.log("Valid user:", validUser)
} catch (error) {
  console.error("Validation error:", error)
}
    `,
  },
  {
    id: 2,
    title: "Create an email validation schema",
    objective:
      "Create a schema that validates email addresses and provides custom error messages.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create an email schema with custom error message
// Step 2: Add additional validation rules (domain whitelist)
// Step 3: Create a function to validate emails
    `,
    solution: `
import { z } from 'zod'

const emailSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .refine(
      (email) => {
        const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"]
        const domain = email.split("@")[1]
        return allowedDomains.includes(domain)
      },
      "Email must be from an allowed domain"
    )
})

function validateEmail(email: string) {
  try {
    const result = emailSchema.parse({ email })
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error.errors }
  }
}

// Example usage
console.log(validateEmail("test@gmail.com"))
console.log(validateEmail("invalid@unknown.com"))
    `,
  },
  {
    id: 3,
    title: "Create a nested object schema",
    objective:
      "Implement a schema for nested objects with arrays and optional fields.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create schemas for address and contact info
// Step 2: Create a nested user schema with these fields
// Step 3: Add array validation for multiple addresses
    `,
    solution: `
import { z } from 'zod'

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
  postalCode: z.string().regex(/^\\d{5}$/, "Invalid postal code")
})

const contactSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  preferredContact: z.enum(["email", "phone"])
})

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  addresses: z.array(addressSchema).min(1, "At least one address required"),
  contact: contactSchema,
  notes: z.string().optional()
})

type User = z.infer<typeof userSchema>

// Example usage
const user = {
  id: 1,
  name: "John Doe",
  addresses: [{
    street: "123 Main St",
    city: "Boston",
    country: "USA",
    postalCode: "02108"
  }],
  contact: {
    email: "john@example.com",
    preferredContact: "email"
  }
}

console.log(userSchema.parse(user))
    `,
  },
  {
    id: 4,
    title: "Implement form validation",
    objective:
      "Create a schema for form validation with custom error messages and transformation.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create a form schema with different field types
// Step 2: Add custom transformations
// Step 3: Implement error handling
    `,
    solution: `
import { z } from 'zod'

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .transform(val => val.toLowerCase()),
  
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  
  confirmPassword: z.string(),
  
  birthDate: z
    .string()
    .transform(str => new Date(str))
    .refine(date => date <= new Date(), "Birth date cannot be in the future")
})
.refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

function validateForm(formData: unknown) {
  try {
    const result = formSchema.parse(formData)
    return { success: true, data: result }
  } catch (error) {
    const formattedErrors = error.errors.reduce((acc, err) => ({
      ...acc,
      [err.path.join(".")]: err.message
    }), {})
    return { success: false, errors: formattedErrors }
  }
}

// Example usage
const formData = {
  username: "JohnDoe",
  password: "Password123",
  confirmPassword: "Password123",
  birthDate: "1990-01-01"
}

console.log(validateForm(formData))
    `,
  },
  {
    id: 5,
    title: "Create an API response validator",
    objective:
      "Implement a schema to validate and type API responses with discriminated unions.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create success and error response schemas
// Step 2: Implement discriminated union
// Step 3: Add response validation function
    `,
    solution: `
import { z } from 'zod'

const successResponse = z.object({
  status: z.literal("success"),
  data: z.object({
    id: z.number(),
    timestamp: z.string().datetime(),
    result: z.unknown()
  })
})

const errorResponse = z.object({
  status: z.literal("error"),
  error: z.object({
    code: z.number(),
    message: z.string(),
    details: z.record(z.unknown()).optional()
  })
})

const apiResponse = z.discriminatedUnion("status", [
  successResponse,
  errorResponse
])

type APIResponse = z.infer<typeof apiResponse>

function validateAPIResponse(response: unknown) {
  try {
    const validated = apiResponse.parse(response)
    return {
      isValid: true,
      data: validated
    }
  } catch (error) {
    return {
      isValid: false,
      error: error.errors
    }
  }
}

// Example usage
const response = {
  status: "success",
  data: {
    id: 123,
    timestamp: new Date().toISOString(),
    result: { message: "Operation completed" }
  }
}

console.log(validateAPIResponse(response))
    `,
  },
  {
    id: 6,
    title: "Implement schema composition and reuse",
    objective:
      "Create reusable schema components and compose them into larger schemas.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create base schemas for common fields
// Step 2: Extend and compose schemas
// Step 3: Implement schema inheritance
    `,
    solution: `
import { z } from 'zod'

// Base schemas
const timestampFields = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
})

const metadataFields = z.object({
  tags: z.array(z.string()).default([]),
  category: z.enum(["personal", "work", "other"]).optional()
})

// Specific schemas extending base
const taskSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  description: z.string(),
  status: z.enum(["todo", "in_progress", "done"]),
  priority: z.number().min(1).max(5)
})
.merge(timestampFields)
.merge(metadataFields)

const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  tasks: z.array(taskSchema)
})
.merge(timestampFields)
.merge(metadataFields)

type Task = z.infer<typeof taskSchema>
type Project = z.infer<typeof projectSchema>

// Example usage
const task: Task = {
  id: 1,
  title: "Complete project",
  description: "Finish all tasks",
  status: "in_progress",
  priority: 3,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ["urgent"],
  category: "work"
}

console.log(taskSchema.parse(task))
    `,
  },
  {
    id: 7,
    title: "Create an enum-based state machine validator",
    objective:
      "Implement a schema that validates state transitions in a state machine.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Define possible states and transitions
// Step 2: Create validation for state changes
// Step 3: Implement state machine logic
    `,
    solution: `
import { z } from 'zod'

const TaskState = z.enum(["draft", "review", "approved", "published"])
type TaskState = z.infer<typeof TaskState>

const allowedTransitions: Record<TaskState, TaskState[]> = {
  draft: ["review"],
  review: ["draft", "approved"],
  approved: ["published", "review"],
  published: ["draft"]
}

const stateTransitionSchema = z.object({
  currentState: TaskState,
  newState: TaskState,
  timestamp: z.string().datetime(),
  userId: z.number()
}).refine(
  (data) => allowedTransitions[data.currentState].includes(data.newState),
  (data) => ({
    message: \`Invalid transition from \${data.currentState} to \${data.newState}\`
  })
)

function validateStateTransition(transition: unknown) {
  try {
    const result = stateTransitionSchema.parse(transition)
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error.errors }
  }
}

// Example usage
const transition = {
  currentState: "draft",
  newState: "review",
  timestamp: new Date().toISOString(),
  userId: 123
}

console.log(validateStateTransition(transition))
    `,
  },
  {
    id: 8,
    title: "Implement custom validation with refinements",
    objective: "Create complex custom validation rules using Zod refinements.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create base schema with custom validations
// Step 2: Add multiple refinement rules
// Step 3: Implement custom error messages
    `,
    solution: `
import { z } from 'zod'

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine(
    (password) => /[A-Z]/.test(password),
    "Must contain at least one uppercase letter"
  )
  .refine(
    (password) => /[a-z]/.test(password),
    "Must contain at least one lowercase letter"
  )
  .refine(
    (password) => /[0-9]/.test(password),
    "Must contain at least one number"
  )
  .refine(
    (password) => /[^A-Za-z0-9]/.test(password),
    "Must contain at least one special character"
  )
  .refine(
    (password) => !/(.)\x01{2,}/.test(password),
    "Cannot contain three consecutive identical characters"
  )

const userCredentialsSchema = z.object({
  username: z.string().min(3),
  password: passwordSchema,
  previousPasswords: z.array(z.string())
}).refine(
  (data) => !data.previousPasswords.includes(data.password),
  {
    message: "Cannot reuse a previous password",
    path: ["password"]
  }
)

function validateCredentials(credentials: unknown) {
  try {
    const result = userCredentialsSchema.parse(credentials)
    return { success: true, data: result }
  } catch (error) {
    return { success: false, errors: error.errors }
  }
}

// Example usage
const credentials = {
  username: "john_doe",
  password: "P@ssw0rd123",
  previousPasswords: ["oldP@ss123", "P@ssw0rd456"]
}

console.log(validateCredentials(credentials))
    `,
  },
  {
    id: 9,
    title: "Create a configuration validator",
    objective:
      "Implement a schema for validating application configuration with defaults and constraints.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Define configuration schema with defaults
// Step 2: Add validation constraints
// Step 3: Implement configuration parsing
    `,
    solution: `
import { z } from 'zod'

const portSchema = z.number()
  .int()
  .min(1024)
  .max(65535)
  .default(3000)

const logLevelSchema = z.enum(["debug", "info", "warn", "error"])
  .default("info")

const databaseSchema = z.object({
  host: z.string().default("localhost"),
  port: z.number().default(5432),
  username: z.string(),
  password: z.string(),
  pool: z.object({
    min: z.number().min(1).default(1),
    max: z.number().min(5).default(10)
  })
})

const configSchema = z.object({
  env: z.enum(["development", "staging", "production"])
    .default("development"),
  port: portSchema,
  logLevel: logLevelSchema,
  database: databaseSchema,
  cors: z.object({
    enabled: z.boolean().default(false),
    origins: z.array(z.string()).default([])
  }),
      cache: z.object({
    enabled: z.boolean().default(true),
    ttl: z.number().min(0).default(3600),
    provider: z.enum(["memory", "redis"]).default("memory")
  }),
  security: z.object({
    jwtSecret: z.string().min(32),
    bcryptRounds: z.number().min(10).default(12),
    rateLimit: z.object({
      enabled: z.boolean().default(true),
      maxRequests: z.number().default(100),
      windowMs: z.number().default(900000) // 15 minutes
    })
  })
})

type AppConfig = z.infer<typeof configSchema>

function loadConfig(input: unknown) {
  try {
    const config = configSchema.parse(input)
    return { success: true, config }
  } catch (error) {
    return { success: false, errors: error.errors }
  }
}

// Example usage
const config = {
  database: {
    username: "admin",
    password: "secure123"
  },
  security: {
    jwtSecret: "your-secure-jwt-secret-key-min-32-chars"
  }
}

console.log(loadConfig(config))
    `,
  },
  {
    id: 10,
    title: "Create a schema transformer and parser",
    objective:
      "Implement a schema that can transform and validate data between different formats with custom parsing logic.",
    codeStarter: `
import { z } from 'zod'

// Step 1: Create input and output schemas
// Step 2: Implement transformation logic
// Step 3: Add custom parsing and validation
    `,
    solution: `
import { z } from 'zod'

// Custom types for CSV data
const csvRowSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.string(),
  isActive: z.string(),
  score: z.string()
})

// Output schema with transformed types
const userRecordSchema = z.object({
  userId: z.number(),
  fullName: z.string(),
  birthDate: z.date(),
  active: z.boolean(),
  score: z.number().min(0).max(100),
  age: z.number(),
  category: z.enum(["beginner", "intermediate", "expert"])
})

type UserRecord = z.infer<typeof userRecordSchema>

function transformCSVToUser(csvRow: unknown): UserRecord {
  // First validate CSV structure
  const row = csvRowSchema.parse(csvRow)
  
  // Calculate age and category
  const birthDate = new Date(row.dateOfBirth)
  const age = new Date().getFullYear() - birthDate.getFullYear()
  const score = Number(row.score)
  
  let category: "beginner" | "intermediate" | "expert"
  if (score < 40) category = "beginner"
  else if (score < 75) category = "intermediate"
  else category = "expert"

  // Transform and validate final structure
  return userRecordSchema.parse({
    userId: parseInt(row.id),
    fullName: \`\${row.firstName} \${row.lastName}\`,
    birthDate: birthDate,
    active: row.isActive.toLowerCase() === "true",
    score: score,
    age: age,
    category: category
  })
}

function processCSVData(csvRows: unknown[]) {
  try {
    const transformed = csvRows.map(row => transformCSVToUser(row))
    return { success: true, data: transformed }
  } catch (error) {
    return { success: false, error: error.errors }
  }
}

// Example usage
const csvData = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-05-15",
    isActive: "true",
    score: "82"
  }
]

console.log(processCSVData(csvData))
    `,
  },
]
