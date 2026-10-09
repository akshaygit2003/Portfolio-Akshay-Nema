import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [stateModal1, setStateModal1] = useState(false);
  const [stateModal2, setStateModal2] = useState(false);
  const [stateModal3, setStateModal3] = useState(false);
  const [stateModal4, setStateModal4] = useState(false);
  const [stateModal5, setStateModal5] = useState(false);
  const [stateModal6, setStateModal6] = useState(false);
  const [stateModal7, setStateModal7] = useState(false);

  const [stateModal8, setStateModal8] = useState(false);
  const [stateModal9, setStateModal9] = useState(false);
  const [stateModal10, setStateModal10] = useState(false);
  const [stateModal11, setStateModal11] = useState(false);
  const [stateModal12, setStateModal12] = useState(false);
  // const [stateModal13, setStateModal13] = useState(false);
  // const [stateModal14, setStateModal14] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="projects more-project" id="projects">
          <h1 className="heading" data-section="Nav" data-value="projects">
            Projects
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              websites
            </NavLink>
          </nav>
        </section>
        {/* TechfestWebsite  */}
        <section className="projects__grid ">
          <div className="projects__item">
            <button onClick={() => setStateModal11(!stateModal11)}>
              <img
                src={proyectsImg(`./EnigmaSliderfinal.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          {/* SkillNotion  */}
          <div className="projects__item">
            <button onClick={() => setStateModal12(!stateModal12)}>
              <img
                src={proyectsImg(`./SkillNotionSlider.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          {/* expense Tracker  */}
          <div className="projects__item">
            <button onClick={() => setStateModal9(!stateModal9)}>
              <img
                src={proyectsImg(`./budget.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>

          <div className="projects__item">
            <button onClick={() => setStateModal1(!stateModal1)}>
              <img
                src={proyectsImg(`./Task Management Dashboard.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>

          {/* Interior  */}
          <div className="projects__item">
            <button onClick={() => setStateModal8(!stateModal8)}>
              <img
                src={proyectsImg(`./interiorfinal.png`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          {/* weather  */}
          <div className="projects__item">
            <button onClick={() => setStateModal10(!stateModal10)}>
              <img
                src={proyectsImg(`./weather.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal2(!stateModal2)}>
              <img
                src={proyectsImg(`./Text Wizards.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal3(!stateModal3)}>
              <img
                src={proyectsImg(`./Cars.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal4(!stateModal4)}>
              <img
                alt="Business img"
                src={proyectsImg(`./business.png`)}
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal5(!stateModal5)}>
              <img
                src={proyectsImg(`./PasswordGenerator.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal6(!stateModal6)}>
              <img
                src={proyectsImg(`./Food Website.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal7(!stateModal7)}>
              <img
                src={proyectsImg(`./Paypal.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
        </section>
      </main>

      <Modal state={stateModal11} setState={setStateModal11}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./EnigmaModal.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Developed the official website for Enigma, the tech fest of MITSDU — a fully responsive, secure, and feature-rich platform crafted with modern web technologies to deliver an engaging user experience.
              </p>
              <p>
                From seamless user authentication to event access and management, every feature was engineered with a strong focus on security, scalability, and performance — efficiently handling over 4,500 live users and more than 700 registered participants.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://enigmamits.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal12} setState={setStateModal12}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./SkillNotionModal.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Skill Notion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.
              </p>
              <p>
                Skill Notion aims to provide:
•	A seamless and interactive learning experience for students, making education more accessible and engaging.
•	A platform for instructors to showcase their expertise and connect with learners across the globe.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/akshaygit2003/Eduverse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal1} setState={setStateModal1}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./task mngmt.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Built a responsive Task Management Dashboard using React and Redux for state management.
              </p>
              <p>
                The project includes robust CRUD (Create, Read, Update, Delete) operations for tasks, allowing users to manage their tasks effortlessly. The integration of Redux ensures centralized state handling, enhancing application scalability and maintainability.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://brandkiln.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal2} setState={setStateModal2}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./txt analyser tool.jpeg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Built a Text Analyzer with features to format text, including uppercase, lowercase, and clearing text.
              </p>
              <p>
                The tool is enriched with advanced functionalities such as dark/light theme toggles, text-to-speech conversion, copying text, and estimating reading time.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://text-wizards.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal3} setState={setStateModal3}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./retro car.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Created a visually captivating Classic Car Project inspired by a retro theme using HTML, CSS, and JavaScript. The project showcases vintage cars with a nostalgic design, featuring vibrant retro color palettes, bold typography, and smooth transitions.
              </p>
              <p>
                The project features smooth animations, and interactive hover effects. JavaScript enhances the experience with dynamic elements such as a carousel for browsing cars and responsive design to ensure compatibility across devices.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://classic-cars-love.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal4} setState={setStateModal4}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./businessModal1.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Developed a polished Business Agency Landing Page using HTML, CSS, and JavaScript.
              </p>
              <p>
                The page is designed with a modern aesthetic, featuring a clean layout and intuitive navigation. Smooth card animations enhance the visual appeal, creating a dynamic browsing experience that captivates users and leaves a professional impression.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Business-Website/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal5} setState={setStateModal5}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./passtool.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Built a Password Generator Tool using HTML, CSS, and JavaScript, providing users with secure, randomized passwords effortlessly.
              </p>
              <p>
                The Password Generator Tool includes features for generating passwords with lowercase, uppercase letters, numbers, symbols, and spaces. Additionally, it allows users to exclude duplicate characters, ensuring unique and strong passwords tailored to specific security needs.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Password-Generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal6} setState={setStateModal6}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./foodmenu.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Developed a Food Menu Website using HTML, CSS, and JavaScript, designed for a seamless user experience. The website showcases an interactive and visually appealing menu, enhancing user engagement through smooth navigation.
              </p>
              <p>
                Fully responsive, the website adapts seamlessly to all screen sizes, ensuring smooth functionality across devices. CSS animations and JavaScript interactivity contribute to a fluid and engaging browsing experience for users.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Food-Website/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* interior modal -8 */}

      <Modal state={stateModal8} setState={setStateModal8}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./interiormodel.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Built an Interior Design website using React, Tailwind CSS, and Framer Motion for smooth animations.
              </p>
              <p>
                Showcases responsive layouts optimized for different screen sizes, ensuring a seamless user experience and Demonstrates proficiency in Tailwind CSS for utility-first styling and Framer Motion for dynamic UI elements.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://interiorbyakshay.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* expense modal  */}

      <Modal state={stateModal9} setState={setStateModal9}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./expensemodel.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Developed an Expense Tracker app using React, Firebase, and Ant Design, featuring user authentication.
              </p>
              <p>
                Implemented functionality for importing/exporting data to CSV and visualizing expenses through interactive graphs.Built a fully responsive design for seamless use across devices.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://react-budget-buddy.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* weather model  */}

      <Modal state={stateModal10} setState={setStateModal10}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./weathermodel.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                Built with React and OpenWeather API : Provides real-time weather data, including temperature, humidity, wind speed, and a detailed 7-day forecast.
              </p>
              <p>
                Enhanced UX with GeoDB Cities Autocomplete : Implements a city search feature with autocomplete for seamless user experience. Fully Responsive Design : Ensures consistent usability across different screen sizes, showcasing proficiency in modern front-end development.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://tracktemperature.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal7} setState={setStateModal7}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./paypal mod.jpg`)} alt="img" />
            </div>
            <div className="single-modal-text">
              <p>
                Developed a PayPal Clone website using HTML, CSS, and JavaScript, featuring login and signup pages. The design is sleek and functional, mimicking PayPal’s interface with responsive layouts and smooth animations for an engaging user experience.
              </p>
              <p>
                The website adjusts seamlessly to all screen sizes, ensuring compatibility across devices. JavaScript enhances interactivity, while CSS animations provide smooth transitions, creating a polished, user-friendly experience.
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://akshaygit2003.github.io/Paypal-clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  Used technology:
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
