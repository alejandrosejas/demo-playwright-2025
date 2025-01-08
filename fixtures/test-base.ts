import { test as base } from '@playwright/test';
import { faker } from '@faker-js/faker';

type TestFixtures = {
  testUser: {
    email: string;
    password: string;
  };
  authenticatedPage: any;
};

export const test = base.extend<TestFixtures>({
  testUser: async ({}, use) => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    await use(user);
  },

  authenticatedPage: async ({ page }, use) => {
    // Login implementation
    await page.goto('/login');
    await page.fill('[data-testid="email"]', process.env.TEST_USER_EMAIL || '');
    await page.fill('[data-testid="password"]', process.env.TEST_USER_PASSWORD || '');
    await page.click('[data-testid="login-button"]');
    await page.waitForURL('/dashboard');
    
    await use(page);
  },
});

export { expect } from '@playwright/test'; 