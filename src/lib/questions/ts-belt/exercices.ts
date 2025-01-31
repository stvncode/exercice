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
    title: "From an array of numbers, get the sum of the even numbers",
    objective: null,
    codeStarter: `
  const numbers = [1, 2, 3, 4, 5, 6];
  `,
    solution: `function() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = pipe(
    numbers,
    A.filter(n => n % 2 === 0),
    A.sum,
  )
  `,
  },
  {
    id: 6,
    title: "Transform the error value in a `Result`",
    objective: "Use `mapErr` to transform the error part of a `Result`.",
    codeStarter: `
  import { Err } from '@mobility/ts-belt';
  
  const result = Err('Initial error');
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
    title:
      "Use `chain` to chain operations with Option to get a value superior at 30",
    objective:
      "Use `chain` to chain multiple operations that return an `Option`.",
    codeStarter: `
  import { Option, some, none } from '@mobility/ts-belt';
    const defaultValue: number | null = null
    `,
    solution: `
  import { Option, pipe, some, none } from '@mobility/ts-belt';
  const defaultValue: number | null = null
  const result = pipe(defaultValue, O.fromNullable, O.chain(value => value > 30 ? O.some(value) : O.none))
  `,
  },
  {
    id: 8,
    title:
      "From this array, you need to get back the string 'ts-belt' using ts-belt functions",
    objective: null,
    codeStarter: `const xs = ['hello', 'world', 'ts', 'belt']`,
    solution: `function() {
  const xs = ['hello', 'world', 'ts', 'belt']
  const value = pipe(
    O.fromNullable(xs), // → Some(['hello', 'world', 'ts', 'belt'])
    O.flatMap(A.dropExactly(2)), // → Some(['ts', 'belt'])
    O.map(A.join('-')), // → Some('ts-belt')
    O.getWithDefault('default value'), // returns \`default value\` if \`None\`
  )

  return value
}`,
  },
  {
    id: 9,
    title:
      "From this object, you need to get the result of 100 divided by the value",
    objective: null,
    codeStarter: `
  const obj = {
    value: 0,
  }
  `,
    solution: `function() {
  const obj = {
    value: 0,
  }
  const value = pipe(
    R.fromNullable(obj.value, 'value cannot be nullable!'),
    R.flatMap(value => {
      return value === 0 ? R.Error('never divide by zero!') : R.Ok(100 / value)
    }),
    R.match(value => \`100 / \${obj.value} = \${value}\`, err => err),
  )

  return value
}`,
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
