import { useNavigate } from "react-router-dom";
import LectureCard from "@/components/cards/lecture-card";

// Sample data, ensure you have correct data structure
const lectures = [
  { lectureId: 1, lecture: "Lecture 01", description: "description" },
  { lectureId: 2, lecture: "Lecture 02", description: "description" },
  { lectureId: 3, lecture: "Lecture 03", description: "description" },
  { lectureId: 4, lecture: "Lecture 04", description: "description" },
  { lectureId: 5, lecture: "Lecture 05", description: "description" }
];

const Lecture = () => {
  const navigate = useNavigate();

  const navToAddLecture = () => {
    navigate("/admin-portal/add-lecture");
  };

  return (
    <div className="p-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-bold text-2xl">All Lectures</h1>
        <button
          className="bg-blue-900 hover:bg-blue-700 uppercase text-white font-bold py-2 px-4 rounded"
          onClick={navToAddLecture}
        >
          Add Lectures
        </button>
      </div>
      {/* Lecture Cards */}
      <div className="mt-8 mx-20">
        {lectures.map((lecture) => (
          <LectureCard key={lecture.userId} lecture={lecture.lecture} description={lecture.description} />
        ))}
      </div>
    </div>
  );
};

export default Lecture;
