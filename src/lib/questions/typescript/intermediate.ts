export const typescriptIntermediateQuestions = [
  {
    id: 1,
    title:
      "What is the difference between `interface` and `type` in TypeScript?",
    code: null,
    options: [
      "There is no difference, they can be used interchangeably.",
      "`type` can define a union or intersection type, but `interface` cannot.",
      "`interface` is more powerful than `type`.",
      "`type` can define an alias for primitive types, but `interface` cannot.",
    ],
    correctAnswer: 1,
    explanation:
      "`type` allows union and intersection types, which `interface` does not directly support. `interface` is better for object shapes, while `type` is more flexible for different kinds of types.",
  },
  {
    id: 2,
    title: "What is the purpose of `Readonly<T>` in TypeScript?",
    code: null,
    options: [
      "Makes the properties of an object readonly.",
      "Makes the entire object readonly.",
      "Makes arrays readonly.",
      "Converts an object to a tuple.",
    ],
    correctAnswer: 0,
    explanation:
      "`Readonly<T>` makes all the properties of an object `readonly`, meaning they cannot be reassigned after being initialized.",
  },
  {
    id: 3,
    title: "What is the result of `typeof` operator in TypeScript?",
    code: null,
    options: [
      "It checks the type of a variable.",
      "It converts a value to a specific type.",
      "It returns a string representing the type of a variable.",
      "It throws an error if used on an undefined variable.",
    ],
    correctAnswer: 2,
    explanation:
      "`typeof` in TypeScript returns a string that represents the type of a variable (e.g., 'string', 'number', 'boolean').",
  },
  {
    id: 4,
    title: "How would you handle optional properties in TypeScript interfaces?",
    code: null,
    options: [
      "Using `?` after the property name.",
      "Using `default` keyword.",
      "Using `null` value for the property.",
      "Using `undefined` for the property.",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, optional properties in interfaces are defined by appending a `?` to the property name.",
  },
  {
    id: 5,
    title:
      "Which of the following is the correct syntax to declare a function type in TypeScript?",
    code: null,
    options: [
      "const func: Function = (a: number) => a + 1;",
      "const func: (a: number) => number = (a) => a + 1;",
      "const func: (a: string) => void = (a) => { console.log(a); };",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "All the given syntaxes are correct for declaring function types in TypeScript.",
  },
  {
    id: 6,
    title: "What is the purpose of `never` type in TypeScript?",
    code: null,
    options: [
      "It represents a value that can never happen.",
      "It is used for variables that will always be `undefined`.",
      "It is used to describe a value that can only be `null`.",
      "It is used for types that cannot be mutated.",
    ],
    correctAnswer: 0,
    explanation:
      "`never` represents a type of values that will never occur, such as an infinite loop or throwing an error in a function.",
  },
  {
    id: 7,
    title: "Which of the following is true about `tuple` types in TypeScript?",
    code: null,
    options: [
      "A tuple is an array-like structure that can hold values of different types.",
      "Tuples can only contain values of the same type.",
      "A tuple cannot hold a value of more than two types.",
      "A tuple automatically converts to an array.",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, a `tuple` can hold values of different types and provides more flexibility than an array.",
  },
  {
    id: 8,
    title:
      "How do you specify the type of a function parameter that can accept both a number or a string?",
    code: null,
    options: [
      "function add(a: number | string): void {}",
      "function add(a: string | number): void {}",
      "function add(a: string): number | string {}",
      "Both options 1 and 2 are correct.",
    ],
    correctAnswer: 3,
    explanation:
      "Both `number | string` and `string | number` are valid union types that can be used to specify that a parameter can accept either a `number` or a `string`.",
  },
  {
    id: 9,
    title: "What does `as` keyword do in TypeScript?",
    code: null,
    options: [
      "It converts one type to another.",
      "It is used for type assertions to treat a variable as a certain type.",
      "It defines a new type.",
      "It is used to check if an object is of a particular type.",
    ],
    correctAnswer: 1,
    explanation:
      "The `as` keyword in TypeScript is used for type assertions, allowing you to tell TypeScript to treat a variable as a certain type.",
  },
  {
    id: 10,
    title:
      "What is the correct syntax for defining a class that implements an interface in TypeScript?",
    code: `
    interface Person {
      name: string;
      age: number;
    }
    `,
    options: [
      "class User implements Person { constructor(public name: string, public age: number) {} }",
      "class User: Person { constructor(public name: string, public age: number) {} }",
      "class User implements Person { name: string; age: number; constructor() {} }",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, the correct syntax to implement an interface is `class User implements Person { constructor(public name: string, public age: number) {} }`.",
  },
]
