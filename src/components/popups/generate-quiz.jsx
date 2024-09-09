import React from 'react';

const EmptyPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="min-w-80 w-1/3 min-h-40 h-96 bg-white p-8 rounded-lg shadow-lg relative">
        <button
          className="text-red-600 absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default EmptyPopup;
