import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QuizCard from "@/components/cards/all-quiz-card";
import useFetchData from "@/hooks/fetch-data";
import { getLectureById } from "@/service/lecture";
import { addQuestionBulk, generateQuestion } from "@/service/question";
import { clearGeneratedQuestions, setGeneratedQuestions } from "@/store/generateQuestionSlice";
import { setLectureQuestions } from "@/store/questionSlice";
import { Loader } from "..";

const QuizeGenerationPopup = ({ onClose }) => {
  const { lectureId } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const generatedQuestions = useSelector((state) => state.generateQuestion.generatedQuestions[lectureId]);

  const existingQuestions = useSelector((state) =>
    state.questions.lectureId === lectureId ? state.questions.questions : []
  );

  const lecture = useFetchData(getLectureById, lectureId);

  const handleGenerateQuestions = async () => {
    if (lecture?.data && !generatedQuestions) {
      try {
        setLoading(true);
        const response = await generateQuestion(lecture.data);

        dispatch(setGeneratedQuestions({ lectureId, questions: response.data }));

        setLoading(false);
      } catch (error) {
        console.error("Error generating questions:", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleGenerateAgain = () => {
    setLoading(true);
    dispatch(clearGeneratedQuestions({ lectureId }));
  };

  const handleSaveAndClose = async () => {
    setSaving(true);

    const questionsWithLectureId = generatedQuestions.map((question) => ({
      ...question,
      lectureId
    }));

    try {
      const response = await addQuestionBulk(questionsWithLectureId);
      console.log("Questions saved successfully", response);

      const updatedQuestions = [
        ...existingQuestions,
        ...questionsWithLectureId.filter(
          (newQuestion) => !existingQuestions.some((oldQuestion) => oldQuestion._id === newQuestion._id)
        )
      ];

      dispatch(
        setLectureQuestions({
          lectureId,
          lectureName: lecture?.data?.name || "", // Set the lecture name if available
          questions: updatedQuestions
        })
      );

      dispatch(clearGeneratedQuestions({ lectureId }));
      onClose();
    } catch (error) {
      console.error("Error saving questions:", error);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (lecture?.data && loading) {
      handleGenerateQuestions();
    }
  }, [lecture, loading]);

  const quizzes = generatedQuestions || [];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="relative overflow-y-hidden w-[85rem] h-[42rem] bg-white p-8 pt-10 rounded-lg shadow-lg z-[1000] ">
        {loading ? (
          <div className="flex flex-col justify-center items-center">
            <Loader />
            <p className="text-center text-lg font-bold mt-4">
              Generating Questions<span className="dot-1">.</span>
              <span className="dot-2">.</span>
              <span className="dot-3">.</span>
            </p>
          </div>
        ) : (
          <>
            <button className="text-red-600 absolute top-2 right-3 hover:text-gray-700" onClick={onClose}>
              X
            </button>
            <p className="text-xl font-bold mb-4 absolute top-2 left-3">Generated Questions</p>
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              autoHeight
              autoHeightMax={"calc(100vh - 200px)"}
              thumbMinSize={30}
              universal={true}
              className="rounded-lg"
            >
              {quizzes.length > 0 ? (
                quizzes.map((quiz, index) => (
                  <QuizCard
                    key={index + 1}
                    questionNumber={index + 1}
                    question={quiz.question}
                    answer={quiz.answer}
                    distractors={quiz.distractors}
                    disableBtns
                  />
                ))
              ) : (
                <p className="text-center text-lg font-bold">No quizzes generated.</p>
              )}
            </Scrollbars>

            <div className="flex items-center justify-end border-t mt-4 pt-2 gap-3">
              <button
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleGenerateAgain}
              >
                Generate Again
              </button>
              <button
                className="bg-blue-800 w-[9rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSaveAndClose}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save & Close"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizeGenerationPopup;
