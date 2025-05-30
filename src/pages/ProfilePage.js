import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setUserDetails(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(userDetails);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {isEditing ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
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
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">
              <strong>Name:</strong> {userDetails.name}
            </p>
            <p className="mb-4">
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p className="mb-4">
              <strong>Address:</strong> {userDetails.address}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
