import React from 'react';
import { motion } from 'framer-motion';

const Toast = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;
