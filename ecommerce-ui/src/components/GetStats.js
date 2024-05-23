// src/components/GetStats.js

import React, { useState } from 'react';
import OrderStats from './OrderStats';
import DiscountStats from './DiscountStats';

const GetStats = () => {
  const [orderStats, setOrderStats] = useState(null);
  const [discountStats, setDiscountStats] = useState(null);

  const handleGetStats = () => {
    const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'; // Default to localhost:3001 if REACT_APP_BASE_URL is not defined
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch(`${baseURL}/admin/stats`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setOrderStats(result.orderStats);
        setDiscountStats(result.discountStats);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={handleGetStats}>Get Stats</button>
      {orderStats && (
        <div>
          <h2>Total Items: {orderStats.totalItems}</h2>
          <h2>Total Purchase Amount: ${orderStats.totalPurchaseAmount}</h2>
          <h2>Total Discount Amount: ${orderStats.totalDiscountAmount}</h2>
          <OrderStats orders={orderStats.orders} />
        </div>
      )}
      {discountStats && <DiscountStats discounts={discountStats} />}
    </div>
  );
};

export default GetStats;
