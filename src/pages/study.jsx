import { useSelector } from "react-redux";
import ContentCard from "@/components/cards/content-card";
import BottomBar from "@/components/layout/bottom-bar";

const Study = () => {
  const currentSlide = useSelector((state) => {
    const currentLecture = state.lectures.lectures.find((lecture) => lecture.id === state.lectures.currentLectureId);
    return (
      currentLecture.slides.find((slide) => slide.id === state.lectures.currentSlideId) || currentLecture.slides[0]
    );
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow bg-primary-paper p-16 flex items-center justify-center ">
        <ContentCard title={currentSlide.title} content={currentSlide.content} />
      </div>
      {/* Bottom bar */}
      <div className="px-4 py-1">
        <BottomBar />
      </div>
    </div>
  );
};

export default Study;
