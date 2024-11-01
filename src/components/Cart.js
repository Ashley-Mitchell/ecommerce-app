// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();
  
  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {state.items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} /> {/* Show product image */}
              <h3>{item.name}</h3>
              <p>Price: ${item.price} x {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${getCartTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
