const express = require('express');
const orderController = require('../controllers/orderController');

// Create a router instance
const router = express.Router();

// Define routes for adding items to cart and checking out
router.post('/add-to-cart', orderController.addToCart); // Route to add items to cart
router.post('/checkout', orderController.checkout); // Route to checkout and place order

// Export the router to be used in other modules
module.exports = router;
