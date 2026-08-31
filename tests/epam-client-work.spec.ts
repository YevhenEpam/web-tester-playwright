import { expect, test } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await page.goto('/');

  const acceptCookiesButton = page.getByRole('button', { name: /accept all/i });
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  const mainNavigation = page.locator('nav[aria-label="Main navigation"]:visible');
  await mainNavigation.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

  await expect(page).toHaveURL(/\/services\/client-work\/?$/);
  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});