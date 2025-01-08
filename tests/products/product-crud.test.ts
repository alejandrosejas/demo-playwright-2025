import { test, expect } from '../../fixtures/test-base';
import { faker } from '@faker-js/faker';

test.describe('Product CRUD Operations', () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    await authenticatedPage.goto('/products');
  });

  test('should create a new product', async ({ authenticatedPage: page }) => {
    await page.click('[data-testid="add-product"]');
    
    const productName = faker.commerce.productName();
    await page.fill('[data-testid="product-name"]', productName);
    await page.fill('[data-testid="product-price"]', faker.commerce.price());
    await page.fill('[data-testid="product-description"]', faker.commerce.productDescription());
    await page.click('[data-testid="save-product"]');

    await expect(page.locator(`text=${productName}`)).toBeVisible();
  });

  test('should update an existing product', async ({ authenticatedPage: page }) => {
    await page.click('[data-testid="edit-first-product"]');
    
    const updatedName = faker.commerce.productName();
    await page.fill('[data-testid="product-name"]', updatedName);
    await page.click('[data-testid="save-product"]');

    await expect(page.locator(`text=${updatedName}`)).toBeVisible();
  });

  test('should delete a product', async ({ authenticatedPage: page }) => {
    const productName = await page.locator('[data-testid="first-product-name"]').textContent();
    await page.click('[data-testid="delete-first-product"]');
    await page.click('[data-testid="confirm-delete"]');

    await expect(page.locator(`text=${productName}`)).not.toBeVisible();
  });
}); 