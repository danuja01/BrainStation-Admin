import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { switchLecture } from "@/store/lecturesSlice";
import ChapterCard from "../cards/chapter-card";
import LastActivityCard from "../cards/last-activity-card";
import Logo from "./logo";

const ExpandedSidePanel = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();
  const lectures = useSelector((state) => state.lectures.lectures);

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`h-full border-r flex flex-col gap-4 backdrop:select-none z-[99] transition-transform duration-300 ease-in-out ${
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
      <div className="p-2 flex-1 overflow-hidden">
        {/* Heading */}
        <p className="text-md font-inter mb-4 ml-2">ALL LECTURES/ CHAPTERS</p>
        {/* Last Activity Card */}
        <LastActivityCard />
        {/* All Lectures with Scrollbars */}
        <div className="flex-1 mt-3 overflow-hidden">
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax={"calc(100vh - 280px)"}
            thumbMinSize={30}
            universal={true}
            className="rounded-lg"
          >
            <div className="px-2">
              {lectures.map((lecture) => (
                <ChapterCard
                  key={lecture.id}
                  id={lecture.id}
                  title={lecture.title}
                  onClick={() => dispatch(switchLecture(lecture.id))} // Dispatch switchLecture on click
                />
              ))}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSidePanel;
