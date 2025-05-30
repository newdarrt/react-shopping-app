import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/src/assets/data.json');
        const data = await response.json();
        const product = data.find((item) => item.id === parseInt(id));
        setProduct(product);

        // Fetch reviews for the product
        const reviewsResponse = await fetch('/src/assets/reviews.json');
        const reviewsData = await reviewsResponse.json();
        const productReviews = reviewsData.filter((review) => review.productId === parseInt(id));
        setReviews(productReviews);

        // Fetch related products
        const related = data.filter(
          (item) => item.category === product.category && item.id !== product.id
        ).slice(0, 3);
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="mt-2">{product.description}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="border-b py-2">
                <p className="font-semibold">Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
