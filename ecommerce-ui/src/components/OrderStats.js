// src/components/OrderStats.js

import React from 'react';

const OrderStats = ({ orders }) => {
  return (
    <div>
      <h3>Order Statistics</h3>
      {orders.map((order, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p><strong>User ID:</strong> {order.userId}</p>
          <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
          <p><strong>Discount Amount:</strong> ${order.discountAmount}</p>
          <p><strong>Discount Code:</strong> {order.discountCode}</p>
          <h4>Items:</h4>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderStats;
