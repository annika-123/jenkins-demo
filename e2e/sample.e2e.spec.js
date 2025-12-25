const { test, expect } = require('@playwright/test');

test('Open Google & verify title', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
