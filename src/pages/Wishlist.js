import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import styles from './Wishlist.module.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className={styles.wishlistContainer}>
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className={styles.productGrid}>
          {wishlist.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.price}>${product.price}</p>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className={styles.removeButton}
              >
                Remove from Wishlist
              </button>
              <Link to={`/product/${product.id}`} className={styles.viewDetailsLink}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
