import React from 'react';

const Button = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold text-black transition transform duration-300 ease-in-out hover:bg-indigo-700 active:bg-indigo-800 active:scale-95 active:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
