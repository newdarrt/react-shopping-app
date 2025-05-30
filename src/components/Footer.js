import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} React Shopping Web App. All rights reserved.
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="container mx-auto mt-4">
        <form className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        <p className="text-green-500 mt-2">Thank you for subscribing!</p>
      </div>
      <div className="container mx-auto mt-4 flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f hover:text-blue-500"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter hover:text-blue-400"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram hover:text-pink-500"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
