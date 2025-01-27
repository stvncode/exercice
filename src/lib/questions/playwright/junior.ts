export const playwrightJuniorQuestions = [
  {
    id: 1,
    title: "What is Playwright used for?",
    code: null,
    options: [
      "Automating UI testing",
      "Building web apps",
      "Designing websites",
      "Managing databases",
    ],
    correctAnswer: 0,
    explanation:
      "Playwright is used for automating UI testing by simulating user interactions with web pages.",
  },
  {
    id: 2,
    title:
      "Which of the following methods is used to navigate to a URL in Playwright?",
    code: null,
    options: [
      "page.navigate('<URL>')",
      "page.load('<URL>')",
      "page.goto('<URL>')",
      "page.redirect('<URL>')",
    ],
    correctAnswer: 2,
    explanation:
      "In Playwright, the method to navigate to a URL is 'page.goto()'.",
  },
  {
    id: 3,
    title: "How can you interact with a button element using Playwright?",
    code: null,
    options: [
      "await page.click('button')",
      "await page.fill('button')",
      "await page.type('button')",
      "await page.hover('button')",
    ],
    correctAnswer: 0,
    explanation:
      "To click a button, you can use 'page.click('button')' in Playwright.",
  },
  {
    id: 4,
    title: "Which command waits for a page to load in Playwright?",
    code: null,
    options: [
      "await page.waitForLoad()",
      "await page.waitForNavigation()",
      "await page.navigate()",
      "await page.load()",
    ],
    correctAnswer: 1,
    explanation:
      "The correct command to wait for a page to load is 'await page.waitForNavigation()'.",
  },
  {
    id: 5,
    title: "How can you capture a screenshot of the page in Playwright?",
    code: null,
    options: [
      "await page.screenshot('screenshot.png')",
      "await page.captureScreenshot()",
      "await page.snapshot('screenshot.png')",
      "await page.screenshot({ path: 'screenshot.png' })",
    ],
    correctAnswer: 3,
    explanation:
      "The correct method to capture a screenshot in Playwright is 'await page.screenshot({ path: 'screenshot.png' })'.",
  },
  {
    id: 6,
    title: "How do you get the text content of an element in Playwright?",
    code: null,
    options: [
      "await page.getText('selector')",
      "await page.getContent('selector')",
      "await page.innerText('selector')",
      "await page.textContent('selector')",
    ],
    correctAnswer: 2,
    explanation:
      "In Playwright, 'await page.innerText('selector')' is used to retrieve the text content of an element.",
  },
  {
    id: 7,
    title: "Which Playwright command is used to click on an element?",
    code: null,
    options: ["page.select()", "page.click()", "page.press()", "page.touch()"],
    correctAnswer: 1,
    explanation:
      "To simulate a click on an element in Playwright, use 'page.click()'.",
  },
  {
    id: 8,
    title: "How do you launch a Chrome instance in Playwright?",
    code: null,
    options: [
      "const browser = await playwright.launch()",
      "const browser = await playwright.chromium.launch()",
      "const browser = playwright.launch()",
      "const browser = playwright.firefox.launch()",
    ],
    correctAnswer: 1,
    explanation:
      "To launch a Chromium browser instance, use 'const browser = await playwright.chromium.launch()'.",
  },
  {
    id: 9,
    title: "How do you interact with an input field in Playwright?",
    code: null,
    options: [
      "await page.select('input[name=username]')",
      "await page.fill('input[name=username]', 'user123')",
      "await page.type('input[name=username]', 'user123')",
      "await page.enter('input[name=username]', 'user123')",
    ],
    correctAnswer: 1,
    explanation:
      "In Playwright, use 'await page.fill()' to fill an input field with a value.",
  },
  {
    id: 10,
    title:
      "How do you check if an element is visible on the page in Playwright?",
    code: null,
    options: [
      "await expect(page.locator('selector')).toBeVisible()",
      "await page.locator('selector').isVisible()",
      "await page.locator('selector').visible()",
      "await expect(page.locator('selector')).toBePresent()",
    ],
    correctAnswer: 0,
    explanation:
      "In Playwright, to check visibility, use 'await expect(page.locator('selector')).toBeVisible()'.",
  },
]
