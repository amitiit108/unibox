const CartService = require('../../services/cartService');
const Cart = require('../../models/cartModel');

describe('CartService', () => {
  beforeEach(() => {
    CartService.clearCart();
  });

  test('addItems should add multiple items to the cart', () => {
    const userId = 'user-1';
    const items = [
      { name: 'Item 1', price: 100, quantity: 1 },
      { name: 'Item 2', price: 50, quantity: 2 }
    ];
    CartService.addItems(userId, items);
    const cartItems = CartService.getItems();
    expect(cartItems).toHaveLength(2);
    expect(cartItems).toEqual(expect.arrayContaining(items.map(item => ({ userId, ...item }))));
  });

  test('clearCart should clear all items in the cart', () => {
    const userId = 'user-1';
    const items = [
      { name: 'Item 1', price: 100, quantity: 1 }
    ];
    CartService.addItems(userId, items);
    CartService.clearCart();
    expect(CartService.getItems()).toHaveLength(0);
  });
});
