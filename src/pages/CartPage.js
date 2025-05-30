import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    };

    const calculateDiscount = () => {
      const discount = cart.length >= 3 ? totalPrice * 0.1 : 0;
      setDiscount(discount);
    };

    calculateTotalPrice();
    calculateDiscount();
  }, [cart, totalPrice]);

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleRemoveAll = () => {
    cart.forEach((item) => removeItem(item.id));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData('index');
    const updatedCart = [...cart];
    const [draggedItem] = updatedCart.splice(draggedIndex, 1);
    updatedCart.splice(index, 0, draggedItem);
    updateQuantity(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">${item.price}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 text-center"
                    />
                  </td>
                  <td className="border px-4 py-2">${item.price * item.quantity}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Total: ${totalPrice - discount}</h2>
            {discount > 0 && <p className="text-green-500">Discount: -${discount}</p>}
            <button
              onClick={handleRemoveAll}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
