import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout, Loader } from "@/components";
import { Main, Study } from "@/pages";
import NotFound from "@/pages/404";

// Ensure Loader is imported correctly

const coreRoutes = [
  {
    path: "/",
    title: "Home",
    component: Main
  },
  {
    path: "/study",
    title: "study",
    component: Study
  }
];

const CustomRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      {/* Routes with DefaultLayout */}
      <Route element={<DefaultLayout />}>
        {coreRoutes.map((route, index) => {
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
        })}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
