const OrderService = require('../../services/orderService');
const CartService = require('../../services/cartService');
const DiscountService = require('../../services/discountService');

describe('OrderService', () => {
  beforeEach(() => {
    CartService.clearCart();
  });

  test('checkout should create an order without discount', () => {
    const userId = 'user-1';
    const items = [
      { name: 'Item 1', price: 100, quantity: 1 }
    ];
    CartService.addItems(userId, items);
    const order = OrderService.checkout(userId);
    expect(order.totalAmount).toBe(100);
    expect(order.discountAmount).toBe(0);
  });

  test('checkout should create an order with discount', () => {
    const userId = 'user-1';
    const items = [
      { name: 'Item 1', price: 100, quantity: 1 }
    ];
    CartService.addItems(userId, items);
    const code = DiscountService.generateDiscountCode();
    const order = OrderService.checkout(userId, code);
    expect(order.totalAmount).toBe(90); // 10% discount applied
    expect(order.discountAmount).toBe(10);
  });

  test('checkout should throw error if cart is empty', () => {
    expect(() => OrderService.checkout('user-1')).toThrow('Cart is empty');
  });
});
