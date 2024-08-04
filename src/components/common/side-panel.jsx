import BookIcon from "../side-panel-icons/book";
import HomeIcon from "../side-panel-icons/home";
import QuizzIcon from "../side-panel-icons/quize";

const Sidebar = () => {
  return (
    <div className="w-[73px] h-full border-r-2 pt-20 p-2 flex-col gap-4 select-none">
      <HomeIcon />
      <div className="border-b-2 my-2" />
      <BookIcon />
      <div className="border-b-2 my-2" />
      <QuizzIcon />
    </div>
  );
};

export default Sidebar;
