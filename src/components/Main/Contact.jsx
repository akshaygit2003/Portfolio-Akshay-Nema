import React from "react";
import "../../pages/Contact/ContactPage.css";
import Typical from "react-typical";

const Contact = () => {
  return (
    <section className="contacts" id="contacts">
    <h2 className="heading">
      Contact
    </h2>
    <h3 className="title" data-aos="fade-left" data-aos-delay="300">
      Get in touch:{" "}
      <Typical
        className="site-contacts"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Gmail",
          2000,
          "LinkedIn",
          2000,
          "WhatsApp",
          2000,
          "GitHub",
          2000,
        ]}
      />
    </h3>

    {/* <div
      className="visme-embed"
      class="visme_d"
      data-title="Portfolio Feedback"
      data-url="01918y93-portfolio-feedback"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="112288"
    >
      Feedback Form
      <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
    </div> */}
    <div>
      <button
        onClick={() =>
          window.open(
            "https://forms.visme.co/formsPlayer/01918y93-portfolio-feedback",
            "_blank"
          )
        }
        className="visme-embed"
      >
        Give Your Valuable Feedback ! 📝
      </button>
    </div>
    <div className="icons">
      <a
        href="mailto:akshaynema2003@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href="https://www.linkedin.com/in/akshaynema"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">LinkedIn</div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919111800310&text=Hello%20Akshay%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%21"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-whatsapp"></span>
        </div>
        <div className="text">WhatsApp</div>
      </a>

      <a
        href="https://github.com/akshaygit2003"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
    </section>
  );
};

export default React.memo(Contact);
