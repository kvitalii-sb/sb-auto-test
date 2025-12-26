import { test, expect } from '@playwright/test';

const BASE_URL = 'https://spinbetter1c.com';

test.describe('Home page Header check (Guest user)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('Check the Logo of site', async ({ page }) => {
    await expect.soft(page.locator('.header-logo__img')).toBeVisible();
  });

  test('Check the country flag and header events', async ({ page }) => {
    let headerEventsBlock = page.locator('.header-events');
    await expect.soft(headerEventsBlock.locator('.header-event-logo').first()).toBeVisible();
  });

  test('Check the Registration button', async ({ page }) => {
    let parentControl = page.locator('.user-control-dashboard');
    let regButton = parentControl.locator('a');

    await expect(regButton).toBeVisible();
    await expect(regButton).toHaveAttribute('href');
  });

  test('Check the Login button', async ({ page }) => {
    await expect(page.locator('.auth-dropdown-trigger')).toBeVisible();
  });

  test('Check language switcher', async ({ page }) => {
    await expect(page.locator('.app-settings-toolbar')).toBeVisible();
  });

  test('Check the sub-header and sub-header elements', async ({ page }) => {
    let subHeaderList = page.locator('.header-navigation-list');
    let listItem = subHeaderList.locator('.header-navigation-list__item');

    await expect(subHeaderList).toBeVisible();
    console.log(subHeaderList.count());
    await expect(listItem).toHaveCount(9, { timeout: 20000 });
  });
});
