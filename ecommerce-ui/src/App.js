// src/App.js

import React from 'react';
import AddToCart from './components/AddToCart';
import Checkout from './components/Checkout';
import GetStats from './components/GetStats';
import GenerateDiscount from './components/GenerateDiscount';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>E-commerce Store</h1>
      <AddToCart />
      <Checkout />
      <h1>Admin Panel</h1>
      <GetStats />
      <GenerateDiscount />
    </div>
  );
};

export default App;
