import { useDispatch } from "react-redux";
import { switchView } from "@/store/lecturesSlice";
import LeftArrowLongIcon from "../icons/left-arrow-long-icon";

const QuizList = () => {
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(switchView("lecturer"));
  };

  return (
    <div className="p-2 flex-1 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between mb-3">
        <button className="bg-primary-gray-light max-w-fit p-2 rounded-full" onClick={handleBackClick}>
          <LeftArrowLongIcon size={3} />
        </button>
        <h3 className="font-josfin-sans text-lg uppercase opacity-50">All Quizes</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold font-inter">Comprehensive Guide to Data Structures and Algorithms</h4>
        <p className="text-sm font-light">10 total quizes</p>
      </div>
      <div className="flex justify-end mt-2 pb-4 border-b">
        <button className="uppercase text-xs text-white font- bg-horizontal-gradient py-[0.3rem] px-4 rounded-lg">
          Practice
        </button>
      </div>
    </div>
  );
};

export default QuizList;
