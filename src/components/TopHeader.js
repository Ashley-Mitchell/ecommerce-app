import React from 'react';
import styles from './TopHeader.module.css';

const TopHeader = () => (
  <div className={styles.topHeader}>
    <span>Special Sale! Free shipping on orders over $50.</span>
    <div>
      <a href="/store" className={styles.link}>Visit Store</a>
      <select className={styles.languagePicker}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </div>
  </div>
);

export default TopHeader;
