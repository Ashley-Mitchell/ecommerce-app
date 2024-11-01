// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.priceTag}>${product.price}</p> {/* Display price */}
      </div>
    </div>
  );
};

export default ProductDetail;
