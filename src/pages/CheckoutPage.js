import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [addressSaved, setAddressSaved] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedAddress = localStorage.getItem('address');
    if (savedAddress) {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        address: savedAddress,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userDetails.name) newErrors.name = 'Name is required';
    if (!userDetails.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!userDetails.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulate order submission
      setOrderSubmitted(true);
      setProgress(100);
    }
  };

  const handleSaveAddress = () => {
    localStorage.setItem('address', userDetails.address);
    setAddressSaved(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      {orderSubmitted ? (
        <p>Thank you for your order! Your order has been submitted successfully.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </div>
          <button
            onClick={handleSaveAddress}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Address
          </button>
          {addressSaved && <p className="text-green-500 mt-2">Address saved!</p>}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Submit Order
          </button>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
