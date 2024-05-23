// src/services/apiService.js

import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addToCart = async (userId, items) => {
  try {
    const response = await apiService.post('/orders/add-to-cart', { userId, items });
    return response.data;
  } catch (error) {
    console.error('Error adding items to cart:', error);
    throw error;
  }
};

export const checkout = async (userId, discountCode) => {
  try {
    const response = await apiService.post('/orders/checkout', { userId, discountCode });
    return response.data;
  } catch (error) {
    console.error('Error checking out:', error);
    throw error;
  }
};

export const getStats = async () => {
  try {
    const response = await apiService.get('/admin/stats');
    return response.data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

export const generateDiscount = async () => {
  try {
    const response = await apiService.post('/admin/generate-discount');
    return response.data;
  } catch (error) {
    console.error('Error generating discount:', error);
    throw error;
  }
};
