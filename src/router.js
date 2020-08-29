import LandingPage from "./pages/Landing";
import Projects from "./pages/Projects";

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
];
