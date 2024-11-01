import React from 'react';
import styles from './NotFound.module.css'; // Create this CSS file for styling

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
};

export default NotFound;
