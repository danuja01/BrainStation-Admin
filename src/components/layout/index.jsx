import { Outlet } from "react-router-dom";
import Sidebar from "../common/side-panel";

const DefaultLayout = () => {
  return (
    <div className="bg-primary-blue h-screen p-5">
      <div className="bg-white h-full w-full rounded-xl flex gap-2">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
