import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "@/components/cards/all-quiz-card";
import AddQuizPopup from "@/components/popups/add-quizzes";

const quizes = [
    { questionId: 1, question: "What is a stack and give an example?", answer: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor1: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor2: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor3: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language."},
    { questionId: 2, question: "What is a stack and give an example?", answer: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor1: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor2: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor3: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language."},
    { questionId: 3, question: "What is a stack and give an example?", answer: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor1: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor2: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.", distractor3: "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language."}
];

const AllQuiz = () => {
    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
    const navigate = useNavigate();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleFlaggedQuizzesClick = () => {
        navigate('/admin-portal/flagged-quiz');
    };

    return (
        <div className="p-4 px-6">
            <div className="flex justify-between mb-8">
                <div>
                    <p className="font-semibold text-lg">Foundations of Computing: Data Structures, Algorithms, and Operating Systems</p>
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
                        key={quiz.questionId}
                        questionId={quiz.questionId}
                        question={quiz.question}
                        answer={quiz.answer}
                        distractor1={quiz.distractor1}
                        distractor2={quiz.distractor2}
                        distractor3={quiz.distractor3}
                    />
                ))}
            </div>

            {/* Step 3: Use AddQuizPopup Component */}
            {showPopup && <AddQuizPopup onClose={togglePopup} />}
        </div>
    );
};

export default AllQuiz;
