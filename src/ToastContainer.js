import React, { useState } from 'react';
import Toast from './Toast.js';

 const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type, position) => {
    setToasts([...toasts, { id: Date.now(), message, type, position }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <div className="fixed z-50 flex flex-col space-y-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            position={toast.position}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      <div className="p-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-64"
          onClick={() => addToast('Success Toast Notification!', 'success', 'top-right')}
        >
          Show Success Toast
        </button><br/><br/>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-64"
          onClick={() => addToast('Info Toast Notification!', 'info', 'top-left')}
        >
           Show Info Toast
        </button><br/><br/>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-64"
          onClick={() => addToast('Success Toast Notification!', 'warning', 'top-center')}
        >
          Show Warning Toast
        </button><br/><br/>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-64"
          onClick={() => addToast('Error Toast Notification!', 'error', 'bottom-center')}
        >
          Show Error Toast
        </button><br/><br/>
        </div>
    </div>
  );
}
export default ToastContainer;