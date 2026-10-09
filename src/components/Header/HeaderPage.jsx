import React, { useEffect } from "react";
import "./Header.css";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

const HeaderPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".site-header");
      const navbar = document.querySelector(".navbar");
      if (header) {
        header.classList.toggle("active", window.scrollY > 20);
      }
      if (navbar) {
        navbar.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownMenu = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("active");
    }
  };

  return (
    <header className="site-header">
      <div id="menu-btn" className="fas fa-bars" onClick={dropdownMenu}></div>

      <NavLink className="logo" to="/">
        <p>
          (<span>Akshay Nema</span>)
        </p>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About me
        </NavLink>
        <NavLink to="/experience">
          Experience
        </NavLink>
        <NavLink to="/service">
          Services
        </NavLink>
        <NavLink to="/project">
          Projects
        </NavLink>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(HeaderPage);
