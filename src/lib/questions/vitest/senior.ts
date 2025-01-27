export const vitestSeniorQuestions = [
  {
    id: 1,
    title: "How can you mock a module and its named exports using Vitest?",
    code: null,
    options: [
      "vi.mock('./api', () => ({}))",
      "vi.mock('./api', { fetchData: vi.fn() })",
      "vi.mock('./api', () => ({ fetchData: vi.fn() }))",
      "vi.mock('./api', () => ({ fetchData: vi.fn().mockResolvedValue() }))",
    ],
    correctAnswer: 2,
    explanation:
      "`vi.mock('./api', () => ({ fetchData: vi.fn().mockResolvedValue('Mocked Data') }))` is the correct way to mock named exports from a module in Vitest.",
  },
  {
    id: 2,
    title: "How can you mock a module's default export with Vitest?",
    code: null,
    options: [
      "vi.mock('./api', () => ({ default: vi.fn() }))",
      "vi.mock('./api', () => ({ default: vi.fn().mockResolvedValue() }))",
      "vi.mock('./api').default.mockResolvedValue('Mocked Data')",
      "vi.mock('./api', { default: vi.fn() })",
    ],
    correctAnswer: 1,
    explanation:
      "`vi.mock('./api', () => ({ default: vi.fn().mockResolvedValue('Mocked Data') }))` mocks the default export of the module.",
  },
  {
    id: 3,
    title: "How can you mock a function that throws an error in Vitest?",
    code: null,
    options: [
      "vi.fn(() => { throw new Error() })",
      "vi.fn().mockImplementation(() => { throw new Error() })",
      "vi.fn().mockRejectedValue(new Error())",
      "vi.fn().mockThrow(new Error())",
    ],
    correctAnswer: 1,
    explanation:
      "`vi.fn().mockImplementation(() => { throw new Error() })` is used to mock a function that throws an error.",
  },
  {
    id: 4,
    title: "How can you test code that depends on timers in Vitest?",
    code: null,
    options: [
      "vi.useFakeTimers() and vi.advanceTimersByTime()",
      "vi.useFakeTimers() and vi.timerDone()",
      "vi.advanceTimers() and vi.resetTimers()",
      "vi.advanceFakeTimers()",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.useFakeTimers()` is used to mock timers, and `vi.advanceTimersByTime()` allows you to simulate the passing of time in your tests.",
  },
  {
    id: 5,
    title:
      "How can you ensure that a mocked function is called with specific arguments in Vitest?",
    code: null,
    options: [
      "expect(mockFunction).toHaveBeenCalledWith('test', 42)",
      "expect(mockFunction).toBeCalledWith('test', 42)",
      "expect(mockFunction).toHaveArguments('test', 42)",
      "expect(mockFunction).toMatchArguments('test', 42)",
    ],
    correctAnswer: 0,
    explanation:
      "`expect(mockFunction).toHaveBeenCalledWith('test', 42)` is used to assert that the mocked function was called with the specified arguments.",
  },
  {
    id: 6,
    title: "How can you handle mock function return values in Vitest?",
    code: null,
    options: [
      "mockReturnValueOnce()",
      "mockReturnValue()",
      "mockImplementationOnce()",
      "mockImplementation()",
    ],
    correctAnswer: 0,
    explanation:
      "`mockReturnValueOnce()` allows you to return specific values for sequential calls of the mocked function.",
  },
  {
    id: 7,
    title: "How do you mock a resolved promise in Vitest?",
    code: null,
    options: [
      "vi.fn().mockResolvedValue()",
      "vi.fn().mockResolvedValueOnce()",
      "vi.fn().mockImplementation(() => Promise.resolve())",
      "vi.fn().mockImplementationOnce(() => Promise.resolve())",
    ],
    correctAnswer: 0,
    explanation:
      "`vi.fn().mockResolvedValue('Resolved Value')` mocks a resolved promise with the specified value.",
  },
  {
    id: 8,
    title: "How do you ensure a test waits for a promise to resolve?",
    code: null,
    options: [
      "expect(fetchData()).resolves.toBe('Data')",
      "expect(fetchData()).toResolveWith('Data')",
      "await expect(fetchData()).toBeResolvedWith('Data')",
      "expect(fetchData()).toAwait()",
    ],
    correctAnswer: 0,
    explanation:
      "`expect(fetchData()).resolves.toBe('Data')` is used to ensure that the promise resolves with the expected value.",
  },
  {
    id: 9,
    title: "How do you test multiple asynchronous operations in Vitest?",
    code: null,
    options: [
      "await expect(fetchData()).resolves.toBe('Data')",
      "expect(Promise.all([fetchData(), fetchUser()])).resolves.toEqual([ 'Data', { name: 'John' } ])",
      "expect(Promise.all([fetchData(), fetchUser()])).toBeResolved()",
      "expect([fetchData(), fetchUser()]).toHaveResolved()",
    ],
    correctAnswer: 1,
    explanation:
      "`expect(Promise.all([fetchData(), fetchUser()])).resolves.toEqual([ 'Data', { name: 'John' } ])` ensures multiple promises resolve as expected.",
  },
  {
    id: 10,
    title: "How can you test code with both callbacks and promises?",
    code: null,
    options: [
      "Use async/await and callbacks together",
      "Use done() callback and await the promise",
      "Use Promise.all() to resolve both promises and callbacks",
      "Mock the callbacks and promises separately",
    ],
    correctAnswer: 1,
    explanation:
      "You can use `done()` for callback-based tests and `await` to handle promises together in Vitest.",
  },
]
