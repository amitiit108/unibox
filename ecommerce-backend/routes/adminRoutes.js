const express = require('express');
const adminController = require('../controllers/adminController');

// Create a router instance
const router = express.Router();

// Define routes for generating discount and getting statistics
router.post('/generate-discount', adminController.generateDiscount); // Route to generate discount
router.get('/stats', adminController.getStats); // Route to get statistics

// Export the router to be used in other modules
module.exports = router;
