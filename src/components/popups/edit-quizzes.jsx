import { useState } from "react";

const EditPopup = ({ onClose, questionId, question, answer, distractors }) => {
  const [editedQuestion, setEditedQuestion] = useState(question || "");
  const [editedAnswer, setEditedAnswer] = useState(answer || "");
  const [editedDistractors, setEditedDistractors] = useState(distractors || ["", "", ""]);

  const handleSaveChanges = () => {
    const updatedQuiz = {
      questionId,
      question: editedQuestion,
      answer: editedAnswer,
      distractors: editedDistractors
    };

    console.log("Updated Quiz Data: ", updatedQuiz);

    // You can add your save logic here (e.g., making an API call)
    // onSave(updatedQuiz);

    onClose(); // Close the popup after saving
  };

  const handleDistractorChange = (index, value) => {
    const updatedDistractors = [...editedDistractors];
    updatedDistractors[index] = value;
    setEditedDistractors(updatedDistractors);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="min-w-80 w-1/3 bg-white p-8 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 uppercase">Edit Quiz</h2>
        {/* Form to edit quiz */}
        <form>
          {/* Question Input */}
          <div className="mb-4">
            <input
              type="text"
              id="question"
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
              placeholder="Enter Question"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Answer Input */}
          <div className="mb-4">
            <input
              type="text"
              id="answer"
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
              placeholder="Enter Answer"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Distractors Inputs */}
          <div className="mb-4">
            <p>Distractors</p>
            {editedDistractors.map((distractor, index) => (
              <input
                key={index}
                type="text"
                id={`distractor${index + 1}`}
                value={distractor}
                onChange={(e) => handleDistractorChange(index, e.target.value)}
                placeholder={`Enter Distractor ${index + 1}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSaveChanges}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button className="text-red-600 absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default EditPopup;
