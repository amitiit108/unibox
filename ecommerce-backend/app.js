const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors');

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// Define routes for orders and admin actions
app.use('/orders', orderRoutes); // Route for order-related actions
app.use('/admin', adminRoutes); // Route for admin-related actions

// Export the Express application to be used in other modules
module.exports = app;
