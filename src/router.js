import LandingPage from "./pages/Landing";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
import Experience from "./pages/Experience";

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
  {
    path: "/experience",
    component: Experience,
  },
];
