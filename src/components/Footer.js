// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerSection}>
        <h2>Subscribe</h2>
        <form>
          <input type="email" placeholder="Your email" className={styles.subscribeInput} />
          <button type="submit" className={styles.subscribeButton}>Subscribe</button>
        </form>
      </div>
      <div className={styles.footerSection}>
        <h2>Company Name</h2>
        <p>Location: Your City</p>
        <p>Post Code: 12345</p>
      </div>
      <div className={styles.footerSection}>
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h2>Account & Support</h2>
        <ul>
          <li><a href="/account">My Account</a></li>
          <li><a href="/cart">Shopping Cart</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
    <div className={styles.copyright}>
      <p>© 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
