import React from 'react';

const AddModule = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="min-w-80 w-1/3 bg-white p-8 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 uppercase">Add New Module</h2>
        {/* Add your form fields or content here */}
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="module"
              placeholder='Enter Module Name'
              className="border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="code"
              placeholder='Enter Module Code'
              className="border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <textarea
              type="text"
              id="description"
              rows="5"
              placeholder='Enter a description'
              className="border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mr-2"
              onClick={() => console.log('Added Module')}
            >
              Add
            </button>
          </div>
        </form>
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

export default AddModule;
