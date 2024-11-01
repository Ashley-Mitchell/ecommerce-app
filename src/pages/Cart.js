import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, getCartTotal } = useCart(); // Ensure you destructure getCartTotal

  const total = getCartTotal(); // Call the function to get total

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            {/* Additional item details can go here */}
          </div>
        ))
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
