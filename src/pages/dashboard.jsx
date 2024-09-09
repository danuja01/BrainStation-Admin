import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "@/components/cards/course-card";
import AddModule from "@/components/popups/add-module";

const courses = [
  { courseId: 1, title: "Foundations of Computing: Data Structures, Algorithms, and Operating Systems" }
];

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const goToAllModules = () => {
    navigate("/admin-portal/all-module");
  };

  return (
    <div className="p-4 px-6">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-bold text-2xl">All Modules</h1>
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goToAllModules}
        >
          All Modules
        </button>
      </div>
      {/* Module cards */}
      <div className=" flex gap-4 mt-8">
        {courses.map((course) => (
          <CourseCard key={course.courseId} courseId={course.courseId} title={course.title} />
        ))}
        <div
          className="bg-blue-100 select-none w-[26rem] h-[25rem] flex flex-col items-center justify-center text-center rounded-xl"
          style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.24)" }}
        >
          <button className="text-blue-900 text-6xl font-bold" onClick={togglePopup}>
            +
          </button>
          <p className="text-blue-900 font-bold">Add New Module</p>
        </div>
      </div>
      {showPopup && <AddModule onClose={togglePopup} />}
    </div>
  );
};

export default Dashboard;
