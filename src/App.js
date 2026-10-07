import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

/* Lazy Loaded Pages for Code Splitting */
const Home = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/AboutPage"));
const ExperiencePage = lazy(() => import("./pages/Experience/ExperiencePage"));
const Services = lazy(() => import("./pages/Service/ServicesPage"));
const Project = lazy(() => import("./pages/Project/ProjectPage"));

const PageLoader = () => (
  <div className="loading-page">
    <div className="loader">
      <span>=(Akshay Nema)=> </span>
      <span>=(Akshay Nema)=> </span>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Google Analytics
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WG9Z0E34KW", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  // Initial render & page reload loader animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <RouterScrollTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
