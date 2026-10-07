import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi language*/
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
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
              <h3>Task Management Engine</h3>
              <p>Enterprise Workflow & State Manager</p>
              <p className="technologies">
                React 18
                <span> -</span> Redux Toolkit
                <span> -</span> Rate Limiting
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
              <h3>Enigma : High-Concurrency Tech Portal</h3>
              <p>4,500+ User Event Platform with Performance Optimisation</p>
              <p className="technologies">
                React-Js
                <span> -</span> NodeJs
                <span> -</span> MERN
                <span> -</span> MongoDB
                <span> -</span> Express
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
              <h3>SkillNotion (EduVerse)</h3>
              <p>Full-Stack EdTech Platform & RBAC System</p>
              <p className="technologies">
                React-Js
                <span> -</span> NodeJs
                <span> -</span> Express
                <span> -</span> MongoDB
                <span> -</span> Redux
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
              <h3>Budget Buddy Analytics</h3>
              <p>Real-Time Financial Tracker & Data Pipeline</p>
              <p className="technologies">
                React 18
                <span> -</span> Firebase
                <span> -</span> Ant Design
                <span> -</span> Charts
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
              <h3>Interior Design Architecture</h3>
              <p>High-Performance Layout & Motion Showcase</p>
              <p className="technologies">
                React-Js
                <span> -</span> Tailwind CSS
                <span> -</span> Framer Motion
                <span> -</span> Web Vitals
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
              <h3>Weather Analytics Dashboard</h3>
              <p>Debounced Query Engine & LRU Caching</p>
              <p className="technologies">
                React 18
                <span> -</span> OpenWeather API
                <span> -</span> GeoDB Autocomplete
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
              <h3>Text Processing Engine</h3>
              <p>Zero-Allocation String Parser Suite</p>
              <p className="technologies">
                React-Js
                <span> -</span> Web Speech API
                <span> -</span> Dark Theme
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
              <h3>Classic Automotive Gallery</h3>
              <p>Hardware-Accelerated Retro Showcase</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS3
                <span> -</span> JavaScript
                <span> -</span> Keyframes
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
              <h3>FinTech Portal Prototype</h3>
              <p>Secure Auth & Input Validation Interface</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS3
                <span> -</span> JavaScript
                <span> -</span> Form Sanitization
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
              <h3>Corporate Agency Platform</h3>
              <p>High-Converting Web Architecture</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS Grid
                <span> -</span> JavaScript
                <span> -</span> Web Vitals
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
              <h3>Culinary Menu Application</h3>
              <p>Interactive Async Menu Interface</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS3
                <span> -</span> JavaScript
                <span> -</span> Lazy Loading
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
              <h3>Cryptographic Key Generator</h3>
              <p>Web Crypto API Non-Deterministic Generator</p>
              <p className="technologies">
                Web Crypto API
                <span> -</span> HTML5
                <span> -</span> CSS3
                <span> -</span> Entropy Scoring
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
