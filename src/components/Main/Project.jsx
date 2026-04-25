import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi language*/
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

/* Img */
const projectImage = require.context("../../img", true);

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="project-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-slider mySwiper"
        >
          <SwiperSlide className="contain">
            <img
              src={projectImage(`./Task Management Dashboard.jpg`)}
              alt="projects"
            />
            <div className="content">
              <h3>Task Manager</h3>
              <p>React Based Task Manager </p>
              <p className="technologies">
                React-Js
                <span> -</span> Redux
                <span> -</span> Framer Motion
                <span> -</span> Tailwind CSS
              </p>
              <a
                href="https://brandkiln.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/React-Dashboard"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* Tech Fest Website  */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./EnigmaSliderfinal.jpg`)} alt="projects" />
            <div className="content">
              <h3>Enigma : Tech-Fest Website</h3>
              <p>Mern Based Techfest Website </p>
              <p className="technologies">
                React-Js
                <span> -</span> MongoDB
                <span> -</span> Express
                <span> -</span> NodeJs
                <span> -</span> Sass
              </p>
              <a
                href="https://enigmamits.tech/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://enigmamits.tech/"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* SKILLNOTION  */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./SkillNotionSlider.jpg`)} alt="projects" />
            <div className="content">
              <h3>Skill-Notion</h3>
              <p>Ed-tech Platform</p>
              <p className="technologies">
                React-Js
                <span> -</span> MongoDB
                <span> -</span> Express
                <span> -</span> NodeJs
                <span> -</span> Tailwind CSS
              </p>
              <a
                href="https://github.com/akshaygit2003/Eduverse"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Eduverse"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* BUDGET BUDDY */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./budget.jpg`)} alt="projects" />
            <div className="content">
              <h3>Budget Buddy</h3>
              <p> Expense Tracker Tool</p>
              <p className="technologies">
                React-Js
                <span> -</span> Firebase
                <span> -</span> Tailwind CSS
              </p>
              <a
                href="https://react-budget-buddy.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/ExpenseTracker"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* INTERIOR */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./interiorfinal.png`)} alt="projects" />
            <div className="content">
              <h3>Interior Design Website</h3>
              <p>Interior Design Landing Page</p>
              <p className="technologies">
                React-Js
                <span> -</span> Tailwind CSS
                <span> -</span> Framer Motion
              </p>
              <a
                href="https://interiorbyakshay.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Interior-Design-React"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* WEATHER  */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./weather.jpg`)} alt="projects" />
            <div className="content">
              <h3>Weather Forecast</h3>
              <p>Weather Tracking Tool </p>
              <p className="technologies">
                React-Js
                <span> -</span> Open-Weather API
              </p>
              <a
                href="https://tracktemperature.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Weather-App"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="contain">
            <img src={projectImage(`./Text Wizards.jpg`)} alt="projects" />
            <div className="content">
              <h3>Text Utility Tool</h3>
              <p>React Based Text Analyser</p>
              <p className="technologies">
                React-Js
                <span> -</span> Tailwind CSS
                <span> -</span> Bootstrap
              </p>
              <a
                href="https://text-wizards.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Text-Wizard"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./Cars.jpg`)} alt="projects" />
            <div className="content">
              <h3>Classic Cars</h3>
              <p>A Car Showroom Website</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://classic-cars-love.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Classic-Cars"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./Paypal.jpg`)} alt="projects" />
            <div className="content">
              <h3>Papal Clone Website</h3>
              <p>Clone of Paypal </p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Paypal-clone/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Paypal-clone"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./business.png`)} alt="projects" />
            <div className="content">
              <h3>Business Website </h3>
              <p>Landing Page </p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Business-Website/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Business-Website"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./Food Website.jpg`)} alt="projects" />
            <div className="content">
              <h3>Food Website </h3>
              <p>Food Menu Landing Page</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Food-Website/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Food-Website"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./PasswordGenerator.jpg`)} alt="projects" />
            <div className="content">
              <h3>Password Generator</h3>
              <p>Password Generator Tool</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Password-Generator/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Password-Generator"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-code portfolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      <div className="portfolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
