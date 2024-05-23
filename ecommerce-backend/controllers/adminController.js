// Import necessary services
const OrderService = require('../services/orderService');
const DiscountService = require('../services/discountService');

// Controller method to generate a discount code
exports.generateDiscount = (req, res) => {
  try {
    // Call DiscountService to generate a discount code
    const discountCode = DiscountService.generateDiscountCode();
    // Respond with the generated discount code
    res.status(201).json({ discountCode });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ error: error.message });
  }
};

// Controller method to get statistics for orders and discounts
exports.getStats = (req, res) => {
  try {
    // Call OrderService to get statistics for orders
    const orderStats = OrderService.getOrderStats();
    // Call DiscountService to get statistics for discounts
    const discountStats = DiscountService.getDiscountStats();
    // Respond with the order and discount statistics
    res.status(200).json({ orderStats, discountStats });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ error: error.message });
  }
};
