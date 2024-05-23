const Order = require('../models/orderModel');
const DiscountService = require('./discountService');
const CartService = require('./cartService');

// Create a new instance of the Order model
const orders = new Order();

class OrderService {
  // Method to checkout and place an order
  static checkout(userId, discountCode) {
    // Get items from the user's cart
    const items = CartService.getItems().filter(item => item.userId === userId);
    
    // If the cart is empty, throw an error
    if (items.length === 0) {
      throw new Error('Cart is empty');
    }

    // Calculate total amount and initialize discount amount
    let totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discountAmount = 0;

    // Apply discount if a discount code is provided and valid
    if (discountCode && DiscountService.useDiscountCode(discountCode)) {
      discountAmount = totalAmount * 0.1; // Assume 10% discount for demonstration
      totalAmount -= discountAmount;
    }

    // Create the order object
    const order = {
      userId,
      items,
      totalAmount,
      discountAmount,
      discountCode,
    };

    // Add the order to the orders list
    orders.addOrder(order);

    // Clear the user's cart
    CartService.clearCart();

    // Return the created order
    return order;
  }

  // Method to get statistics for all orders
  static getOrderStats() {
    // Return statistics for all orders
    return orders.getStats();
  }

  // Method to get the count of orders
  static getOrderCount() {
    // Return the count of orders
    return orders.getOrderCount();
  }
}

// Export the OrderService class to be used in other modules
module.exports = OrderService;
