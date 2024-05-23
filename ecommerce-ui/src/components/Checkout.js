import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";

const Checkout = () => {
  const [result, setResult] = useState("");
  const [discountCode, setDiscountCode] = useState(""); // Declare discountCode state

  const handleCheckout = async (userId, discountCode) => {
    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const endpoint = "/orders/checkout";
      const url = `${baseUrl}${endpoint}`;

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const userId = "7af8d235-7b28-4e70-8c8c-2e3784a0bf13"; // Consider passing userId as an argument too if it's dynamic

      const requestBody = {
        userId,
        discountCode // Pass the discountCode to the server
      };

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(requestBody), // Serialize the requestBody object to JSON
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
      {/* Add an input field to enter the discount code */}
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      {/* Pass the discountCode to the handleCheckout function */}
      <button onClick={() => handleCheckout("7af8d235-7b28-4e70-8c8c-2e3784a0bf13", discountCode)}>Checkout</button>
      <ResultDisplay result={result} />
    </div>
  );
};

export default Checkout;
