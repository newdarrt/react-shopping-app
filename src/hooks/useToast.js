import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Toast from '../components/Toast';

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prevToasts) => prevToasts.slice(1));
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [toasts]);

  const addToast = (message) => {
    setToasts((prevToasts) => [...prevToasts, { id: Date.now(), message }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const ToastContainer = () => {
    return createPortal(
      <div className="fixed top-4 right-4 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} onClose={() => removeToast(toast.id)} />
        ))}
      </div>,
      document.body
    );
  };

  return { addToast, ToastContainer };
};

export default useToast;
