export const tsBeltSeniorQuestions = [
  {
    id: 1,
    title: "What will return this code?",
    code: `
    pipe(['hello', 'wo', 'rld'], A.filter(value => value.length < 4, A.tail)`,
    options: ["['wo']", "Some(['rld'])", "['hello']", "Some(['hello world'])"],
    correctAnswer: 1,
    explanation:
      "First you filter values that have length less than 4, so 'hello' is filtered out. Then you take the tail of the array, which will remove the first element and return an Option with the rest.",
  },
  {
    id: 2,
    title: "What does `Option.flatten()` do in ts-belt?",
    code: null,
    options: [
      "It flattens nested `Option` types into a single `Option`",
      "It unwraps an `Option` into its underlying value",
      "It applies a function to the value inside an `Option`",
      "It returns a default value if `Option` is `none`",
    ],
    correctAnswer: 0,
    explanation:
      "`Option.flatten()` is used to flatten a nested `Option` (i.e., an `Option<Option<T>>`) into a single `Option<T>`.",
  },
  {
    id: 3,
    title: "What will return this code?",
    code: `const test = pipe(O.fromNullable(null), O.getWithDefault('test'))
    const test1 = pipe(
    O.fromNullable(test),
    O.filter((t) => t === 'test'),
    O.match(
      (t) => <div>{t}</div>,
      () => <div>Other Answer</div>,
    ),
  )`,
    options: [
      "<div>Other Answer<</div>",
      "This will throw an error",
      "<div>test</div>",
      "test",
    ],
    correctAnswer: 2,
    explanation:
      "First, the const test will be 'test' since the value is null. Then, the value will be filtered out, and the match will return the value inside the Option.",
  },
  {
    id: 4,
    title: "What will return this code?",
    code: `function() {
  const value = pipe(
    ['hello', 'world', '+ts', '+belt'],
    A.filter(S.startsWith('+')),
    A.join('-'),
    S.removeAll('+'),
  )

  return value
}`,
    options: ["'ts-belt'", "'ts-belt-'", "'ts-belt-world'", "'ts-belt-world-'"],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: 5,
    title: "What will return this code?",
    code: `G.isArray([1, 2, 3])`,
    options: ["false", "true", "undefined", "An error is thrown"],
    correctAnswer: 1,
    explanation:
      "The `G.isArray()` function checks if the provided value is an array and returns `true` if it is.",
  },
  {
    id: 6,
    title: "What will return this code?",
    code: `const addTwo = F.after(1, N.add(2))
    addTwo(8)
    addTwo(16)`,
    options: [
      "None for the first and Some(18) for the second",
      "Some(10) for the first and Some(18) for the second",
      "Some(10) for the first and None for the second",
      "None for the first and None for the second",
    ],
    correctAnswer: 0,
    explanation:
      "The `F.after()` function returns a function that will only execute after the specified number of calls. The first call will return `none`, and the second call will return `Some(18)`.",
  },
  {
    id: 7,
    title: "What will return this code?",
    code: `function() {
  const clean = flow(S.removeAll('X'), S.toLowerCase)
  const value = pipe(
    ['HellXXXo', 'wOrXXXLd'],
    A.map(clean),
    A.join(' ')
  )

  return value
}`,
    options: ["HellXXXo wOrXXXLd", "hello wOrXXXLd", "hello", "hello world"],
    correctAnswer: 3,
    explanation:
      "First, the `clean` function is created to remove all 'X' characters and convert the string to lowercase. Then, the `map()` function is used to apply the `clean` function to each element in the array. Finally, the `join()` function is used to concatenate the array elements into a single string.",
  },
  {
    id: 8,
    title: "What is the difference between `map()` and `flatMap()` in ts-belt?",
    code: null,
    options: [
      "`map()` transforms the value inside the `Option` or `Result`, while `flatMap()` is used to chain multiple operations that return an `Option` or `Result`",
      "`map()` applies a side effect, while `flatMap()` transforms the value",
      "`map()` works only with arrays, while `flatMap()` works with objects",
      "`map()` is used for transformation, while `flatMap()` is used for validation",
    ],
    correctAnswer: 0,
    explanation:
      "`map()` transforms the value inside an `Option` or `Result`, while `flatMap()` is used to chain operations that return an `Option` or `Result`, flattening the results into a single value.",
  },
  {
    id: 9,
    title:
      "How would you handle a sequence of operations that might fail, ensuring all operations are successful before proceeding?",
    code: null,
    options: [
      "Use `alt()` to chain operations and handle failures",
      "Use `combine()` to merge results and ensure success",
      "Use `map()` for each operation to propagate errors",
      "Use `chain()` to ensure all operations return successful results before continuing",
    ],
    correctAnswer: 3,
    explanation:
      "`chain()` allows you to chain operations that return `Option` or `Result` types and ensures that each operation is successful before continuing to the next.",
  },
  {
    id: 10,
    title:
      "How can i get an array of same values from two arrays using ts-belt?",
    code: null,
    options: [
      "A.intersection",
      "A.union",
      "A.difference",
      "A.symmetricDifference",
    ],
    correctAnswer: 0,
    explanation: "A.intersection will return an array of same values",
  },
]
