import { test, expect } from '@playwright/test';
import { demoTestPage } from '../../pages/demoTestPage';

test('Should remove the todo task when it is edited as empty value', async ({ page }) => {

    const demoPage = new demoTestPage(page);

    await demoPage.gotoPage();

    await demoPage.addingTodo('edit this task');

    await demoPage.editTodo('edit this task', '');

    await expect(
        demoPage.getTodoTask('edit this task')
    ).not.toBeVisible();

    await expect(
        demoPage.itemsLeft
    ).toHaveCount(0);
})