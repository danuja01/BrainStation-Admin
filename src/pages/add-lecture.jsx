import { useState } from "react";

function AddLecture() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.type.startsWith("application/vnd.openxmlformats-officedocument.presentation.presentation")) {
      setSelectedFile(file);
    } else {
      alert("Please upload a .pptx file.");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type.startsWith("application/vnd.openxmlformats-officedocument.presentation.presentation")) {
      setSelectedFile(file);
    } else {
      alert("Please upload a .pptx file.");
    }
  };

  const handleGenerateLecture = () => {
    // Handle the logic to generate the lecture from the selected file
    console.log("Generating lecture from:", selectedFile);
  };

  return (
    <div className="p-4 px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Add Lectures</h2>
      </div>
      <div className="flex justify-center">
        <div className="border rounded-lg w-7/12 py-12 px-6" style={{ boxShadow: "0px 0px 4.4px rgba(0, 0, 0, 0.3)" }}>
          <div>
            <h2 className="text-3xl font-bold text-center">Upload Your Lecture Slides</h2>
          </div>
          <div
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col justify-center bg-stone-300 mt-10 mx-24 min-h-80 rounded-lg border py-10 px-6 divide-y divide-black"
            style={{ boxShadow: "0px 0px 4.4px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="drop-zone">
              {selectedFile ? (
                <p>Selected file: {selectedFile.name}</p>
              ) : (
                <p className="text-center">Drag and drop your .pptx file</p>
              )}
            </div>

            <div className="flex justify-center mt-20 pt-4">
              {/* Hidden default input field */}
              <input type="file" accept=".pptx" id="file-input" onChange={handleFileChange} className="hidden" />

              {/* Custom button as label for the file input */}
              <label
                htmlFor="file-input"
                className="cursor-pointer bg-blue-900 hover:bg-blue-700 text-white text-xs font-medium py-2 px-4 rounded-lg"
              >
                Browse from device
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleGenerateLecture}
              disabled={!selectedFile}
              className="text-white text-lg bg-blue-900 hover:bg-blue-700 cursor-pointer rounded-lg py-2 px-6"
            >
              Generate Lecture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLecture;
