import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

const Service = () => (
  <section className="services" id="services">
    <h2 className="heading">
      Services
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-code"></i>
        <h3>
          Algorithms &amp; Problem Solving
        </h3>
        <p>
          Architecting optimal solutions for complex system bottlenecks, with 400+ DSA problems solved across LeetCode &amp; competitive platforms.
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          Frontend Developer &amp; Systems
        </h3>
        <p>
          Building high-performance React 18 &amp; TypeScript interfaces with normalized state management, code splitting, memoization, and sub-100ms render performance.
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-database"></i>
        <h3>
          Fullstack &amp; Backend APIs
        </h3>
        <p>
          Designing scalable Node.js/Express REST services, MongoDB database schemas with optimized indexing, memory caching layers, and JWT/OAuth security.
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="500">
        <i className="fas fa-wrench"></i>
        <h3>
          Technical Leadership &amp; Community
        </h3>
        <p>
          Leading technical initiatives, mentoring developer communities as GDG Lead, and driving agile engineering workflows across teams.
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="600">
        <i className="fas fa-user"></i>
        <h3>
          SEO &amp; Clean Architecture
        </h3>
        <p>
          Enforcing clean architecture, SEO best practices, automated testing, Sentry observability, and clean maintainable code.
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="700">
        <i className="fas fa-tachometer-alt"></i>
        <h3>
          Performance Optimisation &amp; SEO
        </h3>
        <p>
          Deep performance optimisation of web applications, focusing on API rate limiting, edge caching, bundle compression, debouncing/throttling, SEO, and Core Web Vitals.
        </p>
      </div>
    </div>
    <div className="portfolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
