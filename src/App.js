import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist'; // Import Wishlist page
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider

const App = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <WishlistProvider> {/* Wrap with WishlistProvider */}
          <Router>
            <TopHeader />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} /> {/* Add Wishlist route */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </WishlistProvider>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
