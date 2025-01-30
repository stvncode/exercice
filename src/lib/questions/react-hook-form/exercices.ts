export const reactHookFormExercises = [
  {
    id: 1,
    title: "Create a basic login form",
    objective:
      "Implement a simple login form using React Hook Form with email and password validation.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Initialize useForm hook
// Step 2: Add form fields with validation
// Step 3: Handle form submission
    `,
    solution: `
import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="password"
          {...register("password", { 
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
    `,
  },
  {
    id: 2,
    title: "Registration form with field validation",
    objective:
      "Create a registration form with multiple fields and custom validation rules.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Set up form with multiple fields
// Step 2: Add validation rules for each field
// Step 3: Implement password confirmation validation
    `,
    solution: `
import { useForm } from 'react-hook-form'

export default function RegistrationForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = watch("password")

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("username", { 
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters"
            }
          })}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <input
          type="password"
          {...register("password", { 
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <input
          type="password"
          {...register("confirmPassword", { 
            required: "Please confirm password",
            validate: value => value === password || "Passwords do not match"
          })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  )
}
    `,
  },
  {
    id: 3,
    title: "Form with default values",
    objective: "Create a form with default values and reset functionality.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Set up form with default values
// Step 2: Implement form reset functionality
// Step 3: Add validation and error handling
    `,
    solution: `
import { useForm } from 'react-hook-form'

const defaultValues = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com"
}

export default function ProfileForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <input
          {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => reset()}>Reset</button>
    </form>
  )
}
    `,
  },
  {
    id: 4,
    title: "Dynamic form fields",
    objective:
      "Create a form with dynamically added/removed form fields using React Hook Form.",
    codeStarter: `
import { useForm, useFieldArray } from 'react-hook-form'

// Step 1: Set up form with useFieldArray
// Step 2: Implement add/remove field functionality
// Step 3: Add validation for dynamic fields
    `,
    solution: `
import { useForm, useFieldArray } from 'react-hook-form'

export default function DynamicForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      contacts: [{ name: "", email: "" }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts"
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(\`contacts.\${index}.name\`, { 
              required: "Name is required" 
            })}
            placeholder="Name"
          />
          <input
            {...register(\`contacts.\${index}.email\`, {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="Email"
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "", email: "" })}>
        Add Contact
      </button>
      <button type="submit">Submit</button>
    </form>
  )
}
    `,
  },
  {
    id: 5,
    title: "Form with dependent fields",
    objective:
      "Create a form where some fields depend on the values of other fields.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Set up form with watch functionality
// Step 2: Implement conditional field rendering
// Step 3: Add validation based on field dependencies
    `,
    solution: `
import { useForm } from 'react-hook-form'

export default function DependentForm() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm()
  
  const employmentStatus = watch("employmentStatus")
  const hasChildren = watch("hasChildren")

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <select {...register("employmentStatus", { required: true })}>
          <option value="">Select status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>

      {employmentStatus === "employed" && (
        <div>
          <input
            {...register("companyName", { required: "Company name is required" })}
            placeholder="Company Name"
          />
          <input
            {...register("salary", { required: "Salary is required" })}
            type="number"
            placeholder="Salary"
          />
        </div>
      )}

      {employmentStatus === "self-employed" && (
        <div>
          <input
            {...register("businessName", { required: "Business name is required" })}
            placeholder="Business Name"
          />
          <input
            {...register("taxId", { required: "Tax ID is required" })}
            placeholder="Tax ID"
          />
        </div>
      )}

      <div>
        <label>
          <input
            type="checkbox"
            {...register("hasChildren")}
          /> Do you have children?
        </label>
      </div>

      {hasChildren && (
        <div>
          <input
            type="number"
            {...register("numberOfChildren", { 
              required: "Number of children is required",
              min: {
                value: 1,
                message: "Must be at least 1"
              }
            })}
            placeholder="Number of children"
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  )
}
    `,
  },
  {
    id: 6,
    title: "Multi-step form wizard",
    objective:
      "Create a multi-step form wizard with validation at each step and final submission.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Set up form with multiple steps
// Step 2: Implement step navigation with validation
// Step 3: Add progress tracking and final submission
    `,
    solution: `
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, trigger, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  })

  const nextStep = async () => {
    const result = await trigger(getFieldsByStep(step))
    if (result) setStep(step + 1)
  }

  const getFieldsByStep = (step) => {
    switch (step) {
      case 1: return ["firstName", "lastName", "email"]
      case 2: return ["address", "city", "zipCode"]
      case 3: return ["cardNumber", "expiryDate", "cvv"]
      default: return []
    }
  }

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <div>
          <h2>Personal Information</h2>
          <input {...register("firstName", { required: "First name is required" })} placeholder="First Name" />
          <input {...register("lastName", { required: "Last name is required" })} placeholder="Last Name" />
          <input {...register("email", { 
            required: "Email is required",
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i, message: "Invalid email" }
          })} placeholder="Email" />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Address Information</h2>
          <input {...register("address", { required: "Address is required" })} placeholder="Address" />
          <input {...register("city", { required: "City is required" })} placeholder="City" />
          <input {...register("zipCode", { required: "ZIP code is required" })} placeholder="ZIP Code" />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Payment Information</h2>
          <input {...register("cardNumber", { 
            required: "Card number is required",
            pattern: { value: /^[0-9]{16}$/, message: "Invalid card number" }
          })} placeholder="Card Number" />
          <input {...register("expiryDate", { required: "Expiry date is required" })} placeholder="MM/YY" />
          <input {...register("cvv", { 
            required: "CVV is required",
            pattern: { value: /^[0-9]{3,4}$/, message: "Invalid CVV" }
          })} placeholder="CVV" />
        </div>
      )}

      <div>
        {step > 1 && <button type="button" onClick={() => setStep(step - 1)}>Previous</button>}
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  )
}
    `,
  },
  {
    id: 7,
    title: "Form with async validation",
    objective:
      "Implement a form with asynchronous field validation and API integration.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Set up form with async validation
// Step 2: Implement API checks for username/email availability
// Step 3: Add loading states and error handling
    `,
    solution: `
import { useForm } from 'react-hook-form'

const checkUsernameAvailability = async (username) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return username !== "taken" // Example validation
}

export default function AsyncValidationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: "onChange"
  })

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API submit
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("username", {
            required: "Username is required",
            validate: async (value) => {
              try {
                const isAvailable = await checkUsernameAvailability(value)
                return isAvailable || "Username is already taken"
              } catch (error) {
                return "Error checking username availability"
              }
            }
          })}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
    `,
  },
  {
    id: 8,
    title: "Complex form with file uploads and preview",
    objective:
      "Create a form handling multiple file uploads with preview functionality and validation.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Set up form with file upload handling
// Step 2: Implement file preview functionality
// Step 3: Add file validation and error handling
    `,
    solution: `
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function FileUploadForm() {
  const [previews, setPreviews] = useState([])
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const files = watch("files")

  const validateFiles = (files) => {
    if (!files || files.length === 0) return "At least one file is required"
    
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) return "File size should be less than 5MB"
      if (!allowedTypes.includes(files[i].type)) return "Only JPEG, PNG and GIF files are allowed"
    }
    
    return true
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    if (files) {
      const newPreviews = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        name: file.name
      }))
      setPreviews(prev => [...prev, ...newPreviews])
    }
  }

  const onSubmit = async (data) => {
    const formData = new FormData()
    Array.from(data.files).forEach((file) => {
      formData.append('files', file)
    })
    // Handle form submission with formData
    console.log('Submitting files:', formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="file"
          multiple
          accept="image/*"
          {...register("files", {
            validate: validateFiles,
            onChange: handleFileChange
          })}
        />
        {errors.files && <p>{errors.files.message}</p>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {previews.map((preview, index) => (
          <div key={index}>
            <img 
              src={preview.url} 
              alt={preview.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <p>{preview.name}</p>
          </div>
        ))}
      </div>

      <button type="submit">Upload Files</button>
    </form>
  )
}
    `,
  },
  {
    id: 9,
    title: "Dynamic form with nested arrays and objects",
    objective:
      "Create a complex form with nested arrays and objects using useFieldArray.",
    codeStarter: `
import { useForm, useFieldArray } from 'react-hook-form'

// Step 1: Set up nested form structure
// Step 2: Implement dynamic nested fields
// Step 3: Add validation for nested fields
    `,
    solution: `
import { useForm, useFieldArray } from 'react-hook-form'

export default function NestedForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      companies: [{
        name: "",
        departments: [{
          name: "",
          employees: [{
            name: "",
            role: "",
            skills: [""]
          }]
        }]
      }]
    }
  })

  const { fields: companies, append: appendCompany, remove: removeCompany } = useFieldArray({
    control,
    name: "companies"
  })

  const onSubmit = (data) => {
    console.log('Form data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {companies.map((company, companyIndex) => {
        const { fields: departments, append: appendDepartment, remove: removeDepartment } = useFieldArray({
          control,
          name: \`companies.\${companyIndex}.departments\`
        })

        return (
          <div key={company.id}>
            <input
              {...register(\`companies.\${companyIndex}.name\`, {
                required: "Company name required"
              })}
              placeholder="Company Name"
            />
            
            {departments.map((department, departmentIndex) => {
              const { fields: employees, append: appendEmployee, remove: removeEmployee } = useFieldArray({
                control,
                name: \`companies.\${companyIndex}.departments.\${departmentIndex}.employees\`
              })

              return (
                <div key={department.id}>
                  <input
                    {...register(
                      \`companies.\${companyIndex}.departments.\${departmentIndex}.name\`,
                      { required: "Department name required" }
                    )}
                    placeholder="Department Name"
                  />
                  
                  {employees.map((employee, employeeIndex) => {
                    const { fields: skills, append: appendSkill, remove: removeSkill } = useFieldArray({
                      control,
                      name: \`companies.\${companyIndex}.departments.\${departmentIndex}.employees.\${employeeIndex}.skills\`
                    })

                    return (
                      <div key={employee.id}>
                        <input
                          {...register(
                            \`companies.\${companyIndex}.departments.\${departmentIndex}.employees.\${employeeIndex}.name\`,
                            { required: "Employee name required" }
                          )}
                          placeholder="Employee Name"
                        />
                        <input
                          {...register(
                            \`companies.\${companyIndex}.departments.\${departmentIndex}.employees.\${employeeIndex}.role\`,
                            { required: "Role required" }
                          )}
                          placeholder="Role"
                        />
                        
                        {skills.map((skill, skillIndex) => (
                          <div key={skill.id}>
                            <input
                              {...register(
                                \`companies.\${companyIndex}.departments.\${departmentIndex}.employees.\${employeeIndex}.skills.\${skillIndex}\`,
                                { required: "Skill required" }
                              )}
                              placeholder="Skill"
                            />
                            <button type="button" onClick={() => removeSkill(skillIndex)}>
                              Remove Skill
                            </button>
                          </div>
                        ))}
                        
                        <button type="button" onClick={() => appendSkill("")}>
                          Add Skill
                        </button>
                        <button type="button" onClick={() => removeEmployee(employeeIndex)}>
                          Remove Employee
                        </button>
                      </div>
                    )
                  })}
                  
                  <button type="button" onClick={() => appendEmployee({ name: "", role: "", skills: [""] })}>
                    Add Employee
                  </button>
                  <button type="button" onClick={() => removeDepartment(departmentIndex)}>
                    Remove Department
                  </button>
                </div>
              )
            })}
            
            <button type="button" onClick={() => appendDepartment({ name: "", employees: [] })}>
              Add Department
            </button>
            <button type="button" onClick={() => removeCompany(companyIndex)}>
              Remove Company
            </button>
          </div>
        )
      })}
      
      <button type="button" onClick={() => appendCompany({ name: "", departments: [] })}>
        Add Company
      </button>
      <button type="submit">Submit</button>
    </form>
  )
}
    `,
  },
  {
    id: 10,
    title: "Form with real-time validation and custom hooks",
    objective:
      "Create a form with real-time validation, custom error messages, and reusable validation hooks.",
    codeStarter: `
import { useForm } from 'react-hook-form'

// Step 1: Create custom validation hooks
// Step 2: Implement real-time validation
// Step 3: Add custom error handling and messages
    `,
    solution: `
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'

// Custom hook for password validation
const usePasswordValidation = (password = "") => {
  const [validations, setValidations] = useState({
    hasNumber: false,
    hasSpecialChar: false,
    hasUppercase: false,
    hasLowercase: false,
    isLengthValid: false
  })

  useEffect(() => {
    setValidations({
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      isLengthValid: password.length >= 8
    })
  }, [password])

  return validations
}

// Custom hook for debounced API validation
const useDebounceValidation = (value, validationFn, delay = 500) => {
  const [isValid, setIsValid] = useState(true)
  const [isValidating, setIsValidating] = useState(false)

  useEffect(() => {
    if (!value) return

    const handler = setTimeout(async () => {
      setIsValidating(true)
      try {
        const result = await validationFn(value)
        setIsValid(result)
      } catch (error) {
        setIsValid(false)
      }
      setIsValidating(false)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, validationFn, delay])

  return { isValid, isValidating }
}

// Main form component
export default function AdvancedValidationForm() {
  const { register, handleSubmit, watch, formState: { errors, dirtyFields } } = useForm({
    mode: "onChange"
  })

  const password = watch("password")
  const passwordValidations = usePasswordValidation(password)

  const { isValid: isUsernameValid, isValidating: isCheckingUsername } = 
    useDebounceValidation(
      watch("username"),
      async (username) => {
        // Simulate API call to check username availability
        await new Promise(resolve => setTimeout(resolve, 1000))
        return username !== "taken"
      }
    )

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  const getPasswordStrength = () => {
    const validCount = Object.values(passwordValidations).filter(Boolean).length
    if (validCount <= 2) return "weak"
    if (validCount <= 4) return "medium"
    return "strong"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("username", {
            required: "Username is required",
            validate: value => isUsernameValid || "Username is already taken"
          })}
          placeholder="Username"
        />
        {isCheckingUsername && <span>Checking username...</span>}
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: {
              strength: value => 
                getPasswordStrength() === "strong" || 
                "Password must meet all requirements"
            }
          })}
          placeholder="Password"
        />
        {dirtyFields.password && (
          <div>
            <h4>Password Requirements:</h4>
            <ul>
              <li style={{ color: passwordValidations.hasNumber ? 'green' : 'red' }}>
                Contains a number
              </li>
              <li style={{ color: passwordValidations.hasSpecialChar ? 'green' : 'red' }}>
                Contains a special character
              </li>
              <li style={{ color: passwordValidations.hasUppercase ? 'green' : 'red' }}>
                Contains uppercase letter
              </li>
              <li style={{ color: passwordValidations.hasLowercase ? 'green' : 'red' }}>
                Contains lowercase letter
              </li>
              <li style={{ color: passwordValidations.isLengthValid ? 'green' : 'red' }}>
                At least 8 characters long
              </li>
            </ul>
            <p>Password Strength: {getPasswordStrength()}</p>
          </div>
        )}
      </div>

      <div>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm password",
            validate: value => value === password || "Passwords do not match"
          })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
    `,
  },
]
