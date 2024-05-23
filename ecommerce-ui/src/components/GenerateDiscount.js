// src/components/GenerateDiscount.js

import React, { useState } from 'react';
import ResultDisplay from './ResultDisplay';
import './GenerateDiscount.css';

const GenerateDiscount = () => {
  const [result, setResult] = useState('');

  const handleGenerateDiscount = () => {
    const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'; // Read base URL from .env file
    
    const requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
  
    fetch(`${baseURL}/admin/generate-discount`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to generate discount');
        }
        return response.text();
      })
      .then(result => {
        setResult(result);
      })
      .catch(error => {
        console.error('Error generating discount:', error.message);
      });
  };
  

  return (
    <div className="generate-discount">
      <h2>Generate Discount</h2>
      <button onClick={handleGenerateDiscount}>Generate Discount</button>
      <ResultDisplay result={result} />
    </div>
  );
};

export default GenerateDiscount;
