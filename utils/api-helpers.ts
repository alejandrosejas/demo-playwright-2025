import { APIRequestContext } from '@playwright/test';

export async function createTestUser(request: APIRequestContext, userData: any) {
  const response = await request.post('/api/users', {
    data: userData
  });
  return response.json();
}

export async function deleteTestUser(request: APIRequestContext, userId: string) {
  await request.delete(`/api/users/${userId}`);
}

export async function createTestProduct(request: APIRequestContext, productData: any) {
  const response = await request.post('/api/products', {
    data: productData
  });
  return response.json();
} 