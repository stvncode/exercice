export const vitestJuniorQuestions = [
  {
    id: 1,
    title: "What does `toBe()` in Vitest do?",
    code: `// What is the purpose of toBe() in Vitest?
    expect(1 + 1).toBe(2);
    `,
    options: [
      "Checks if two values are equal",
      "Checks if two values are different",
      "Tests asynchronous code",
      "Mocks a function",
    ],
    correctAnswer: 0,
    explanation:
      "`toBe()` is used to check if two values are strictly equal (using ===).",
  },
  {
    id: 2,
    title: "How can you check if a function was called?",
    code: `// How would you check if a function was called?
    const mockFunction = vi.fn();
    mockFunction();
    `,
    options: [
      "expect(mockFunction).toHaveBeenCalled()",
      "expect(mockFunction).toBeCalled()",
      "expect(mockFunction).toHaveBeenCalledTimes(1)",
      "expect(mockFunction).toHaveBeenCalledOnce()",
    ],
    correctAnswer: 0,
    explanation:
      "You can use `toHaveBeenCalled()` or `toHaveBeenCalledTimes()` to check if a function was called in Vitest.",
  },
  {
    id: 3,
    title: "Which function is used to spy on an existing function?",
    code: `// Which function is used to spy on an existing function?
    const originalFunction = () => {};
    vi.spyOn(object, 'method');
    `,
    options: ["vi.mock()", "vi.fn()", "vi.spyOn()", "vi.watch()"],
    correctAnswer: 2,
    explanation:
      "`vi.spyOn()` is used to spy on an existing method in an object, allowing you to track its behavior.",
  },
  {
    id: 4,
    title: "What does `beforeEach()` do in Vitest?",
    code: `// What does beforeEach() do in Vitest?
    beforeEach(() => {
      // setup logic
    });
    `,
    options: [
      "Executes code before each test",
      "Executes code after each test",
      "Skips the current test",
      "Mocks a function before each test",
    ],
    correctAnswer: 0,
    explanation:
      "`beforeEach()` runs a piece of setup code before each test, allowing for initialization before each test case.",
  },
  {
    id: 5,
    title: "How do you run tests in Vitest?",
    code: `// What command is used to run tests in Vitest?
    vi test();
    `,
    options: ["npx vitest run", "npm run test", "npx vitest test", "npm test"],
    correctAnswer: 0,
    explanation: "To run tests in Vitest, use the `npx vitest run` command.",
  },
  {
    id: 6,
    title: "What is the purpose of `toEqual()` in Vitest?",
    code: `// What is the purpose of toEqual() in Vitest?
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    `,
    options: [
      "Checks if two values are strictly equal",
      "Checks if two values are loosely equal",
      "Checks if two objects have the same structure and values",
      "Mocks a function",
    ],
    correctAnswer: 2,
    explanation:
      "`toEqual()` is used to check if two objects or arrays have the same structure and values, unlike `toBe()` which checks for strict equality.",
  },
  {
    id: 7,
    title: "How can you mock a function in Vitest?",
    code: `// How do you mock a function in Vitest?
    const mockFunction = vi.fn();
    mockFunction();
    `,
    options: ["vi.mock()", "vi.fn()", "vi.spyOn()", "vi.mocked()"],
    correctAnswer: 1,
    explanation:
      "`vi.fn()` is used to create a mock function in Vitest that tracks its calls, arguments, and return values.",
  },
  {
    id: 8,
    title: "How do you test asynchronous code with Vitest?",
    code: `// How do you test an async function with Vitest?
    async function fetchData() {
      return "data";
    }
    `,
    options: [
      "Use async/await and expect().resolves",
      "Use expect().toBe() for async code",
      "Use done() callback",
      "Test asynchronous code with .not",
    ],
    correctAnswer: 0,
    explanation:
      "You can use async/await with `expect().resolves` to test asynchronous code in Vitest.",
  },
  {
    id: 9,
    title: "What is `vi.fn()` used for?",
    code: `// What is vi.fn() used for in Vitest?
    const mockFunction = vi.fn();
    mockFunction();
    `,
    options: [
      "Create a mock function",
      "Spy on an existing function",
      "Run a test asynchronously",
      "Run cleanup after each test",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.fn()` is used to create a mock function that you can track and assert its behavior.",
  },
  {
    id: 10,
    title: "What does `toHaveBeenCalledTimes()` do?",
    code: `// What does toHaveBeenCalledTimes() do in Vitest?
    const mockFunction = vi.fn();
    mockFunction();
    mockFunction();
    expect(mockFunction).toHaveBeenCalledTimes(2);
    `,
    options: [
      "Checks if the function was called the specified number of times",
      "Checks if the function was called at least once",
      "Mocks a function",
      "Spies on a function",
    ],
    correctAnswer: 0,
    explanation:
      "`toHaveBeenCalledTimes()` checks if a mock function was called the specified number of times.",
  },
]
