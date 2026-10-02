import { test, expect } from '@playwright/test';

test('checking the page', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveURL('https://demo.playwright.dev/todomvc/#/');
})