import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "@/components/cards/all-quiz-card";
import AddQuizPopup from "@/components/popups/add-quizzes";

// Updated quiz data structure to match the format
const quizes = [
  {
    _id: "66db3a63d493144594ce0695",
    context: "In computer science and IT, individuals interact with machines and other computers to perform tasks.",
    question: "What is the primary outcome of user interaction with computer systems?",
    answer: "Performing tasks and exchanging information",
    distractors: ["Increasing software security", "Improving hardware performance", "Reducing user errors"],
    isFlagged: false,
    lectureId: "66db2d41a41cf4a7abfe84f5",
    createdAt: "2024-09-06T17:22:43.673Z",
    updatedAt: "2024-09-06T17:22:43.673Z"
  },
  {
    _id: "66db3a63d493144594ce0696",
    context: "The CPU, memory, and I/O devices are essential computer components.",
    question: "Which component directly executes instructions in a computer system?",
    answer: "CPU",
    distractors: ["RAM", "I/O devices", "Motherboard"],
    isFlagged: false,
    lectureId: "66db2d41a41cf4a7abfe84f5",
    createdAt: "2024-09-06T17:22:43.673Z",
    updatedAt: "2024-09-06T17:22:43.673Z"
  }
];

const AllQuiz = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleFlaggedQuizzesClick = () => {
    navigate("/admin-portal/flagged-quiz");
  };

  return (
    <div className="p-4 px-6">
      <div className="flex justify-between mb-8">
        <div>
          <p className="font-semibold text-lg">
            Foundations of Computing: Data Structures, Algorithms, and Operating Systems
          </p>
          <h2 className="font-semibold text-4xl">All Quizzes</h2>
        </div>
        <div className="flex items-center">
          <button
            className="bg-red-700 hover:bg-red-600 text-white uppercase font-bold py-2 px-4 rounded mx-2"
            onClick={handleFlaggedQuizzesClick}
          >
            Flagged Quizzes
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-600 text-white uppercase font-bold py-2 px-4 rounded mx-2"
            onClick={togglePopup} // Toggle popup on click
          >
            Add Quizzes
          </button>
        </div>
      </div>

      <div>
        {quizes.map((quiz) => (
          <QuizCard
            key={quiz._id}
            questionId={quiz._id}
            question={quiz.question}
            answer={quiz.answer}
            distractors={quiz.distractors} // Pass distractors array to QuizCard
          />
        ))}
      </div>

      {/* Popup for adding quizzes */}
      {showPopup && <AddQuizPopup onClose={togglePopup} />}
    </div>
  );
};

export default AllQuiz;
