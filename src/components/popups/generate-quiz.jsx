import Scrollbars from "react-custom-scrollbars-2";
import QuizCard from "@/components/cards/all-quiz-card";

const QuizeGenerationPopup = ({ onClose }) => {
  // const { lectureId } = useParams();

  // Example quiz data
  const quizzes = [
    {
      _id: "1",
      question: "What is the capital of France?",
      answer: "Paris",
      distractors: ["London", "Berlin", "Madrid"]
    },
    {
      _id: "2",
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
      distractors: ["Mars", "Earth", "Venus"]
    },
    {
      _id: "3",
      question: "What element does 'O' represent on the periodic table?",
      answer: "Oxygen",
      distractors: ["Gold", "Osmium", "Oganesson"]
    },
    {
      _id: "4",
      question: "Which ocean is the largest?",
      answer: "Pacific Ocean",
      distractors: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div className="relative overflow-y-hidden w-[85rem] h-[42rem] bg-white p-8 pt-10 rounded-lg shadow-lg ">
        <button className="text-red-600 absolute top-2 right-3 hover:text-gray-700" onClick={onClose}>
          X
        </button>
        <p
          className="text-xl font-bold mb-4
          absolute top-2 left-3
        "
        >
          Generated Quetions
        </p>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMax={"calc(100vh - 180px)"}
          thumbMinSize={30}
          universal={true}
          className="rounded-lg"
        >
          {quizzes.map((quiz, index) => (
            <QuizCard
              key={quiz._id}
              questionId={quiz._id}
              questionNumber={index + 1}
              question={quiz.question}
              answer={quiz.answer}
              distractors={quiz.distractors}
              disableBtns
            />
          ))}
        </Scrollbars>

        <div className="flex items-center justify-end border-t ">
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Save and Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizeGenerationPopup;
