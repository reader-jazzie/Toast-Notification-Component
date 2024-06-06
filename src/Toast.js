import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, type, position, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  const positionStyles = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  return (
    show && (
      <div
        className={`fixed z-50 ${positionStyles[position]} transition transform ease-in-out duration-300 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div
          className={`flex items-center p-4 rounded shadow-lg text-white ${toastStyles[type]}`}
        >
          <div className="flex-1">{message}</div>
          <button
            className="ml-4 text-lg font-bold"
            onClick={() => {
              setShow(false);
              onClose();
            }}
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  position: PropTypes.oneOf(['top-left', 'top-right', 'top-center', 'bottom-center'])
    .isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
