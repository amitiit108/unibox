// src/components/ResultDisplay.js

import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result-display">
      <h3>Result</h3>
      <p>{result}</p>
    </div>
  );
};

export default ResultDisplay;
