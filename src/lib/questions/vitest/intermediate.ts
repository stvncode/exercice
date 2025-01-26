export const vitestIntermediateQuestions = [
  {
    id: 1,
    title: "How do you mock an entire module in Vitest?",
    code: `// How can you mock a whole module in Vitest?
    import { fetchData } from './api';
    vi.mock('./api');
    `,
    options: [
      "vi.mock('./api')",
      "vi.fn('./api')",
      "vi.spyOn('./api')",
      "vi.mocked('./api')",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.mock('./api')` is used to mock an entire module in Vitest.",
  },
  {
    id: 2,
    title: "What function do you use to clear all mocks between tests?",
    code: `// Which function clears all mocks in Vitest?
    vi.mockClear();
    `,
    options: [
      "vi.clearMocks()",
      "vi.restoreMocks()",
      "vi.mockClear()",
      "vi.resetMocks()",
    ],
    correctAnswer: 2,
    explanation:
      "`vi.mockClear()` clears the state of all mocks, including call history, return values, and mock implementation.",
  },
  {
    id: 3,
    title: "How can you test if a function throws an error?",
    code: `// How can you test if a function throws an error?
    function throwError() { throw new Error("Something went wrong"); }
    `,
    options: [
      "expect(throwError).toThrow()",
      "expect(throwError).toThrowError()",
      "expect(throwError).toBeError()",
      "expect(throwError).toThrowErrorMatchingSnapshot()",
    ],
    correctAnswer: 0,
    explanation:
      "`expect(throwError).toThrow()` is used to assert that a function throws an error.",
  },
  {
    id: 4,
    title: "How can you match a function’s argument in a spy?",
    code: `// How can you match the argument passed to a function in Vitest?
    const mockFunction = vi.fn();
    mockFunction(42);
    `,
    options: [
      "expect(mockFunction).toHaveBeenCalledWith(42)",
      "expect(mockFunction).toBeCalledWith(42)",
      "expect(mockFunction).toHaveBeenCalledWithExactly(42)",
      "expect(mockFunction).toEqual(42)",
    ],
    correctAnswer: 0,
    explanation:
      "`toHaveBeenCalledWith()` is used to match specific arguments that were passed to a mock function.",
  },
  {
    id: 5,
    title: "How can you delay a test to simulate async behavior?",
    code: `// How do you simulate an async delay in a test?
    vi.advanceTimersByTime(1000);
    `,
    options: [
      "vi.useFakeTimers()",
      "vi.advanceTimersByTime()",
      "vi.mockAsync()",
      "vi.waitFor()",
    ],
    correctAnswer: 1,
    explanation:
      "`vi.advanceTimersByTime()` simulates the passing of time when using fake timers in Vitest, useful for testing async code.",
  },
  {
    id: 6,
    title: "What is the purpose of `vi.resetAllMocks()`?",
    code: `// What does vi.resetAllMocks() do in Vitest?
    vi.resetAllMocks();
    `,
    options: [
      "Restores the original implementations of all mocks",
      "Clears all spy functions",
      "Resets the timers",
      "Removes the mock module",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.resetAllMocks()` restores the original implementations of all mocks and resets their state.",
  },
  {
    id: 7,
    title: "How do you test for promises in Vitest?",
    code: `// How do you test a promise in Vitest?
    async function fetchData() {
      return "Data";
    }
    `,
    options: [
      "expect(fetchData()).resolves.toBe('Data')",
      "expect(fetchData()).toBeResolvedWith('Data')",
      "expect(fetchData()).toBe('Data')",
      "expect(fetchData()).toThrowError()",
    ],
    correctAnswer: 0,
    explanation:
      "`expect(fetchData()).resolves.toBe('Data')` is used to test the resolution value of a promise.",
  },
  {
    id: 8,
    title: "How can you spy on a specific method of an object in Vitest?",
    code: `// How do you spy on a method of an object?
    const myObj = {
      method: () => {}
    };
    vi.spyOn(myObj, 'method');
    `,
    options: [
      "vi.spyOn(myObj, 'method')",
      "vi.mock(myObj, 'method')",
      "vi.fn(myObj.method)",
      "vi.mocked(myObj.method)",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.spyOn()` is used to spy on a specific method of an object, allowing you to track its calls and arguments.",
  },
  {
    id: 9,
    title: "How can you create a mock function that returns specific values?",
    code: `// How do you mock a function to return specific values?
    const mockFunction = vi.fn().mockReturnValue('Hello');
    `,
    options: [
      "vi.fn().mockReturnValue('Hello')",
      "vi.fn().mockResolvedValue('Hello')",
      "vi.fn().mockImplementation(() => 'Hello')",
      "vi.fn().mockReturnValueOnce('Hello')",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.fn().mockReturnValue('Hello')` creates a mock function that always returns 'Hello' when called.",
  },
  {
    id: 10,
    title: "How can you test a function with multiple arguments in Vitest?",
    code: `// How would you test a function with multiple arguments?
    function add(a, b) {
      return a + b;
    }
    `,
    options: [
      "expect(add).toHaveBeenCalledWith(1, 2)",
      "expect(add).toHaveArguments(1, 2)",
      "expect(add).toHaveBeenCalledWithExactly(1, 2)",
      "expect(add).toBeCalledWith(1, 2)",
    ],
    correctAnswer: 0,
    explanation:
      "`expect(add).toHaveBeenCalledWith(1, 2)` asserts that the function `add` was called with the arguments 1 and 2.",
  },
]
