import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';
import OrdersPage from './pages/OrdersPage';
import { AuthContext } from './context/AuthContext';
import { CartContext } from './context/CartContext';
import { ThemeContext } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AuthContext.Provider>
      <CartContext.Provider>
        <ThemeContext.Provider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <AnimatePresence>
                <Routes>
                  <Route path="/" element={<ProductListingPage />} />
                  <Route path="/products" element={<ProductListingPage />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
