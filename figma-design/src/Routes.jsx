import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Home1 from "./pages/Home1";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import StudentProfile from "./pages/StudentProfile";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/home1",
      element: <Home1 />,
    },
    {
      path: "/homeone",
      element: <HomeOne />,
    },
    {
      path: "/hometwo",
      element: <HomeTwo />,
    },
    {
      path: "/homethree",
      element: <HomeThree />,
    },
    {
      path: "/homefour",
      element: <HomeFour />,
    },
    {
      path: "studentprofile",
      element: <StudentProfile />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
