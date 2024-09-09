import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QuizCard from "@/components/cards/all-quiz-card";
import AddQuizPopup from "@/components/popups/add-quizzes";
import QuizeGenerationPopup from "@/components/popups/generate-quiz";
import ManualAddQuizPopup from "@/components/popups/mannual-add-quiz";
// Import the generate quiz popup
import useFetchData from "@/hooks/fetch-data";
import { getQuestions } from "@/service/question";
import { setLectureQuestions } from "@/store/questionSlice";

const AllQuiz = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage AddQuizPopup visibility
  const [showManualAddPopup, setShowManualAddPopup] = useState(false); // State to manage ManualAddQuizPopup visibility
  const [showEmptyPopup, setShowEmptyPopup] = useState(false); // State to manage EmptyPopup visibility
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const dispatch = useDispatch();

  // Get questions from Redux state
  const { questions } = useSelector((state) => state.questions);

  // Fetch questions filtered by lectureId
  const questionsData = useFetchData(getQuestions, { "filter[lectureId]": lectureId });

  useEffect(() => {
    if (questionsData) {
      dispatch(
        setLectureQuestions({
          lectureId,
          questions: questionsData.data.docs
        })
      );
    }
  }, [questionsData, dispatch, lectureId]);

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
          <h2 className="font-semibold text-4xl">All Questions</h2>
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
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={"calc(100vh - 220px)"}
        thumbMinSize={30}
        universal={true}
        className="rounded-lg"
      >
        {questions.length > 0 ? (
          questions.map((quiz, index) => (
            <QuizCard
              key={quiz._id}
              questionId={quiz._id}
              questionNumber={index + 1}
              question={quiz.question}
              answer={quiz.answer}
              distractors={quiz.distractors}
            />
          ))
        ) : (
          <div>No questions available for this lecture.</div>
        )}
      </Scrollbars>

      {/* Popup for adding quizzes */}
      {showPopup && (
        <AddQuizPopup
          onClose={togglePopup}
          onManualAddQuiz={() => {
            setShowManualAddPopup(true);
            setShowPopup(false); // Close the main popup
          }}
          onGenerateQuiz={() => {
            setShowEmptyPopup(true);
            setShowPopup(false); // Close the main popup
          }}
        />
      )}

      {/* Popup for manually adding a quiz */}
      {showManualAddPopup && <ManualAddQuizPopup onClose={() => setShowManualAddPopup(false)} />}

      {/* Popup for generating quizzes */}
      {showEmptyPopup && <QuizeGenerationPopup onClose={() => setShowEmptyPopup(false)} />}
    </div>
  );
};

export default AllQuiz;
