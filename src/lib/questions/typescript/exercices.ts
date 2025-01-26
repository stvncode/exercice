export const typescriptExercises = [
  {
    id: 1,
    title: "Create a function that adds two numbers",
    objective:
      "Write a function that takes two numbers as arguments and returns their sum. Use TypeScript's type annotations.",
    codeStarter: `
  function add(a, b) {
    // Add the numbers a and b
    return a + b;
  }
  `,
    solution: `
  function add(a: number, b: number): number {
    return a + b;
  }
  `,
  },
  {
    id: 2,
    title: "Create a function to check if a number is even or odd",
    objective:
      "Write a function that checks if a given number is even or odd and returns a string 'even' or 'odd'. Use TypeScript types.",
    codeStarter: `
  function isEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  `,
    solution: `
  function isEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  `,
  },
  {
    id: 3,
    title: "Create a function to calculate the factorial of a number",
    objective:
      "Write a function that calculates the factorial of a given number using recursion. Ensure proper TypeScript type annotations.",
    codeStarter: `
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  `,
    solution: `
  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  `,
  },
  {
    id: 4,
    title: "Create a function that checks if a string is a palindrome",
    objective:
      "Write a function that checks whether a given string is a palindrome (same forwards and backwards) and returns a boolean.",
    codeStarter: `
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  `,
    solution: `
  function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
  }
  `,
  },
  {
    id: 5,
    title: "Create an interface for a User object",
    objective:
      "Create a TypeScript interface for a User object with properties `id`, `name`, `email`, and `age`. Then create a function that accepts a User object and logs the name and email.",
    codeStarter: `
  function logUserDetails(user) {
    console.log(user.name, user.email);
  }
  `,
    solution: `
  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }

  function logUserDetails(user: User): void {
    console.log(user.name, user.email);
  }
  `,
  },
  {
    id: 6,
    title: "Create a function that returns the longest string in an array",
    objective:
      "Write a function that takes an array of strings and returns the longest string. Use TypeScript to enforce the correct types.",
    codeStarter: `
  function findLongestString(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
  }
  `,
    solution: `
  function findLongestString(arr: string[]): string {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
  }
  `,
  },
  {
    id: 7,
    title: "Create a function that takes a number and returns its square",
    objective:
      "Write a function that accepts a number as an argument and returns its square.",
    codeStarter: `
  function square(num) {
    return num * num;
  }
  `,
    solution: `
  function square(num: number): number {
    return num * num;
  }
  `,
  },
  {
    id: 8,
    title: "Create a union type for two possible values",
    objective:
      "Write a TypeScript function that takes a parameter that can either be a string or a number and returns a message based on the type of the argument.",
    codeStarter: `
  function getType(value) {
    if (typeof value === "string") {
      return "This is a string";
    }
    return "This is a number";
  }
  `,
    solution: `
  function getType(value: string | number): string {
    if (typeof value === "string") {
      return "This is a string";
    }
    return "This is a number";
  }
  `,
  },
  {
    id: 9,
    title: "Create a function to calculate the sum of an array of numbers",
    objective:
      "Write a function that calculates the sum of an array of numbers and returns the result.",
    codeStarter: `
  function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  `,
    solution: `
  function sum(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  `,
  },
  {
    id: 10,
    title: "Create a class that implements an interface",
    objective:
      "Create an interface called `Shape` with properties `width` and `height`. Then, create a class `Rectangle` that implements this interface and calculates the area.",
    codeStarter: `
  class Rectangle {
    constructor(public width, public height) {}
    area() {
      return this.width * this.height;
    }
  }
  `,
    solution: `
  interface Shape {
    width: number;
    height: number;
  }

  class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    area(): number {
      return this.width * this.height;
    }
  }
  `,
  },
]
