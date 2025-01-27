export const vitestIntermediateQuestions = [
  {
    id: 1,
    title: "How do you mock an entire module in Vitest?",
    code: null,
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
    code: null,
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
    code: null,
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
    code: null,
    options: [
      "expect(mockFunction).toBeCalledWith(42)",
      "expect(mockFunction).toHaveBeenCalledWith(42)",
      "expect(mockFunction).toHaveBeenCalledWithExactly(42)",
      "expect(mockFunction).toEqual(42)",
    ],
    correctAnswer: 1,
    explanation:
      "`toHaveBeenCalledWith()` is used to match specific arguments that were passed to a mock function.",
  },
  {
    id: 5,
    title: "How can you delay a test to simulate async behavior?",
    code: null,
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
    code: null,
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
    code: null,
    options: [
      "expect(fetchData()).toBeResolvedWith('Data')",
      "expect(fetchData()).toBe('Data')",
      "expect(fetchData()).toThrowError()",
      "expect(fetchData()).resolves.toBe('Data')",
    ],
    correctAnswer: 3,
    explanation:
      "`expect(fetchData()).resolves.toBe('Data')` is used to test the resolution value of a promise.",
  },
  {
    id: 8,
    title: "How can you spy on a specific method of an object in Vitest?",
    code: null,
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
    code: null,
    options: [
      "vi.fn().mockResolvedValue('Hello')",
      "vi.fn().mockReturnValue('Hello')",
      "vi.fn().mockImplementation(() => 'Hello')",
      "vi.fn().mockReturnValueOnce('Hello')",
    ],
    correctAnswer: 1,
    explanation:
      "`vi.fn().mockReturnValue('Hello')` creates a mock function that always returns 'Hello' when called.",
  },
  {
    id: 10,
    title: "How can you test a function with multiple arguments in Vitest?",
    code: null,
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
