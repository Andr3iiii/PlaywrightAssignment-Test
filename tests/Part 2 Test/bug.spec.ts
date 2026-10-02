import { test, expect } from '@playwright/test';

test('user can add a todo', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // Bug 1: the await is missing
    // await page.fill('.new-todo', 'Buy groceries');
    // using locator is better cause it automatically waits for elements and make the test more reliable
    await page.locator('.new-todo').fill('Buy groceries');
    await page.keyboard.press('Enter');

    //Bug 2: the waitfortimeout is not that good cause waiting for the specific time and still not sure if the output will be loaded it just a waste of time, so instead the playwright built in auto waiting and assertions is more better than that
    // await page.waitForTimeout(3000);
    await expect(page.locator('.todo-list li')).toBeVisible();


    // const todos = await page.$$('.todo-list li');
    // expect(todos.length == 1);
    // it return elements immediately even tho the elements is not loaded yet
    // so using the locator is far more better cause it supports the auto waiting of playwright so testing will be more reliable
    await expect(page.locator('.todo-list li')).toHaveCount(1);

    // const text = await page.$eval('.todo-list li label', el => el.innerText);
    // it return elements immediately even tho the elements is not loaded yet
    // so using the locator is far more better cause it supports the auto waiting of playwright so testing will be more reliable
    const text = page.locator('.todo-list li label');

    // if (text = 'Buy groceries') {
    //     console.log('Test passed');
    // }
    // using the ' = ' is not a comparing the value using the ' = ' is assignment
    // to compare the value '==' or "===" but it is unnecessary cause playwright has built in assertions
    // which is more better 

    await expect(text).toHaveText('Buy groceries');
});