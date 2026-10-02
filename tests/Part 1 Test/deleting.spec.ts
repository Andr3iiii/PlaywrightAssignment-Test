import { test, expect } from '@playwright/test';
import { demoTestPage } from '../../pages/demoTestPage';
import { todoData } from '../../data/todoData';

test('should be able to delete a todo task', async ({ page }) => {

    const demoPage = new demoTestPage(page);
    await demoPage.gotoPage();

    // await demopage.addingTodo('delete this task');
    // await demopage.deleteTodo('delete this task');

    for (const todoName of todoData) {
        await demoPage.addingTodo(todoName);
        await expect(demoPage.getTodoTask(todoName)).toBeVisible();

        await demoPage.deleteTodo(todoName);
        await expect(demoPage.getTodoTask(todoName)).not.toBeVisible();
        await expect(demoPage.itemsLeft).toHaveCount(0);
    }

})