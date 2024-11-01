import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Ensure your CSS file is linked correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navbar}>
      <h1 className={styles.logo}>YourLogo</h1>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        <Link to="/signup" className={styles.link}>Sign Up</Link>
        <Link to="/wishlist" className={styles.link}>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
        <button className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        </Link>
        <Link to="/account" className={styles.link}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </Link>
        <Link to="/cart" className={styles.link}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
