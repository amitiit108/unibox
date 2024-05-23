class Order {
    constructor() {
      // Initialize an empty array to store orders
      this.orders = [];
    }
  
    // Method to add an order to the orders array
    addOrder(order) {
      // Add the provided order to the orders array
      this.orders.push(order);
    }
  
    // Method to calculate statistics for all orders
    getStats() {
      // Calculate total number of items in all orders
      const totalItems = this.orders.reduce((sum, order) => sum + order.items.length, 0);
  
      // Calculate total purchase amount across all orders
      const totalPurchaseAmount = this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
  
      // Calculate total discount amount across all orders
      const totalDiscountAmount = this.orders.reduce((sum, order) => sum + (order.discountAmount || 0), 0);
  
      // Return an object containing the calculated statistics and the array of orders
      return {
        totalItems,
        totalPurchaseAmount,
        totalDiscountAmount,
        orders: this.orders,
      };
    }
  
    // Method to get the count of orders
    getOrderCount() {
      // Return the length of the orders array
      return this.orders.length;
    }
  }
  
  // Export the Order class to be used in other modules
  module.exports = Order;
  