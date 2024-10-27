import { useEffect, useState } from "react";
import { getLectureById } from "@/service/lecture";

const SlideEditor = () => {
  const lectureId = "670e55569c5df86a86279b74";
  const [slides, setSlides] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");

  // Fetch lecture slides from the backend
  useEffect(() => {
    const fetchLecture = async () => {
      const response = await getLectureById(lectureId);
      const lectureSlides = response.data.slides;
      setSlides(lectureSlides);
      if (lectureSlides.length > 0) {
        setSelectedSlide(lectureSlides[0]);
        setEditorContent(lectureSlides[0].content);
        setOriginalContent(lectureSlides[0].content);
      }
    };
    fetchLecture();
  }, [lectureId]);

  const handleSlideSelect = (slide) => {
    setSelectedSlide(slide);
    setEditorContent(slide.content);
    setOriginalContent(slide.content);
  };

  const handleEditorChange = (e) => {
    setEditorContent(e.target.value);
  };

  const handleSave = () => {
    // Logic to save updated slide content can be added here
    setOriginalContent(editorContent);
  };

  const handleReset = () => {
    setEditorContent(originalContent);
  };

  return (
    <div className="flex h-screen">
      {/* Side Panel with Scrollable View */}
      <div className="w-1/4 p-4 bg-gray-100 border-r border-gray-300 overflow-y-auto h-full">
        <h2 className="text-xl font-semibold mb-4">Lecture Slides</h2>
        <ul className="space-y-3 pb-16">
          {" "}
          {/* Added padding-bottom for extra space */}
          {slides.map((slide) => (
            <li
              key={slide._id}
              className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg ${
                selectedSlide?._id === slide._id ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSlideSelect(slide)}
            >
              {slide.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Text Editor */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold mb-4">Editor</h2>
        <textarea
          className="w-full h-[75%] p-4 border border-gray-300 rounded-lg"
          value={editorContent}
          onChange={handleEditorChange}
          placeholder="Edit your slide content here..."
        />
        <div className="flex gap-4 mt-4">
          <button onClick={handleReset} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Reset
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideEditor;
