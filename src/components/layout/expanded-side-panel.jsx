import { useSelector } from "react-redux";
import Logo from "../common/logo";
import LectureList from "../side-panel-components/lecturer-list";
import QuizList from "../side-panel-components/quiz-list";

// Import QuizList

const ExpandedSidePanel = ({ isVisible, setIsVisible }) => {
  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  const currentView = useSelector((state) => state.lectures.currentView);

  return (
    <div
      className={`h-full border-r flex flex-col  backdrop:select-none z-[99] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0 w-80" : "-translate-x-full w-0 hidden"
      }`}
      style={{ boxShadow: "1px 70px 5.8px rgba(0, 0, 0, 0.20)" }}
    >
      <div className="border-b py-2 flex items-center justify-between px-5">
        <Logo />
        <div>
          {/* Button to toggle panel visibility */}
          <button onClick={togglePanel}>X</button>
        </div>
      </div>
      {/* Conditionally render LectureList or QuizList */}
      {currentView === "lecturer" ? <LectureList /> : <QuizList />}
    </div>
  );
};

export default ExpandedSidePanel;
