import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useLocation } from "react-router-dom";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Google Analytics
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WG9Z0E34KW", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-page">
          <div className="loader">
            <span>=(Akshay Nema)=> </span>
            <span>=(Akshay Nema)=> </span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/experience" element={<ExperiencePage />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
