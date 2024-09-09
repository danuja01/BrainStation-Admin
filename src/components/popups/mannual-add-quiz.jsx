import React, { useState } from 'react';

const ManualAddQuizPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    distractor1: '',
    distractor2: '',
    distractor3: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Logic for handling form submission, e.g., saving the quiz data
    console.log('Submitted Quiz:', formData);
    onClose(); // Close the popup after submission
  };

  const handleAddAnother = () => {
    // Logic to handle adding another quiz without closing the popup
    console.log('Adding another Quiz:', formData);
    setFormData({
      question: '',
      answer: '',
      distractor1: '',
      distractor2: '',
      distractor3: ''
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="min-w-80 w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Quizzes</h2>
        <div className="mb-4">
          <input
            type="text"
            name="question"
            id="question"
            value={formData.question}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter question"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="answer"
            id="answer"
            value={formData.answer}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter answer"
          />
        </div>
        <div className="mb-4">
          <p>Distractors</p>
          <input
            type="text"
            name="distractor1"
            id="distractor1"
            value={formData.distractor1}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter the first distractor"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="distractor2"
            id="distractor2"
            value={formData.distractor2}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter the second distractor"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="distractor3"
            id="distractor3"
            value={formData.distractor3}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter the third distractor"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update and Close
          </button>
          <button
            onClick={handleAddAnother}
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManualAddQuizPopup;
