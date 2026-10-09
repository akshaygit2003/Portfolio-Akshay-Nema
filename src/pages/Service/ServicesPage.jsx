import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
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
        </section>

        <section className="questions">
          <h2 className="heading">
            Frequently Asked Questions
          </h2>
          <div className="accordion-container">
            <Accordion
              title="How do I approach performance optimisation and rate limiting?"
              content="I implement rate-limiting patterns using algorithms like Token Bucket at the API gateway layer to prevent abuse. On the frontend, I leverage memoization, request debouncing/throttling, dynamic code splitting, and Web Vitals optimisation."
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title="How do I ensure microservices and UI components remain scalable?"
              content="I design decoupled, modular component libraries using utility-first styling and strict interface abstractions. On the backend, I apply SOLID design patterns, stateless authentication, normalized database indexes, and caching layers."
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title="What sets my engineering approach apart as a Fullstack & MERN Developer?"
              content="A strong foundation in Data Structures & Algorithms combined with real-world production experience. I don't just build features — I measure response latencies, optimize database query profiles, enforce SEO best practices, and ensure reliability under load."
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title="How do I handle agile engineering workflows and production deployments?"
              content="I work with structured Git workflows (feature → dev → staging → main), automated deployment pipelines, code reviews, and production observability using tools like Sentry for quick fault isolation."
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
