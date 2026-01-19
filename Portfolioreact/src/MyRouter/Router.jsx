import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
