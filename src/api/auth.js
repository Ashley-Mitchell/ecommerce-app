import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error.response.data.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response.data.message);
    throw error;
  }
};