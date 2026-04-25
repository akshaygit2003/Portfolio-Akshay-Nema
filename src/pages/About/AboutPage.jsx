import React from "react";
import "./AboutPage.css";
import "./education.css";
/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import { FormattedMessage } from "react-intl";

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

              {/* <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="UpdatedResume.pdf"
                className="btn-code cv buttonDownload"
              >
                <FormattedMessage id="Resume" defaultMessage="Resume" />
              </a> */}
            </div>
            <div className="about-me-info">
              <p>
                <FormattedMessage
                  id="about-info-1"
                  defaultMessage="Hello! I am a Computer Science and Engineering student passionate about building scalable and efficient software solutions. With a good foundation in Data Structures and Algorithms and over 400 questions solved across several platforms, I bring problem-solving abilities to every job I handle."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id="about-info-2"
                    defaultMessage="As a Software Developer, I specialize in developing responsive, dynamic user interfaces with HTML, CSS, JavaScript, and React. I'm now expanding my skill set by learning the MERN stack (MongoDB, Express, React, and Node.js) to improve my full-stack development talents. My front-end experience includes using current tools such as Redux for state management, Tailwind CSS for custom styling, and Bootstrap for responsive design."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id="about-info-3"
                    defaultMessage="In addition to coding, I take pride in producing clean, efficient, and maintainable code, ensuring that my projects are functional and scalable. I'm constantly willing to cooperate with teams and adapt to new technologies in order to provide unique solutions that suit customer needs. If you're searching for someone who is not only technically proficient but also enthusiastic about creating convincing user-centric solutions, I'd be delighted to connect and cooperate!"
                  />
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
                  <p className="education-year">2022 - 2026</p>
                </h2>
                <br />

                <p className="education-info">
                  <p className="score">CGPA - 8.5</p>
                  <br />
                  <FormattedMessage
                    id="education-btech"
                    defaultMessage="Currently pursuing B.Tech in Computer Science and Engineering at Madhav Institute of Technology & Science, Gwalior"
                  />
                </p>
              </div>

              {/* Class 12 */}
              <div
                className="education-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <h2 className="education-degree">
                  Class 12th <p className="education-year">2021</p>
                </h2>

                <br />
                <p className="education-info">
                  <p className="score">Percentage - 90.6%</p>
                  <br />
                  <FormattedMessage
                    id="education-12"
                    defaultMessage="Completed Higher Secondary Education with a focus on Science (Physics, Chemistry, Mathematics)."
                  />
                </p>
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
                <p className="education-info">
                  <p className="score">Percentage - 92.4%</p>
                  <br />
                  <FormattedMessage
                    id="education-10"
                    defaultMessage="Completed Secondary Education with a strong foundation in core subjects."
                  />
                </p>
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
