export const tsBeltExercises = [
  {
    id: 1,
    title: "Use `Option` to handle nullable values",
    objective:
      "Use `Option` from ts-belt to handle nullable values and return a default value when the value is null.",
    codeStarter: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const getUsername = (user: { name: string | null }): Option<string> => {
    // Your code here to return 'some' if name is not null, otherwise 'none'
  }
  
  const user = { name: null };
  const username = getUsername(user);
  `,
    solution: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const getUsername = (user: { name: string | null }): Option<string> => {
    return user.name ? some(user.name) : none;
  }
  
  const user = { name: null };
  const username = getUsername(user);
  // username is now 'none'
  `,
  },
  {
    id: 2,
    title: "Use `Result` to handle success or failure",
    objective:
      "Use `Result` to represent either a successful outcome or an error, and handle the success or error case.",
    codeStarter: `
  import { Result, Ok, Err } from '@mobility/ts-belt';
  
  const divide = (a: number, b: number): Result<number, string> => {
    // Your code here to return 'Ok' if successful, 'Err' if dividing by zero
  }
  
  const result = divide(10, 0);
  `,
    solution: `
  import { Result, Ok, Err } from '@mobility/ts-belt';
  
  const divide = (a: number, b: number): Result<number, string> => {
    if (b === 0) {
      return Err('Cannot divide by zero');
    }
    return Ok(a / b);
  }
  
  const result = divide(10, 0);
  // result is Err('Cannot divide by zero')
  `,
  },
  {
    id: 3,
    title: "Use `map` with Option to transform a value",
    objective:
      "Use the `map` method from `Option` to transform the value contained within `Option`.",
    codeStarter: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const addExclamation = (str: string): string => str + '!';
  
  const greetUser = (name: Option<string>): Option<string> => {
    // Your code here to map the 'Option' with the 'addExclamation' function
  }
  
  const name = some('Alice');
  const greeting = greetUser(name);
  `,
    solution: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const addExclamation = (str: string): string => str + '!';
  
  const greetUser = (name: Option<string>): Option<string> => {
    return name.map(addExclamation);
  }
  
  const name = some('Alice');
  const greeting = greetUser(name);
  // greeting is some('Alice!')
  `,
  },
  {
    id: 4,
    title: "Use `flatMap` with Option to chain operations",
    objective:
      "Use `flatMap` to chain operations that return an `Option` and flatten the result.",
    codeStarter: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const getUserById = (id: number): Option<{ name: string }> => {
    // Your code here to return 'some' with the user object or 'none'
  }
  
  const getUsername = (user: Option<{ name: string }>): Option<string> => {
    // Your code here to extract the 'name' field from the user object if it exists
  }
  
  const user = getUserById(1);
  const username = getUsername(user);
  `,
    solution: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const getUserById = (id: number): Option<{ name: string }> => {
    // Simulating a database fetch
    return id === 1 ? some({ name: 'Alice' }) : none;
  }
  
  const getUsername = (user: Option<{ name: string }>): Option<string> => {
    return user.flatMap(u => some(u.name));
  }
  
  const user = getUserById(1);
  const username = getUsername(user);
  // username is some('Alice')
  `,
  },
  {
    id: 5,
    title: "Use `fromNullable` to safely wrap nullable values in Option",
    objective:
      "Use `fromNullable` to safely convert a nullable value into an `Option`.",
    codeStarter: `
  import { Option, fromNullable } from '@mobility/ts-belt';
  
  const nullableName: string | null = null;
  const nameOption: Option<string> = fromNullable(nullableName);
  `,
    solution: `
  import { Option, fromNullable } from '@mobility/ts-belt';
  
  const nullableName: string | null = null;
  const nameOption: Option<string> = fromNullable(nullableName);
  // nameOption will be 'none'
  `,
  },
  {
    id: 6,
    title: "Use `mapErr` to map errors in Result",
    objective: "Use `mapErr` to transform the error part of a `Result`.",
    codeStarter: `
  import { Result, Ok, Err } from '@mobility/ts-belt';
  
  const result = Err('Initial error');
  
  const transformedResult = result.mapErr((err) => err.toUpperCase());
  `,
    solution: `
  import { Result, Ok, Err } from '@mobility/ts-belt';
  
  const result = Err('Initial error');
  
  const transformedResult = result.mapErr((err) => err.toUpperCase());
  // transformedResult is Err('INITIAL ERROR')
  `,
  },
  {
    id: 7,
    title: "Use `getWithDefault` to provide a fallback value in Option",
    objective:
      "Use `getWithDefault` to provide a default value when the `Option` is `none`.",
    codeStarter: `
  import { Option, none } from '@mobility/ts-belt';
  
  const fallback = 'No username';
  const username = none;
  const result = username.getWithDefault(fallback);
  `,
    solution: `
  import { Option, none } from '@mobility/ts-belt';
  
  const fallback = 'No username';
  const username = none;
  const result = username.getWithDefault(fallback);
  // result is 'No username'
  `,
  },
  {
    id: 8,
    title: "Use `filter` with Option to conditionally transform a value",
    objective:
      "Use `filter` to transform the value within an `Option` if it satisfies a condition.",
    codeStarter: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const numberOption = some(10);
  
  const filtered = numberOption.filter((x) => x > 5);
  `,
    solution: `
  import { Option, some, none } from '@mobility/ts-belt';
  
  const numberOption = some(10);
  
  const filtered = numberOption.filter((x) => x > 5);
  // filtered is some(10)
  `,
  },
  {
    id: 9,
    title: "Use `toString` with Option to get a string representation",
    objective:
      "Use the `toString` method to get a string representation of an `Option`.",
    codeStarter: `
  import { Option, some } from '@mobility/ts-belt';
  
  const value = some('Hello');
  const strValue = value.toString();
  `,
    solution: `
  import { Option, some } from '@mobility/ts-belt';
  
  const value = some('Hello');
  const strValue = value.toString();
  // strValue is 'some("Hello")'
  `,
  },
  {
    id: 10,
    title: "Use `chain` to chain operations with Result",
    objective:
      "Use `chain` to chain multiple operations that return a `Result`.",
    codeStarter: `
  import { Result, Ok, Err } from '@mobility/ts-belt';
  
  const parseNumber = (str: string): Result<number, string> => {
    const parsed = parseInt(str, 10);
    return isNaN(parsed) ? Err('Invalid number') : Ok(parsed);
  }
  
  const addOne = (n: number): Result<number, string> => Ok(n + 1);
  
  const result = parseNumber('10').chain(addOne);
  `,
    solution: `
  import { Result, Ok, Err } from '@mobility/ts-belt';
  
  const parseNumber = (str: string): Result<number, string> => {
    const parsed = parseInt(str, 10);
    return isNaN(parsed) ? Err('Invalid number') : Ok(parsed);
  }
  
  const addOne = (n: number): Result<number, string> => Ok(n + 1);
  
  const result = parseNumber('10').chain(addOne);
  // result is Ok(11)
  `,
  },
]
