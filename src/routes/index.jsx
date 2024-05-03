import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout } from "@/components";
import { Main } from "@/pages";
// Assuming Logging is imported here
import NotFound from "@/pages/404";

// const coreRoutes = [
//   {
//     path: "/path",
//     title: "title",
//     component: "component"
//   }
// ];

const CustomRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      {/* Routes with DefaultLayout */}
      <Route element={<DefaultLayout />}>
        <Route index element={<Main />} />
        {/* {coreRoutes.map((route, index) => {
          const { path, component: Component } = route;

          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })} */}
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
