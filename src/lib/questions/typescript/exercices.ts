export const typescriptExercises = [
  {
    id: 1,
    title: "Given the data, define the interface User and use it accordingly.",
    objective:
      "Define an interface `User` for the given data and use it to type the `users` array and the `logPerson` function.",
    codeStarter: `export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(\` - \${user.name}, \${user.age}\`);
}

console.log('Users:');
users.forEach(logPerson);`,
    solution: `export interface User {
    name: string;
    age: number;
    occupation: string;
}
    export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(\` - \${user.name}, \${user.age}\`);
}

`,
  },
  {
    id: 2,
    title: "Type Person is missing",
    objective:
      "Please define it and use it in persons array and logPerson function in order to fix all the TS errors.",
    codeStarter: `
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
];

export function logPerson(user: User) {
    console.log(\` - \${user.name}, \${user.age}\`);
}

persons.forEach(logPerson);`,
    solution: `
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    console.log(\` - \${person.name}, \${person.age}\`);
}

persons.forEach(logPerson);`,
  },
  {
    id: 3,
    title: "Fix type errors in logPerson function.",
    objective:
      "LogPerson function should accept both User and Admin and should output relevant information according to the input: occupation for User and role for Admin.",
    codeStarter: `
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(\` - \${person.name}, \${person.age}, \${additionalInformation}\`);
}

persons.forEach(logPerson);`,
    solution: `interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(\` - \${person.name}, \${person.age}, \${additionalInformation}\`);
}

persons.forEach(logPerson);`,
  },
  {
    id: 4,
    title:
      "Fix typing for the filterPersons so that it can filter users and return User[] when personType='user' and return Admin[] when personType='admin'.",
    objective:
      "Also filterPersons should accept partial User/Admin type according to the personType.`criteria` argument should behave according to the `personType` argument value. `type` field is not allowed in the `criteria` field.",
    codeStarter: `interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
    console.log(
        \` - \${person.name}, \${person.age}, \${person.type === 'admin' ? person.role : person.occupation}\`
    );
}

export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);`,
    solution: `
 interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
    console.log(
        \` - \${person.name}, \${person.age}, \${person.type === 'admin' ? person.role : person.occupation}\`
    );
}

const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];

export function filterPersons(persons: Person[], personType: User['type'], criteria: Partial<Omit<User, 'type'>>): User[];
export function filterPersons(persons: Person[], personType: Admin['type'], criteria: Partial<Omit<Admin, 'type'>>): Admin[];
export function filterPersons(persons: Person[], personType: Person['type'], criteria: Partial<Person>): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = getObjectKeys(criteria);
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);
`,
  },
  {
    id: 5,
    title:
      "Define type PowerUser which should have all fields from both User and Admin (except for type)",
    objective:
      "And also have type 'powerUser' without duplicating all the fields in the code",
    codeStarter: `interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type PowerUser = unknown;

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = \`\${person.role}, \${person.occupation}\`;
    }
    console.log(\`\${person.name}, \${person.age}, \${additionalInformation}\`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);`,
    solution: `interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & {
    type: 'powerUser'
};

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = \`\${person.role}, \${person.occupation}\`;
    }
    console.log(\`\${person.name}, \${person.age}, \${additionalInformation}\`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);
`,
  },
  {
    id: 6,
    title: "Utility fonction",
    objective:
      "From a define union type, i want you to find free way to obtain only one type",
    codeStarter: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };`,
    solution: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

  First: type T1 = Exclude<Shape, { kind: "circle" }>
  Second: type T2 = Extract<Shape, { kind: "circle" }>
  Third: type T3 = Pick<Shape, Extract<keyof Shape, "kind">>\`,
  `,
  },
  {
    id: 7,
    title: "Recreate the Pick utility type",
    objective:
      "Write a utility type `MyPick` that selects the specified keys from the input type.",
    codeStarter: `
  type User = {
    id: number;
    name: string;
    age: number;
    occupation: string;
  };

  type MyPick = unknown;
  `,
    solution: `
  type User = {
    id: number;
    name: string;
    age: number;
    occupation: string;
  };

  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  `,
  },
  {
    id: 8,
    title:
      "Write and use the pluck function in TypeScript, using the index type query and indexed access operators",
    objective: null,
    codeStarter: `interface Car {
  manufacturer: string;
  model: string;
  year: number;
}
 
let taxi: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2014,
};

function pluck(o, propertyNames) {
  return propertyNames.map((n) => o[n]);
}

let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);
  `,
    solution: `function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}`,
  },
  {
    id: 9,
    title: "Create a required prop type ",
    objective: "Create a type that makes all properties in T required.",
    codeStarter: `type RequiredProps = unknown;`,
    solution: `type RequiredProps<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Required<Pick<T, K>>;`,
  },
  {
    id: 10,
    title: "Create a isUnion type",
    objective: null,
    codeStarter: `type IsUnion<T> = unknown;`,
    solution: `type IsUnion<T, U extends T = T> = T extends unknown ? ([U] extends [T] ? false : true) : false;`,
  },
]
