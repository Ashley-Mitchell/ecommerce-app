import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaHeart } from 'react-icons/fa'; // Import Font Awesome icons
import { useWishlist } from '../context/WishlistContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { addToWishlist } = useWishlist();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToWishlist = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the Link
    addToWishlist(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Hide message after 2 seconds
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <button onClick={() => onAddToCart(product)} className={styles.addToCartButton}>
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`} className={styles.viewDetailsIcon}>
        <FaEye />
      </Link>
      <span className={styles.wishlistIcon} onClick={handleAddToWishlist}>
        <FaHeart />
      </span>
      {isAdded && <div className={styles.popupMessage}>Added to Wishlist!</div>} {/* Popup message */}
    </div>
  );
};

export default ProductCard;
