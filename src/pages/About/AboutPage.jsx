import React from "react";
import "./AboutPage.css";
import "./education.css";
/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Img */
import imgabout from "../../img/home.jpg";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="about-me-section" id="about-me">
          <div className="about-me-container">
            <div className="about-me-img-container">
              <img src={imgabout} alt="" className="about-me-img" />
            </div>
            <div className="about-me-info">
              <p>
                Hello! I am a Software Engineer &amp; Fullstack Developer passionate about architecting scalable, performant MERN applications and responsive web interfaces. Grounded in core Computer Science fundamentals and 400+ algorithmic problem solutions, I bring problem-solving rigor to every project.
              </p>

              <div className="hide parrafo-active">
                <p>
                  In my software development roles (including Omniful Technologies and EduCerns), I specialize in building multi-tenant dashboards, modular React/Redux micro-frontends, and Node.js REST APIs. My focus includes performance optimisation, state normalization, client/server rate limiting, SEO, and production releases.
                </p>

                <p>
                  I thrive in engineering environments that prioritize high availability, sub-100ms response latencies, and clean maintainable code. Beyond writing code, I actively contribute to technical leadership as a GDG Lead, conduct peer code reviews, and leverage observability tools like Sentry to debug production issues.
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-code"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h1 className="heading">Education</h1>
            <div className="education-container">
              {/* College */}
              <div
                className="education-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <h2 className="education-degree">
                  (B.Tech) - Bachelor of Technology
                  <span className="education-year">2022 - 2026</span>
                </h2>
                <br />

                <div className="education-info">
                  <p className="score">CGPA - 8.5</p>
                  <br />
                  Currently pursuing B.Tech in Computer Science and Engineering at Madhav Institute of Technology &amp; Science, Gwalior
                </div>
              </div>

              {/* Class 12 */}
              <div
                className="education-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <h2 className="education-degree">
                  Class 12th <span className="education-year">2021</span>
                </h2>

                <br />
                <div className="education-info">
                  <p className="score">Percentage - 90.6%</p>
                  <br />
                  Completed Higher Secondary Education with a focus on Science (Physics, Chemistry, Mathematics).
                </div>
              </div>

              {/* Class 10 */}
              <div
                className="education-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <h2 className="education-degree">Class 10th </h2>
                <p className="education-year">2019</p>
                <br />
                <div className="education-info">
                  <p className="score">Percentage - 92.4%</p>
                  <br />
                  Completed Secondary Education with a strong foundation in core subjects.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default About;
