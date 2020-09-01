import LandingPage from "./pages/Landing";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
// import Skills from "./pages/Skills";

export default [
  {
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/bio",
    component: Biography,
  },
  // {
  //   path: "/my-skills",
  //   component: Skills,
  // },
];
