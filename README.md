# Playwright Assignment Test

This project contains automated end-to-end tests using **Playwright** and TypeScript for the TodoMVC application.

The tests cover:

-Adding a todo
-Completing a todo
-Deleting a todo
-Filtering todos
-Custom edge case

The project also includes a debugging exercise and written answers.

Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Andr3iiii/PlaywrightAssignment-Test.git
cd PlaywrightAssignment-Test
npm install
npx playwright install
```

Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

View the test report:

```bash
npx playwright show-report
```

Browsers:
Tests can be executed on:
-Chromium
-Firefox
-WebKit

Project Structure

```text
data/       - Test data
pages/      - Page Object Model files
tests/      - Test cases
.github/    - GitHub Actions
Answers.MD  - Written answers
```
