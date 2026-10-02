import { test, expect } from '@playwright/test';
import { demoTestPage } from '../../pages/demoTestPage';

test('Should filter the active and completed todo', async ({ page }) => {

    const demoPage = new demoTestPage(page);
    await demoPage.gotoPage();

    await demoPage.addingTodo('active task');
    await demoPage.addingTodo('completed task');
    await demoPage.addingTodo('another task');

    await demoPage.completedTodo('completed task');

    await demoPage.filterActive();

    await expect(
        demoPage.getTodoTask('active task')
    ).toBeVisible();

    await expect(
        demoPage.getTodoTask('another task')
    ).toBeVisible();

    await expect(
        demoPage.getTodoTask('completed task')
    ).not.toBeVisible();


    await demoPage.filterCompleted();

    await expect(
        demoPage.getTodoTask('active task')
    ).not.toBeVisible();

    await expect(
        demoPage.getTodoTask('another task')
    ).not.toBeVisible();

    await expect(
        demoPage.getTodoTask('completed task')
    ).toBeVisible();

})