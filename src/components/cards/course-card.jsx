import { useDispatch } from "react-redux";

const ModuleCard = ({ title, onClick }) => {
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
    </div>
  );
};

export default ModuleCard;
