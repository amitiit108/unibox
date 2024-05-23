// Import necessary services
const CartService = require('../services/cartService');
const OrderService = require('../services/orderService');
const DiscountService = require('../services/discountService');

// Constant for the Nth order to generate a discount
const NTH_ORDER = 2;

// Controller method to add items to the cart
exports.addToCart = (req, res) => {
  try {
    // Extract userId and items from request body
    const { userId, items } = req.body;
    
    // Add items to the user's cart
    const cart = CartService.addItems(userId, items);
    
    // Respond with the updated cart
    res.status(201).json(cart);
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ error: error.message });
  }
};

// Controller method to checkout and place an order
exports.checkout = (req, res) => {
  try {
    // Extract userId and discountCode from request body
    const { userId, discountCode } = req.body;
    
    // Place an order for the user
    const order = OrderService.checkout(userId, discountCode);

    // Check if the Nth order is reached to generate a discount code
    let discountCodeGenerated = null;
    if (OrderService.getOrderCount() % NTH_ORDER === 0) {
      discountCodeGenerated = DiscountService.generateDiscountCode();
    }

    // Respond with the order and generated discount code (if any)
    res.status(201).json({ order, discountCodeGenerated });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ error: error.message });
  }
};
