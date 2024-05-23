class Cart {
    constructor() {
      // Initialize an empty array to store items in the cart
      this.items = [];
    }
  
    // Method to add items to the cart
    addItems(items) {
      // Push new items into the cart array
      this.items.push(...items);
    }
  
    // Method to clear the cart (remove all items)
    clear() {
      // Reset the items array to an empty array
      this.items = [];
    }
  
    // Method to get all items currently in the cart
    getItems() {
      // Return the items array
      return this.items;
    }
  }
  
  // Export the Cart class to be used in other modules
  module.exports = Cart;
  