export const playwrightExercises = [
  {
    id: 1,
    title: "Test Button Click",
    objective:
      "Write a Playwright test that clicks a button and verifies the result.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Button click test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the button with the text 'Click Me'
      
      // Step 2: Verify that the result is correct (e.g., text appears or page navigates)
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Button click test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the button with the text 'Click Me'
      await page.click('button:has-text("Click Me")');
      
      // Step 2: Verify that the result is correct
      await expect(page).toHaveText('Result: Success');
    });
    `,
  },
  {
    id: 2,
    title: "Test Input Field",
    objective:
      "Write a Playwright test that fills an input field and submits the form.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Input field test', async ({ page }) => {
      await page.goto('https://example.com/form');
      
      // Step 1: Type 'John Doe' into the input field with the name 'name'
      
      // Step 2: Submit the form and verify the result
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Input field test', async ({ page }) => {
      await page.goto('https://example.com/form');
      
      // Step 1: Type 'John Doe' into the input field with the name 'name'
      await page.fill('input[name="name"]', 'John Doe');
      
      // Step 2: Submit the form and verify the result
      await page.click('button[type="submit"]');
      await expect(page).toHaveText('Hello, John Doe');
    });
    `,
  },
  {
    id: 3,
    title: "Test Page Navigation",
    objective:
      "Write a Playwright test that navigates to a different page and verifies the URL.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Page navigation test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the link with the text 'Go to About'
      
      // Step 2: Verify that the URL changes to the About page
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Page navigation test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the link with the text 'Go to About'
      await page.click('a:has-text("Go to About")');
      
      // Step 2: Verify that the URL changes to the About page
      await expect(page).toHaveURL('https://example.com/about');
    });
    `,
  },
  {
    id: 4,
    title: "Test Element Visibility",
    objective:
      "Write a Playwright test that checks if an element is visible on the page.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Element visibility test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Check if the 'Welcome' message is visible on the page
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Element visibility test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Check if the 'Welcome' message is visible on the page
      await expect(page.locator('text=Welcome')).toBeVisible();
    });
    `,
  },
  {
    id: 5,
    title: "Test Screenshot Capture",
    objective: "Write a Playwright test that captures a screenshot of a page.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Screenshot test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Capture a screenshot of the page
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Screenshot test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Capture a screenshot of the page
      await page.screenshot({ path: 'screenshot.png' });
    });
    `,
  },
  {
    id: 6,
    title: "Test Alert Handling",
    objective: "Write a Playwright test that handles an alert popup on a page.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Alert handling test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the button that triggers the alert
      
      // Step 2: Handle the alert and verify the message
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Alert handling test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the button that triggers the alert
      page.on('dialog', async dialog => {
        await expect(dialog.message()).toBe('Alert triggered!');
        await dialog.accept();
      });
      await page.click('button#alert-trigger');
    });
    `,
  },
  {
    id: 7,
    title: "Test Mouse Hover",
    objective: "Write a Playwright test that simulates a mouse hover action.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Mouse hover test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Hover over the element with the class 'hover-target'
      
      // Step 2: Verify that the tooltip appears
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Mouse hover test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Hover over the element with the class 'hover-target'
      await page.hover('.hover-target');
      
      // Step 2: Verify that the tooltip appears
      await expect(page.locator('.tooltip')).toBeVisible();
    });
    `,
  },
  {
    id: 8,
    title: "Test Multiple Elements",
    objective: "Write a Playwright test that interacts with multiple elements.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Multiple elements test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the first item in the list
      // Step 2: Verify the text of the second item in the list
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Multiple elements test', async ({ page }) => {
      await page.goto('https://example.com');
      
      // Step 1: Click on the first item in the list
      await page.click('ul li:first-child');
      
      // Step 2: Verify the text of the second item in the list
      await expect(page.locator('ul li:nth-child(2)')).toHaveText('Expected Text');
    });
    `,
  },
  {
    id: 9,
    title: "Test Page Load Performance",
    objective: "Write a Playwright test that measures the page load time.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Page load performance test', async ({ page }) => {
      const start = Date.now();
      await page.goto('https://example.com');
      
      // Step 1: Measure the time taken for the page to load
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Page load performance test', async ({ page }) => {
      const start = Date.now();
      await page.goto('https://example.com');
      
      // Step 1: Measure the time taken for the page to load
      const loadTime = Date.now() - start;
      console.log('Page load time:', loadTime, 'ms');
      expect(loadTime).toBeLessThan(2000); // Expect the page to load in less than 2 seconds
    });
    `,
  },
  {
    id: 10,
    title: "Test Form Validation",
    objective:
      "Write a Playwright test that fills out and submits a form with validation.",
    codeStarter: `
    const { test, expect } = require('@playwright/test');

    test('Form validation test', async ({ page }) => {
      await page.goto('https://example.com/form');
      
      // Step 1: Fill in the form fields
      // Step 2: Submit the form and verify the validation error
    });
    `,
    solution: `
    const { test, expect } = require('@playwright/test');

    test('Form validation test', async ({ page }) => {
      await page.goto('https://example.com/form');
      
      // Step 1: Fill in the form fields
      await page.fill('input[name="email"]', 'invalid-email');
      await page.fill('input[name="name"]', 'John Doe');
      
      // Step 2: Submit the form and verify the validation error
      await page.click('button[type="submit"]');
      await expect(page.locator('.error')).toHaveText('Please enter a valid email address');
    });
    `,
  },
]
