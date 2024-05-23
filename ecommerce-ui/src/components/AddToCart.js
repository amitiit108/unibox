// src/components/AddToCart.js

import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";

const AddToCart = () => {
  const [result, setResult] = useState("");

  const handleAddToCart = async (userId, items) => {
    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const endpoint = "/orders/add-to-cart";
      const url = `${baseUrl}${endpoint}`;

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const userId = "7af8d235-7b28-4e70-8c8c-2e3784a0bf13";
      const items = [
        { name: "Item 1", price: 100, quantity: 1 },
        { name: "Item 2", price: 50, quantity: 2 },
      ];

      const raw = JSON.stringify({ userId, items });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const result = await response.text();
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <ResultDisplay result={result} />
    </div>
  );
};

export default AddToCart;
