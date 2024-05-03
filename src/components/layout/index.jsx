import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-hidden">
      default layout
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
