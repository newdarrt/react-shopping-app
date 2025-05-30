import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import data from '../assets/data.json';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('price-asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    // Simulate API call with 500ms delay
    setTimeout(() => {
      setProducts(data);
      setFilteredProducts(data);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = products;
    if (category !== 'all') {
      filtered = products.filter(product => product.category === category);
    }
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sort === 'price-asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
  }, [category, sort, searchTerm, products]);

  const handleAddToCart = (product) => {
    // Add to cart logic
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="mb-4">
        <label className="mr-2">Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="mr-4">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
        <label className="mr-2">Sort by:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange('prev')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange('next')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListingPage;
