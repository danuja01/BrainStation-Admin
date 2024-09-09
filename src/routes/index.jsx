import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout, Loader } from "@/components";
import NotFound from "@/pages/404";
import AddLecture from "@/pages/add-lecture";
import AllModules from "@/pages/all-modules";
import AllQuiz from "@/pages/all-quiz";
import Dashboard from "@/pages/dashboard";
import FlaggedQuiz from "@/pages/flagged-quiz";
import Lecture from "@/pages/lecture";
import Login from "@/pages/login";
import MetricsPage from "@/pages/metrics";
import Profile from "@/pages/profiles";
import Signup from "@/pages/signup";
import Users from "@/pages/users";

// Ensure Loader is imported correctly

const coreRoutes = [
  {
    path: "/",
    title: "dashboard",
    component: Dashboard
  },
  {
    path: "/admin-portal/login",
    title: "login",
    component: Login
  },
  {
    path: "/admin-portal/signup",
    title: "signup",
    component: Signup
  },
  {
    path: "/admin-portal",
    title: "dashboard",
    component: Dashboard
  },
  {
    path: "/admin-portal/dashboard",
    title: "dashboard",
    component: Dashboard
  },
  {
    path: "admin-portal/all-quiz",
    title: "all-quiz",
    component: AllQuiz
  },
  {
    path: "admin-portal/flagged-quiz",
    title: "flagged-quiz",
    component: FlaggedQuiz
  },
  {
    path: "admin-portal/all-module",
    title: "all-module",
    component: AllModules
  },
  {
    path: "admin-portal/users",
    title: "users",
    component: Users
  },
  {
    path: "admin-portal/profile",
    title: "profile",
    component: Profile
  },
  {
    path: "admin-portal/metrics",
    title: "metrics",
    component: MetricsPage
  },
  {
    path: "admin-portal/lecture",
    title: "lecture",
    component: Lecture
  },
  {
    path: "admin-portal/add-lecture",
    title: "add-lecture",
    component: AddLecture
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
