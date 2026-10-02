import { test, expect } from '@playwright/test';
import { demoTestPage } from '../../pages/demoTestPage';
import { todoData } from '../../data/todoData';

test('Should remove the todo task when it is edited as empty value', async ({ page }) => {

    const demoPage = new demoTestPage(page);

    await demoPage.gotoPage();

    for (const todoInput of todoData) {
        await demoPage.addingTodo(todoInput);
        await expect(
            demoPage.getTodoTask(todoInput)
        ).toBeVisible();
    }

    const dataToEdit = todoData[4];

    await demoPage.editTodo(dataToEdit, '');


    await expect(
        demoPage.getTodoTask(dataToEdit)
    ).not.toBeVisible();

    await expect(
        demoPage.items
    ).toHaveCount(todoData.length - 1);

    await expect(
        demoPage.itemsLeft
    ).toHaveText(`${todoData.length - 1} items left`);
})