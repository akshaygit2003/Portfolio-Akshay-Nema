import React from "react";
import "./Footer.css";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fetch current year
  let fetchYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-info"
              defaultMessage="Page created by Nahuel61920"
            />
          </p>
          <p>&copy; {fetchYear}. All Rights Reserved.</p>
        </div>
        <div className="social-networks">
          <a
            href="https://www.linkedin.com/in/akshaynema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/akshaygit2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919111800310&text=Hello%20Akshay%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
