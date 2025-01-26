/* eslint-disable no-useless-escape */
export const reactHookFormExercises = [
  {
    id: 1,
    title: "Basic Form Setup",
    objective:
      "Set up a basic form using React Hook Form with one input field.",
    codeStarter: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Add an input field for 'name' */}
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
    solution: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
  {
    id: 2,
    title: "Form Validation",
    objective: "Add validation rules to an input field using React Hook Form.",
    codeStarter: null,
    solution: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
          placeholder="Enter your email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
  {
    id: 3,
    title: "Handle Multiple Inputs",
    objective: "Set up a form with multiple inputs and capture their values.",
    codeStarter: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Add input fields for 'firstName' and 'lastName' */}
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
    solution: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
  {
    id: 4,
    title: "Default Values",
    objective: "Set default values for the form inputs.",
    codeStarter: null,
    solution: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit } = useForm({
      defaultValues: {
        firstName: "John",
        lastName: "Doe",
      },
    });

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
  {
    id: 5,
    title: "Error Handling",
    objective: "Display error messages for invalid inputs.",
    codeStarter: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Add validation rules and display error messages */}
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
    solution: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          })}
          placeholder="Enter your email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
  {
    id: 6,
    title: "Using Watch",
    objective: "Monitor form input changes using the `watch` method.",
    codeStarter: null,
    solution: `
  import React from "react";
  import { useForm } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit, watch } = useForm();

    const watchInput = watch("name");

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Enter your name" />
        <p>Watching: {watchInput}</p>
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
  {
    id: 7,
    title: "Dynamic Fields",
    objective: "Add and manage dynamic input fields in a form.",
    codeStarter: `
  import React from "react";
  import { useForm, useFieldArray } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({ control, name: "items" });

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Render dynamic input fields */}
        <button type="button" onClick={() => append({ value: "" })}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
    solution: `
  import React from "react";
  import { useForm, useFieldArray } from "react-hook-form";

  export default function App() {
    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({ control, name: "items" });

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input {...register(\`items.\${index}.value\`)} placeholder="Enter value" />
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => append({ value: "" })}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
  },
]
