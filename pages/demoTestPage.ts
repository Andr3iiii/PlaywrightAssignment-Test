import { Page, Locator } from '@playwright/test';

export class demoTestPage {
    readonly page: Page;
    readonly input: Locator;
    readonly items: Locator;
    readonly activeFilter: Locator;
    readonly completedFilter: Locator;
    readonly itemsLeft: Locator;

    constructor(page: Page) {
        this.page = page;
        this.input = page.getByPlaceholder(/What needs to be done?/i);
        this.items = page.locator('.todo-list li');
        this.activeFilter = page.getByRole('link', { name: 'Active' });
        this.completedFilter = page.getByRole('link', { name: 'Completed' })
        this.itemsLeft = page.locator('.todo-count');
    }

    async gotoPage() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addingTodo(todoName: string) {
        await this.input.fill(todoName);
        await this.input.press('Enter')
    }

    async deleteTodo(todoName: string) {
        const todo = this.items.filter({ hasText: todoName });
        await todo.hover();
        await todo.getByRole('button', { name: /delete/i }).click();
    }

    async editTodo(todoName: string, newTodoName: string) {
        const todo = this.items.filter({ hasText: todoName });
        await todo.dblclick();

        const input = todo.locator('.edit');

        await input.fill(newTodoName);
        await input.press('Enter');
    }

    async completedTodo(todoName: string) {
        const todo = this.items.filter({ hasText: todoName });
        await todo.getByRole('checkbox').check();
    }

    async filterActive() {
        await this.activeFilter.click();
    }

    async filterCompleted() {
        await this.completedFilter.click();
    }

    getTodoTask(todoName: string) {
        return this.items.filter({ hasText: todoName });
    }
}