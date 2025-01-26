export const playwrightSeniorQuestions = [
  {
    id: 1,
    title:
      "How do you handle browser performance in Playwright to simulate real user behavior?",
    code: null,
    options: [
      "Use headless mode",
      "Enable slow-mo for all actions",
      "Configure device emulation with specific network conditions",
      "Use page.waitForTimeout() to introduce delays",
    ],
    correctAnswer: 2,
    explanation:
      "To simulate real user behavior, you can configure device emulation and specific network conditions using Playwright's 'browserContext' and 'devices' API.",
  },
  {
    id: 2,
    title: "What is the role of the Playwright 'test runner' in running tests?",
    code: null,
    options: [
      "It only collects logs for debugging",
      "It manages browser sessions for multiple tests",
      "It is used to define the test structure and manage execution",
      "It handles API requests and responses",
    ],
    correctAnswer: 2,
    explanation:
      "The Playwright test runner manages the test structure, test execution, and browser lifecycle during tests.",
  },
  {
    id: 3,
    title:
      "How do you manage multiple browser contexts for different user sessions in Playwright?",
    code: null,
    options: [
      "Use browserContext.newPage()",
      "Use browser.newPage()",
      "Use page.context()",
      "Use page.switchToContext()",
    ],
    correctAnswer: 0,
    explanation:
      "In Playwright, 'browserContext.newPage()' creates a new context which simulates a new browser session.",
  },
  {
    id: 4,
    title:
      "How can you handle authentication across multiple tests in Playwright?",
    code: null,
    options: [
      "Use browserContext.addCookies()",
      "Use page.setUserAgent()",
      "Use browserContext.setDefaultNavigationTimeout()",
      "Use page.authenticate()",
    ],
    correctAnswer: 0,
    explanation:
      "For handling authentication in multiple tests, you can use 'browserContext.addCookies()' to add cookies for an authenticated session.",
  },
  {
    id: 5,
    title:
      "How would you run tests in Playwright across different devices and viewports?",
    code: `const context = await browser.newContext({ ...devices['iPhone 11'] })`,
    options: [
      "Use browserContext.setViewportSize()",
      "Use browserContext.newPage() with a device setting",
      "Use page.viewportSize()",
      "Use the 'devices' object to emulate the device configuration",
    ],
    correctAnswer: 3,
    explanation:
      "You can emulate different devices in Playwright using the 'devices' object and 'browser.newContext()' to simulate specific devices and screen sizes.",
  },
  {
    id: 6,
    title:
      "How do you handle tracing and debugging in Playwright for complex tests?",
    code: `await context.tracing.start({ screenshots: true, snapshots: true })`,
    options: [
      "Use page.waitForSelector() to debug element visibility",
      "Use context.tracing.start() to record traces and snapshots for debugging",
      "Use browserContext.setTimeout()",
      "Use page.on('console') to log console outputs",
    ],
    correctAnswer: 1,
    explanation:
      "Playwright offers 'context.tracing.start()' to record detailed traces and snapshots of tests, which is useful for debugging complex scenarios.",
  },
  {
    id: 7,
    title: "How can you mock API responses in Playwright to test edge cases?",
    code: `await page.route('**/api/**', (route, request) => route.fulfill({ body: JSON.stringify({ mock: true }) }))`,
    options: [
      "Use page.route() to intercept and mock network requests",
      "Use page.setRequestInterception()",
      "Use browserContext.setGeolocation()",
      "Use page.on('networkresponse')",
    ],
    correctAnswer: 0,
    explanation:
      "You can use 'page.route()' to intercept network requests and mock API responses, which is useful for testing edge cases.",
  },
  {
    id: 8,
    title:
      "What strategy would you use to handle pop-ups or dialogs in Playwright?",
    code: `page.on('dialog', dialog => dialog.accept())`,
    options: [
      "Use page.waitForDialog()",
      "Use page.on('dialog') to handle pop-ups",
      "Use page.dismiss()",
      "Use page.click() on dialog elements",
    ],
    correctAnswer: 1,
    explanation:
      "In Playwright, pop-ups or dialogs can be handled by listening for the 'dialog' event using 'page.on('dialog')'.",
  },
  {
    id: 9,
    title: "How do you implement visual regression testing in Playwright?",
    code: `await page.screenshot({ path: 'comparison.png' })`,
    options: [
      "Use context.screenshot() for full-page screenshots",
      "Use page.screenshot() for element-level screenshots",
      "Use page.screenshot() and compare with baseline using an external library",
      "Use page.getScreenshot() and compare pixel values",
    ],
    correctAnswer: 2,
    explanation:
      "Visual regression testing can be done by taking screenshots with 'page.screenshot()' and comparing the screenshots with baseline images using an external tool or library.",
  },
  {
    id: 10,
    title:
      "How do you manage flaky tests in Playwright that fail intermittently?",
    code: null,
    options: [
      "Add explicit waits with page.waitForTimeout()",
      "Use try-catch blocks and retries",
      "Rely on random delays to simulate human behavior",
      "Use only headless mode for consistency",
    ],
    correctAnswer: 1,
    explanation:
      "Managing flaky tests often involves adding retries or using 'try-catch' blocks to handle intermittent failures, improving the test's reliability.",
  },
]
