import { test, expect } from '../../fixtures/test-base';
import { faker } from '@faker-js/faker';

test.describe('Signup Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });

  test('should create account with valid data', async ({ page }) => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    await page.fill('[data-testid="name"]', faker.person.fullName());
    await page.fill('[data-testid="email"]', email);
    await page.fill('[data-testid="password"]', password);
    await page.fill('[data-testid="confirm-password"]', password);
    await page.click('[data-testid="signup-button"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="welcome-message"]')).toBeVisible();
  });

  test('should show error for duplicate email', async ({ page }) => {
    await page.fill('[data-testid="name"]', faker.person.fullName());
    await page.fill('[data-testid="email"]', process.env.TEST_USER_EMAIL || '');
    await page.fill('[data-testid="password"]', 'Password123!');
    await page.fill('[data-testid="confirm-password"]', 'Password123!');
    await page.click('[data-testid="signup-button"]');

    await expect(page.locator('[data-testid="error-message"]')).toContainText('Email already exists');
  });
}); 