import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Shop</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <button onClick={toggleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
      </nav>
      {searchVisible && (
        <div className="container mx-auto mt-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
