import React, { createContext, useContext, useReducer } from 'react';

// Create context
const CartContext = createContext();

// Initial state
const initialState = {
  cartItems: [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // Add more cases as needed
    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const getCartTotal = () => {
    return state.cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
