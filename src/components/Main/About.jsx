import React from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/Akshay_Nema_Resume.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="about-me" id="about-me">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h3>
        <h4>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Akshay Nema and I am a Software Developer."
          />
        </h4>
        <p>
          <FormattedMessage
            id="my-description"
            defaultMessage="I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team."
          />
        </p>
        <ul>
          {/* <li>
            <p>
              <span>
                <FormattedMessage id="years" defaultMessage="Age:" />
              </span>
              21
            </p>
          </li> */}
          <li>
            <p>
              <span>Hobbies: </span>
              Table Tennis, Badminton, Swimming and Programming.
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> akshaynema2003@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From:" />
              </span>
              Jabalpur, Madhya Pradesh
            </p>
          </li>
        </ul>
        <div className="more-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="Akshay Nema Resume.pdf" // By This name pdf will be downloaded
            className="btn-code buttonDownload"
          >
            <FormattedMessage id="Resume" defaultMessage="Resume" />
          </a>
          <div className="more-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>skills</h3>
        <h4>Front-End</h4>
        <div className="skill">
          <div>
            <img
              alt="HTML"
              className="icons-skills"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
            <h5>HTML</h5>
          </div>
          <div>
            <img
              alt="CSS"
              className="icons-skills"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
            <h5>CSS</h5>
          </div>
          <div>
            <img
              alt="Js"
              className="icons-skills"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img
              alt="React"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <h5>React</h5>
          </div>

          <div>
            <img
              alt="Redux"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            />
            <h5>Redux</h5>
          </div>

          <div>
            <img
              alt="Tailwind Css"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <h5>Tailwind CSS</h5>
          </div>

          <div>
            <img
              alt="Bootstrap"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <h5>Bootstrap</h5>
          </div>
        </div>
        <h4>Back-End</h4>
        <div className="skill">
          <div>
            <img
              alt="mongodb"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            />
            <h5>Mongo DB</h5>
          </div>

          <div>
            <img
              alt="express"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <h5>Express</h5>
          </div>

          <div>
            <img
              alt="Nodejs"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <h5>NodeJs</h5>
          </div>

          <div>
            <img
              alt="Postman"
              className="icons-skills"
              src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              title="Postman"
            />
            <h5>Postman</h5>
          </div>
        </div>
        <h4>
          {/* Languages & Tools */}
          <FormattedMessage id="tools" defaultMessage="Languages & Tools" />
        </h4>
        <div className="skill">
          <div>
            <img
              alt="C++"
              className="icons-skills"
              src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              title="C++"
            />
            <h5>C++</h5>
          </div>
          <div>
            <img
              alt="Visual Studio Code"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              title="Visual Studio Code"
            />
            <h5>VS Code</h5>
          </div>
          <div>
            <img
              alt="Github"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              title="Github"
            />
            <h5>Github</h5>
          </div>
          <div>
            <img
              alt="git"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              title="git"
            />
            <h5>Git</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
