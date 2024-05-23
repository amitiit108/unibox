// src/components/DiscountStats.js

import React from 'react';

const DiscountStats = ({ discounts }) => {
  return (
    <div>
      <h3>Discount Statistics</h3>
      <ul>
        {discounts.map((discount, index) => (
          <li key={index}>
            Code: {discount.code} - {discount.isUsed ? 'Used' : 'Unused'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscountStats;
