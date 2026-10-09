import React, { useState, useEffect } from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

const roles = [
  "Frontend Developer",
  "Fullstack Developer",
  "MERN Developer",
  "SEO and Performance Optimisation",
];

const TypewriterRole = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="typewriter-text">
      {roles[index].substring(0, subIndex)}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const Content = () => (
  <div className="conntent">
    <ParticleHeaderBg />
    <section className="home" id="home">
      <div className="title">
        <p data-aos="fade-up" data-aos-delay="600">
          Hello
        </p>
        <br />
        <h1 data-aos="fade-up" data-aos-delay="800">
          I am Akshay Nema
        </h1>
        <br />
        <p data-aos="fade-up" data-aos-delay="1000" className="role-text">
          <TypewriterRole />
        </p>
        <br />

        <div className="mobile-highlights" data-aos="fade-up" data-aos-delay="1100">
          <div className="mobile-stats-grid">
            <div className="mobile-stat-badge">
              <span className="stat-number">400+</span>
              <span className="stat-label">DSA Solved</span>
            </div>
            <div className="mobile-stat-badge">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="mobile-stat-badge">
              <span className="stat-number">8.5</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
          <div className="mobile-tags-pills">
            <span>⚡ MERN Stack</span>
            <span>🚀 Fullstack Dev</span>
            <span>🔥 React & Redux</span>
          </div>
        </div>

        <div className="wrapper">
          <a
            className="button"
            href="https://www.linkedin.com/in/akshaynema"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href="https://github.com/akshaygit2003"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=919111800310&text=Hello%20Akshay%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <span>WhatsApp</span>
          </a>
          <a
            className="button"
            href="mailto:akshaynema2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fas fa-envelope"></i>
            </div>
            <span>Gmail</span>
          </a>
        </div>

        <div className="mobile-cta-buttons" data-aos="fade-up" data-aos-delay="1900">
          <Link to="projects" spy={true} offset={-100} className="mobile-btn primary">
            Explore Projects <i className="fas fa-arrow-right"></i>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=919111800310&text=Hello%20Akshay%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-btn secondary"
          >
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>

        <Link to="about-me" href="#about-me">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
