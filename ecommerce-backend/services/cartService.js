const Cart = require('../models/cartModel');

// Create a new instance of the Cart model
const cart = new Cart();

class CartService {
  // Method to add items to the cart
  static addItems(userId, items) {
    // Map each item to include the userId and add them to the cart
    cart.addItems(items.map(item => ({ userId, ...item })));
    // Return the updated cart
    return cart;
  }

  // Method to clear the cart
  static clearCart() {
    // Clear all items from the cart
    cart.clear();
  }

  // Method to get all items in the cart
  static getItems() {
    // Return all items currently in the cart
    return cart.getItems();
  }
}

// Export the CartService class to be used in other modules
module.exports = CartService;
