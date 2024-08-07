import { useState } from "react";
import { Outlet } from "react-router-dom";
import ExpandedSidePanel from "../common/expanded-side-panel";
import Navbar from "../common/navbar";
import Sidebar from "../common/side-panel";

const DefaultLayout = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  return (
    <div className="bg-primary-blue h-screen p-3">
      <div className="bg-white h-full w-full rounded-xl flex">
        <Sidebar />
        <div className={`flex transition-all duration-300 ${isPanelVisible ? "w-80" : "w-0"}`}>
          <ExpandedSidePanel isVisible={isPanelVisible} setIsVisible={setIsPanelVisible} />
        </div>
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
