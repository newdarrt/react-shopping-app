import { useState, useEffect } from 'react';

const useSearch = (products, delay = 300) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm === '') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, products, delay]);

  return {
    searchTerm,
    setSearchTerm,
    filteredProducts,
  };
};

export default useSearch;
