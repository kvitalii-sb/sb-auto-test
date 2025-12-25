import { test, expect } from '@playwright/test';

test('Check main UI elements of header', async ({ page }) => {
  await page.goto('https://spinbetter3b.com/ru');

  await expect.soft(page.locator('.layout-content__header')).toBeVisible();

  await expect.soft(page.locator('.header-logo__img')).toBeVisible();
  await expect(page.locator('.header-events').locator('.header-event-logo').first()).toBeVisible();
});
