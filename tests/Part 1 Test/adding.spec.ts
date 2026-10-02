import { test, expect } from '@playwright/test';
import { demoTestPage } from '../../pages/demoTestPage'
import { todoData } from '../../data/todoData';

test('adding todo-task', async ({ page }) => {

    const demoPage = new demoTestPage(page);
    await demoPage.gotoPage();

    for (const inputData of todoData) {
        await demoPage.addingTodo(inputData);

        await expect(
            demoPage.getTodoTask(inputData)
        ).toBeVisible();
    }

    await expect(
        demoPage.itemsLeft
    ).toHaveText(`${todoData.length} items left`);
})

test('adding a empty task', async ({ page }) => {
    const demoPage = new demoTestPage(page);
    await demoPage.gotoPage();

    await demoPage.addingTodo(' ');
    await expect(demoPage.getTodoTask(' ')).not.toBeVisible();
})