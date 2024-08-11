import { useSelector } from "react-redux";
import Logo from "../common/logo";
import LectureList from "../side-panel-components/lecturer-list";
import QuizList from "../side-panel-components/quiz-list";

// eslint-disable-next-line no-unused-vars
const ExpandedSidePanel = ({ isVisible, setIsVisible }) => {
  const currentView = useSelector((state) => state.lectures.currentView);

  return (
    <div
      className={`h-full border-r flex flex-col bg-white backdrop:select-none z-[99] transition-all duration-300 ease-in-out ${
        isVisible ? "translate-x-0 w-80 opacity-100" : "-translate-x-1 w-0 opacity-0"
      }`}
      style={{ boxShadow: "1px 70px 5.8px rgba(0, 0, 0, 0.20)" }}
    >
      <div className="border-b py-2 flex items-center justify-between px-5">
        <Logo />
      </div>
      {/* Conditionally render LectureList or QuizList */}
      {currentView === "lecturer" ? <LectureList /> : <QuizList />}
    </div>
  );
};

export default ExpandedSidePanel;
