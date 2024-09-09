import { useState } from "react";
import { useLocation } from "react-router-dom";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import EditPopup from "../popups/edit-quizzes";

const AllQuizCard = ({ questionId, question, answer, distractor1, distractor2, distractor3 }) => {
  const location = useLocation();
  const [showEditPopup, setShowEditPopup] = useState(false);

  // Determine if the path is '/admin-portal/flagged-quiz'
  const isSpecialPage = location.pathname === "/admin-portal/flagged-quiz";

  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  return (
    <div
      className={`relative rounded-xl p-4 mx-1.5 my-4 ${isSpecialPage ? "bg-red-100" : "bg-white"}`}
      style={{ boxShadow: "0px 0px 4.4px rgba(0, 0, 0, 0.15)" }}
    >
      <p className="uppercase text-green-500 font-semibold absolute top-2 right-2">AI Generated</p>
      <p className="font-semibold text-lg">
        {questionId}. Question: {question}
      </p>
      <p className="font-semibold text-lg">Answer: {answer}</p>
      <p className="font-semibold text-lg">Distractors: </p>
      <ul className="list-disc ml-10 font-semibold text-lg">
        <li>{distractor1}</li>
        <li>{distractor2}</li>
        <li>{distractor3}</li>
      </ul>
      <div className="flex justify-end">
        <EditIcon onClick={handleEditClick} />
        <DeleteIcon />
      </div>
      {showEditPopup && (
        <EditPopup
          onClose={handleCloseEditPopup}
          questionId={questionId}
          question={question}
          answer={answer}
          distractor1={distractor1}
          distractor2={distractor2}
          distractor3={distractor3}
        />
      )}
    </div>
  );
};

export default AllQuizCard;
