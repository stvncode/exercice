export const playwrightIntermediateQuestions = [
  {
    id: 1,
    title: "How do you handle dynamic content loading in Playwright?",
    code: null,
    options: [
      "Use page.waitForSelector()",
      "Use page.waitForNavigation()",
      "Use page.waitForTimeout()",
      "Use page.waitForLoad()",
    ],
    correctAnswer: 0,
    explanation:
      "To handle dynamic content, you can use 'page.waitForSelector()' to wait for specific elements to appear on the page.",
  },
  {
    id: 2,
    title: "What is the correct way to wait for an element to become visible?",
    code: `await expect(page.locator('selector')).toBeVisible()`,
    options: [
      "await page.locator('selector').toBeVisible()",
      "await expect(page.locator('selector')).toBeVisible()",
      "await page.waitForSelector('selector', { state: 'visible' })",
      "await page.waitForSelector('selector')",
    ],
    correctAnswer: 1,
    explanation:
      "'await expect(page.locator('selector')).toBeVisible()' waits for an element to become visible in Playwright.",
  },
  {
    id: 3,
    title:
      "Which Playwright feature allows testing in multiple browser contexts?",
    code: null,
    options: [
      "Test Runner",
      "Browser Contexts",
      "Browser Extensions",
      "Test Scenarios",
    ],
    correctAnswer: 1,
    explanation:
      "In Playwright, 'Browser Contexts' allow testing in isolated browser environments, simulating different sessions.",
  },
  {
    id: 4,
    title: "How can you interact with a dropdown select element in Playwright?",
    code: `await page.selectOption('select[name="dropdown"]', 'optionValue')`,
    options: [
      "await page.selectOption('select[name=dropdown]', 'optionValue')",
      "await page.select('select[name=dropdown]', 'optionValue')",
      "await page.fill('select[name=dropdown]', 'optionValue')",
      "await page.select('select[name=dropdown]')",
    ],
    correctAnswer: 0,
    explanation:
      "In Playwright, 'await page.selectOption()' is used to select an option from a dropdown element.",
  },
  {
    id: 5,
    title: "What is the best way to test a login form using Playwright?",
    code: null,
    options: [
      "Use page.click() to click the login button",
      "Use page.fill() to enter credentials and page.click() to submit",
      "Use page.locator() to locate form elements and submit with a button",
      "Use page.type() to enter username and password",
    ],
    correctAnswer: 1,
    explanation:
      "The best approach is to fill in the form fields using 'page.fill()' and then submit the form using 'page.click()'.",
  },
  {
    id: 6,
    title: "How do you interact with an iframe in Playwright?",
    code: `const iframe = await page.frame({ name: 'frameName' })`,
    options: [
      "const iframe = page.frame('frameName')",
      "const iframe = await page.frame({ name: 'frameName' })",
      "const iframe = page.locator('iframe').contentFrame()",
      "const iframe = page.frame({ selector: 'iframe' })",
    ],
    correctAnswer: 1,
    explanation:
      "In Playwright, you can interact with an iframe using 'page.frame()' with the name or selector of the iframe.",
  },
  {
    id: 7,
    title:
      "How can you ensure a specific element is hidden before performing actions?",
    code: `await expect(page.locator('selector')).not.toBeVisible()`,
    options: [
      "await expect(page.locator('selector')).toBeHidden()",
      "await page.locator('selector').not.toBeVisible()",
      "await page.waitForSelector('selector', { state: 'hidden' })",
      "await expect(page.locator('selector')).not.toBeVisible()",
    ],
    correctAnswer: 3,
    explanation:
      "To ensure an element is not visible before interacting, use 'await expect(page.locator('selector')).not.toBeVisible()'.",
  },
  {
    id: 8,
    title: "What Playwright command is used to handle multiple tabs?",
    code: null,
    options: [
      "page.context()",
      "browser.newPage()",
      "page.switchToTab()",
      "page.context.newPage()",
    ],
    correctAnswer: 1,
    explanation:
      "In Playwright, you can handle multiple tabs by creating new pages using 'browser.newPage()'.",
  },
  {
    id: 9,
    title: "What is the correct way to run Playwright tests in headless mode?",
    code: `const browser = await playwright.chromium.launch({ headless: true })`,
    options: [
      "const browser = await playwright.launch({ headless: true })",
      "const browser = await playwright.chromium.launch({ headless: false })",
      "const browser = await playwright.chromium.launch()",
      "const browser = await playwright.launch({ headless: true })",
    ],
    correctAnswer: 0,
    explanation:
      "To run tests in headless mode, set 'headless: true' when launching the browser instance.",
  },
  {
    id: 10,
    title: "How can you check if an element contains specific text?",
    code: `await expect(page.locator('selector')).toHaveText('expectedText')`,
    options: [
      "await expect(page.locator('selector')).toHaveText('expectedText')",
      "await page.locator('selector').containsText('expectedText')",
      "await page.textContent('selector') === 'expectedText'",
      "await page.locator('selector').text('expectedText')",
    ],
    correctAnswer: 0,
    explanation:
      "To check if an element contains specific text, use 'await expect(page.locator('selector')).toHaveText('expectedText')'.",
  },
]
