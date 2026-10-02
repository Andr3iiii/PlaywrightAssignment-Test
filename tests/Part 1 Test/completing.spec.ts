import { test, expect } from '@playwright/test';
import { demoTestPage } from '../../pages/demoTestPage';
import { todoData } from '../../data/todoData'

test('Should mark the task as complete', async ({ page }) => {

    const demoPage = new demoTestPage(page);

    await demoPage.gotoPage();
    // await demoPage.addingTodo('task this week is good');

    // await demoPage.completedTodo('task this week is good');

    for (const todoName of todoData) {
        await demoPage.addingTodo(todoName);
        await demoPage.completedTodo(todoName);

        await expect(
            demoPage.getTodoTask(
                todoName
            )
        ).toHaveClass(/complete/i);
    }

    await expect(
        demoPage.itemsLeft
    ).toHaveText('0 items left');


})