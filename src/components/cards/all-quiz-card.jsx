import { useState } from "react";
import { useLocation } from "react-router-dom";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import EditPopup from "../popups/edit-quizzes";

const AllQuizCard = ({ questionId, questionNumber, question, answer, distractors, disableBtns = false }) => {
  const location = useLocation();
  const [showEditPopup, setShowEditPopup] = useState(false);

  const isSpecialPage = location.pathname === "/admin-portal/flagged-quiz";

  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  return (
    <div
      className={`relative rounded-xl p-8 mx-1.5 my-4 ${isSpecialPage ? "bg-red-100" : "bg-white"}`}
      style={{ boxShadow: "0px 0px 4.4px rgba(0, 0, 0, 0.15)" }}
    >
      <p className="uppercase text-green-500 font-semibold absolute top-2 right-3">AI Generated</p>
      <p className="absolute top-2 left-3 text-xs font-semibold text-gray-400">{questionNumber}</p>
      <p className="font-semibold text-lg">
        Question: <span className="text-md font-normal">{question}</span>
      </p>
      <p className="font-semibold text-lg">
        Answer: <span className="text-md font-normal">{answer}</span>
      </p>
      <p className="font-semibold text-lg">Distractors: </p>
      <ul className="list-disc ml-10 font-inter">
        {distractors.map((distractor, index) => (
          <li key={index}>{distractor}</li>
        ))}
      </ul>
      {!disableBtns && (
        <>
          <div className="absolute bottom-0 right-0">
            <div className="flex">
              <EditIcon onClick={handleEditClick} />
              <DeleteIcon />
            </div>
          </div>
          {showEditPopup && (
            <EditPopup
              onClose={handleCloseEditPopup}
              questionId={questionId}
              question={question}
              answer={answer}
              distractors={distractors}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AllQuizCard;
