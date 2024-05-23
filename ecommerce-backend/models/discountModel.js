class Discount {
    constructor() {
      // Initialize an empty array to store discount codes
      this.codes = [];
    }
  
    // Method to generate a new discount code
    generateCode() {
      // Generate a random discount code
      const code = `DISCOUNT${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      
      // Add the generated code to the array of discount codes
      this.codes.push({ code, isUsed: false });
      
      // Return the generated code
      return code;
    }
  
    // Method to mark a discount code as used
    useCode(code) {
      // Find the discount with the provided code that hasn't been used yet
      const discount = this.codes.find(d => d.code === code && !d.isUsed);
      
      // If a valid discount is found, mark it as used and return true
      if (discount) {
        discount.isUsed = true;
        return true;
      }
      
      // If no valid discount is found, return false
      return false;
    }
  
    // Method to get statistics for all discount codes
    getStats() {
      // Return the array of discount codes
      return this.codes;
    }
  }
  
  // Export the Discount class to be used in other modules
  module.exports = Discount;
  