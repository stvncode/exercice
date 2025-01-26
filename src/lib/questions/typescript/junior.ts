export const typescriptJuniorQuestions = [
  {
    id: 1,
    title: "What is TypeScript?",
    code: null,
    options: [
      "A JavaScript framework",
      "A superset of JavaScript that adds static types",
      "A new version of JavaScript",
      "A tool for bundling JavaScript",
    ],
    correctAnswer: 1,
    explanation:
      "TypeScript is a superset of JavaScript that adds static typing and type checking to JavaScript.",
  },
  {
    id: 2,
    title: "How do you declare a variable in TypeScript?",
    code: null,
    options: [
      "var myVar: string = 'Hello';",
      "let myVar = 'Hello';",
      "const myVar = 'Hello';",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "You can declare a variable using `var`, `let`, or `const` in TypeScript. TypeScript allows explicit typing, like `let myVar: string = 'Hello';`.",
  },
  {
    id: 3,
    title:
      "Which type does TypeScript infer for the following variable: `let value = 10;`?",
    code: null,
    options: ["number", "string", "any", "undefined"],
    correctAnswer: 0,
    explanation:
      "TypeScript infers that the type of `value` is `number` because it is initialized with a numeric value.",
  },
  {
    id: 4,
    title: "What is the correct type for an array of numbers in TypeScript?",
    code: null,
    options: [
      "number[]",
      "Array<number>",
      "both of the above",
      "array<number>",
    ],
    correctAnswer: 2,
    explanation:
      "Both `number[]` and `Array<number>` are valid ways to define an array of numbers in TypeScript.",
  },
  {
    id: 5,
    title: "How do you define a function in TypeScript with typed arguments?",
    code: null,
    options: [
      "function add(a: number, b: number): number { return a + b; }",
      "function add(a, b): number { return a + b; }",
      "function add(a: number, b) { return a + b; }",
      "function add(a: any, b: any): any { return a + b; }",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, you can specify types for function parameters and return values, like `function add(a: number, b: number): number { return a + b; }`.",
  },
  {
    id: 6,
    title: "What does the `any` type represent in TypeScript?",
    code: null,
    options: [
      "A type that allows any kind of value",
      "A special type for arrays",
      "A type for numbers only",
      "A type for objects",
    ],
    correctAnswer: 0,
    explanation:
      "The `any` type in TypeScript allows a variable to be of any type, bypassing type checking.",
  },
  {
    id: 7,
    title: "What is the purpose of interfaces in TypeScript?",
    code: null,
    options: [
      "To define object structures and enforce type checking",
      "To define the types of primitive values",
      "To initialize classes",
      "To create variables with dynamic types",
    ],
    correctAnswer: 0,
    explanation:
      "Interfaces in TypeScript are used to define the structure of objects, allowing for type safety and enforcing specific properties and methods.",
  },
  {
    id: 8,
    title:
      "Which of the following is a valid TypeScript type declaration for a function?",
    code: null,
    options: [
      "function greet(name: string): void { console.log('Hello ' + name); }",
      "function greet(name) { console.log('Hello ' + name); }",
      "function greet(name: any): void { console.log('Hello ' + name); }",
      "function greet(name: string): any { console.log('Hello ' + name); }",
    ],
    correctAnswer: 0,
    explanation:
      "In TypeScript, you can specify the parameter and return types, such as `function greet(name: string): void { console.log('Hello ' + name); }`.",
  },
  {
    id: 9,
    title: "What does the `undefined` type represent in TypeScript?",
    code: null,
    options: [
      "A value that has been assigned but not initialized",
      "A value that is absent or not present",
      "A type that has no value at all",
      "The absence of any value in a variable",
    ],
    correctAnswer: 1,
    explanation:
      "`undefined` represents a value that is absent or not present in a variable in TypeScript. It is different from `null`.",
  },
  {
    id: 10,
    title: "Which of the following is a valid type assertion in TypeScript?",
    code: `
    let value: any = 'Hello';
    // Type assertion example
    `,
    options: [
      "let length = (<string>value).length;",
      "let length = (value as string).length;",
      "Both of the above",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "In TypeScript, both `<string>value` and `value as string` are valid ways to perform type assertions, but the latter is preferred in JSX contexts.",
  },
]
