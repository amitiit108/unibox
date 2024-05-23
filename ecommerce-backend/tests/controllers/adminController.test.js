const request = require('supertest');
const app = require('../../app');

describe('AdminController', () => {
  test('POST /admin/generate-discount should generate a discount code', async () => {
    const response = await request(app)
      .post('/admin/generate-discount')
      .send();

    expect(response.statusCode).toBe(201);
    expect(response.body.discountCode).toMatch(/DISCOUNT[A-Z0-9]{5}/);
  });

  test('GET /admin/stats should return order and discount stats', async () => {
    const response = await request(app)
      .get('/admin/stats')
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body.orderStats).toBeDefined();
    expect(response.body.discountStats).toBeDefined();
  });
});
