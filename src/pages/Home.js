import React, { useState } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import Carousel from "../components/Carousel";
import FlashTimer from "../components/FlashTimer"; // Import FlashTimer component
import ProductCard from "../components/ProductCard"; // Import ProductCard component
import styles from "./Home.module.css"; // Ensure you have the right path for your CSS

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Handle add to cart action
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart!`);
    // Add your logic to handle adding product to cart
  };

  return (
    <div className={styles.homeContainer}>
      <Carousel />
      
      {/* Flash Timer for limited time offer */}
      <FlashTimer duration={3600} /> {/* Set duration to 1 hour (3600 seconds) */}
      
      <h2>Categories</h2>
      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={styles.categoryButton}
            style={{ backgroundColor: "#DB4444", color: "white" }}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
        <button
          className={styles.categoryButton}
          style={{ backgroundColor: "#DB4444", color: "white" }}
          onClick={() => setSelectedCategory("")} // Clear selection
        >
          All
        </button>
      </div>
      <h2>Products</h2>
      <div className={styles.productContainer}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
