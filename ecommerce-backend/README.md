# backend setup and how to start
# 2. cd ecommerce
# 3. npm i
# 7. npm start
# application up at locahost:3001 with base api url: http://localhost:3001
# to run test for all controllers and serives
# 8. npm test


# API Documentation

## Overview

This API provides endpoints to generate discount codes and retrieve statistics for orders and discounts.

## Endpoints

### Generate Discount Code

- URL: `/admin/discount/generate`
- Method: POST
- Description: Generates a new discount code.
- Request Body: None
- Response:
  - Status Code: 201 (Created)
  - Body: `{ "discountCode": "GeneratedDiscountCode" }`
- Error Response:
  - Status Code: 400 (Bad Request)
  - Body: `{ "error": "Error message" }`

### Get Statistics

- URL: `/admin/stats`
- Method: GET
- Description: Retrieves statistics for orders and discounts.
- Request Body: None
- Response:
  - Status Code: 200 (OK)
  - Body: `{ "orderStats": { ... }, "discountStats": { ... } }`
- Error Response:
  - Status Code: 400 (Bad Request)
  - Body: `{ "error": "Error message" }`


## Overview

This API provides endpoints for managing user carts, placing orders, and generating discount codes.

## Endpoints

### Add Items to Cart

- URL: `/orders/add-to-cart`
- Method: POST
- Description: Adds items to the user's cart.
- Request Body:
  ```json
  {
    "userId": "string",
    "items": [
      {
        "name": "string",
        "price": "number",
        "quantity": "number",
      },
      "..."
    ]
  }
  ```

### Checkout and Place Order

- URL: `/order/checkout`
- Method: POST
- Description: Places an order for the user and generates a discount code if applicable.
- Request Body:
  ```json
  {
    "userId": "string",
    "discountCode": "string optional"
  }
  ```

- Response:
  - Status Code: 201 (Created)
  - Body:
    ```json
    {
      "order": {
        // Order details
      },
      "discountCodeGenerated": "string" // Discount code generated for Nth order
    }
    ```


## Usage

To use this API, make HTTP requests to the specified endpoints.
