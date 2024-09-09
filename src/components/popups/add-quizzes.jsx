import React, { useState } from 'react';
import ManualAddQuizPopup from './mannual-add-quiz';
import EmptyPopup from './generate-quiz';

const AddQuizPopup = ({ onClose }) => {

  const [showManualAddPopup, setShowManualAddPopup] = useState(false);
  const [showEmptyPopup, setShowEmptyPopup] = useState(false);

  const handleManualAddClick = () => {
    setShowManualAddPopup(true);
    // onClose();
  };

  const handleGenerateQuizzesClick = () => {
    setShowEmptyPopup(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="min-w-80 w-1/4 bg-white p-8 rounded-lg shadow-lg relative">
        <div className='flex flex-col'>
          <button
            className="min-w-60 my-2 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={ handleGenerateQuizzesClick }
          >
            Generate Quizzes
          </button>
          <button
            className="min-w-60 my-2 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleManualAddClick}
          >
            Manually Add Quizzes
          </button>
        </div>
        <button
          className="text-red-600 absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
      </div>
      {showManualAddPopup && <ManualAddQuizPopup onClose={() => setShowManualAddPopup(false)} />}    
      {showEmptyPopup && <EmptyPopup onClose={() => setShowEmptyPopup(false)} />}
    </div>
  );
};

export default AddQuizPopup;
