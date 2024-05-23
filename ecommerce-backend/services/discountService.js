const Discount = require('../models/discountModel');

// Create a new instance of the Discount model
const discount = new Discount();

class DiscountService {
  // Method to generate a discount code
  static generateDiscountCode() {
    // Call the generateCode method of the Discount model and return the generated code
    return discount.generateCode();
  }

  // Method to mark a discount code as used
  static useDiscountCode(code) {
    // Call the useCode method of the Discount model and return the result
    return discount.useCode(code);
  }

  // Method to get statistics for all discount codes
  static getDiscountStats() {
    // Call the getStats method of the Discount model and return the statistics
    return discount.getStats();
  }
}

// Export the DiscountService class to be used in other modules
module.exports = DiscountService;
