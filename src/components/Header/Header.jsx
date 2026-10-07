import React, { useEffect } from "react";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";

const Header = () => {
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
        <Link to="home" spy={true} offset={-150} href="#home">
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="about-me" spy={true} offset={-150} href="#about-me">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="experience" spy={true} offset={-150} href="#experience">
          <FormattedMessage id="experience" defaultMessage="Experience" />
        </Link>
        <Link to="services" spy={true} offset={-150} href="#services">
          <FormattedMessage id="services" defaultMessage="Services" />
        </Link>
        <Link to="projects" spy={true} offset={-150} href="#projects">
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </Link>
        <Link to="contacts" spy={true} offset={-150} href="#contacts">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(Header);
