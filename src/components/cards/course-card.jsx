import { useDispatch } from "react-redux";

// eslint-disable-next-line no-unused-vars
const ModuleCard = ({ courseId, title, onClick }) => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  return (
    <div
      className="select-none w-[26rem] h-[25rem] p-4 flex flex-col items-center text-center rounded-xl hover:opacity-75"
      style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.24)" }}
      onClick={onClick}
    >
      {/* Title */}
      <div className="flex-grow flex items-center">
        <p className="text-[1.15rem] font-bold ">{title}</p>
      </div>

      {/* Donut Chart */}
      <div className="flex-grow justify-between w-full">
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-7 rounded-full">
          Lectures
        </button>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-7 rounded-full">
          Quizes
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;
