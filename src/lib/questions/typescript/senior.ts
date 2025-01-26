export const typescriptSeniorQuestions = [
  {
    id: 1,
    title:
      "What is the purpose of TypeScript's `never` type, and when would you use it?",
    code: null,
    options: [
      "It represents a type for values that will never occur, such as infinite loops or thrown errors.",
      "It is used for type-safe objects that should never be mutated.",
      "It indicates a function that always returns a value.",
      "It allows values of type `any` to be narrowed to specific types.",
    ],
    correctAnswer: 0,
    explanation:
      "`never` is used to indicate a value that will never occur, for instance, in cases of infinite loops or functions that throw errors.",
  },
  {
    id: 2,
    title: "What is the advantage of using type guards in TypeScript?",
    code: null,
    options: [
      "Type guards narrow down the type of a variable within a conditional block.",
      "They are used to enforce types in type-safe libraries.",
      "They automatically infer types in functions.",
      "They provide runtime type checking.",
    ],
    correctAnswer: 0,
    explanation:
      "Type guards help TypeScript narrow down the type of a variable inside a conditional block, enhancing type safety and reducing runtime errors.",
  },
  {
    id: 3,
    title: "How does TypeScript handle the `this` keyword in a class method?",
    code: null,
    options: [
      "TypeScript infers the type of `this` based on the method’s context.",
      "The `this` keyword is always inferred as `any` in class methods.",
      "The type of `this` is automatically bound to the class constructor.",
      "The type of `this` must always be explicitly defined.",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, `this` is inferred based on the context in which it is used, typically determined by the method's class or object.",
  },
  {
    id: 4,
    title:
      "How can you enforce an object to have specific property types, including optional ones, with TypeScript?",
    code: null,
    options: [
      "Use an interface with required and optional properties.",
      "Use a `type` alias with the `?` modifier for optional properties.",
      "Use `const` to lock the properties in place.",
      "Both options 1 and 2 are correct.",
    ],
    correctAnswer: 3,
    explanation:
      "Both `interface` and `type` with optional properties (`?`) allow you to enforce specific types for an object, including optional properties.",
  },
  {
    id: 5,
    title: "How do you define a mapped type in TypeScript?",
    code: null,
    options: [
      "Using a `for` loop to iterate over properties.",
      "By applying an operation on the keys of a type.",
      "With the `map()` function to transform types.",
      "By using the `in` keyword to iterate over keys.",
    ],
    correctAnswer: 1,
    explanation:
      "Mapped types in TypeScript allow you to transform the keys of an object type. For example: `type MyType = { [K in keyof T]: boolean };`.",
  },
  {
    id: 6,
    title:
      "How would you make a type union that only allows certain string values, similar to enum behavior?",
    code: null,
    options: [
      "Use string literals to create a union type.",
      "Use `const` and the `as const` assertion.",
      "Use `enum` to create restricted values.",
      "Both options 1 and 2 are correct.",
    ],
    correctAnswer: 3,
    explanation:
      "You can use string literals to create a union type like `type MyType = 'value1' | 'value2';` or use `as const` to lock values to a specific set.",
  },
  {
    id: 7,
    title:
      "How do you create a type that can accept either a number or a string but not both?",
    code: null,
    options: [
      "Use the `exclude` utility type.",
      "Use union types with type guards.",
      "Use intersection types.",
      "Use the `xor` utility type.",
    ],
    correctAnswer: 0,
    explanation:
      "You can use the `Exclude` utility type to exclude one type from another, ensuring that only one type is allowed at a time.",
  },
  {
    id: 8,
    title: "What is the purpose of `declare` keyword in TypeScript?",
    code: null,
    options: [
      "It is used to declare variables that will be initialized later.",
      "It helps define types for objects that exist in the global scope but are defined externally.",
      "It declares functions that will be called outside of TypeScript.",
      "It is used to declare private members in classes.",
    ],
    correctAnswer: 1,
    explanation:
      "`declare` is used to inform TypeScript about types or variables that are available globally but are not defined within the current TypeScript file, such as external libraries.",
  },
  {
    id: 9,
    title:
      "How would you handle asynchronous errors with `try-catch` blocks in TypeScript?",
    code: `
    async function fetchData(url: string) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    `,
    options: [
      "By declaring the error type in the catch block.",
      "By using the `any` type for the error.",
      "By defining an interface for the error object.",
      "TypeScript automatically infers the error type.",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, you can declare the type of `error` in a `catch` block, though `any` is often used if you aren't sure of the exact error type.",
  },
  {
    id: 10,
    title: "What does `extends` do when used in generic types in TypeScript?",
    code: null,
    options: [
      "It restricts the allowed types to be subclasses of a given type.",
      "It allows type inheritance between classes.",
      "It checks if a type matches a specific interface.",
      "It assigns a default type to a generic type.",
    ],
    correctAnswer: 0,
    explanation:
      "`extends` in TypeScript can be used with generics to restrict the allowed types to be subclasses of a given type or interface.",
  },
]
