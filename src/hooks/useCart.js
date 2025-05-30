import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { cart, addItem, removeItem, updateQuantity } = useContext(CartContext);

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
  };
};

export default useCart;
