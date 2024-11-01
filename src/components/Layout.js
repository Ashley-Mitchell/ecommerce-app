// src/components/Layout.js
import React from 'react';
import TopHeader from './TopHeader';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <TopHeader />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
