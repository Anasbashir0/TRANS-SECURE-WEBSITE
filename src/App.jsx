import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetail />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;