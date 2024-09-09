const EditPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="min-w-80 w-1/3 bg-white p-8 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 uppercase">Edit Quiz</h2>
        {/* Add your form fields or content here */}
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="question"
              placeholder="Enter Question"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="answer"
              placeholder="Enter Answer"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <p>Distractors</p>
            <input
              type="text"
              id="distractor1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="distractor2"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="distractor3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => console.log("Save changes")}
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
        <button className="text-red-600 absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default EditPopup;
