const request = require('supertest');
const app = require('../../app');
const CartService = require('../../services/cartService');

describe('OrderController', () => {
  beforeEach(() => {
    CartService.clearCart();
  });

  test('POST /orders/add-to-cart should add items to cart', async () => {
    const response = await request(app)
      .post('/orders/add-to-cart')
      .send({
        userId: 'user-1',
        items: [
          { name: 'Item 1', price: 100, quantity: 1 },
          { name: 'Item 2', price: 50, quantity: 2 }
        ]
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.items).toHaveLength(2);
  });

  test('POST /orders/checkout should create an order', async () => {
    await request(app)
      .post('/orders/add-to-cart')
      .send({
        userId: 'user-1',
        items: [{ name: 'Item 1', price: 100, quantity: 1 }]
      });

    const response = await request(app)
      .post('/orders/checkout')
      .send({ userId: 'user-1' });

    expect(response.statusCode).toBe(201);
    expect(response.body.order.totalAmount).toBe(100);
  });
});
