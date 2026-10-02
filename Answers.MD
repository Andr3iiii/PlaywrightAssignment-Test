Answer briefly (2-5 sentences each) in WRITTEN-ANSWERS.md:
1. What is the difference between page.click() and page.locator().click()? Why does
Playwright recommend locators?
 - The page.click() directly click the element using the given selector, while the page.locator().click() it creates a locator that represent the element then it clicks it. Playwirght recommend the locators because they are more reliable and it can automatically wait for the element to show up

2. Explain Playwright's auto-waiting mechanism. Why is waitForTimeout() generally discouraged?
 - the waitForTimeout() is descourage because it waits a fixed amount of time and can be still fail if the element isnt ready yet, while the playwright auto-waiting mechanism is recommended cause it will wait for the element to show up or to be ready before interacting with it.

3. What is a Playwright fixture, and give one example of when you'd create a custom one?
 - the fixture in playwright provides a reusable setup for tests. for example, i would create a custom fixture that can automatically login a user before each test.

4. Yourtest suite takes 20 minutes to run sequentially.Name one Playwright feature that could speed this up, and briefly explain how it works.
 - i will use multiple workers because they allow multiple test to run at the same time instead of one by one with this it will reduce the total time execution.

5. A test passes locally but fails intermittently in CI. List two possible causes you'd investigate first.
 - i will check first if there is timing issues like the elements loading slower in CI and compare he CI environment and the local environment also will check the browsers or dependency versions
