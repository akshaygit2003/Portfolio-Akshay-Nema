import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { experiences } from "../../data/experience";
import { ButtomGet } from "../ButtomGet/ButtomGet";
import "./experience.css";

const PREVIEW_COUNT = 2;

const Experiences = ({ view = "page" }) => {
  const isHome = view === "home";
  // const isAbout = view === "about";
  const items = isHome ? experiences.slice(0, PREVIEW_COUNT) : experiences;

  if (isHome) {
    return (
      <section className="experience-section-home" id="experience">
        <h2 className="heading">
          <FormattedMessage id="experience" defaultMessage="Experience" />
        </h2>
        <p className="experience-intro">
          <FormattedMessage
            id="experience-intro"
            defaultMessage="Roles and projects that shaped how I build software, lead initiatives, and collaborate with teams."
          />
        </p>
        <div className="experience-preview-grid">
          {items.map((exp, index) => (
            <article
              key={exp.id}
              className="experience-preview-card"
              data-aos="fade-up"
              data-aos-delay={150 * (index + 1)}
            >
              <p className="experience-preview-type">{exp.type}</p>
              <h3 className="experience-preview-role">{exp.role}</h3>
              <p className="experience-preview-org">{exp.organization}</p>
              <p className="experience-preview-period">{exp.period}</p>
              <p className="experience-preview-summary">{exp.summary}</p>
            </article>
          ))}
        </div>
        <div className="experience-cta-wrap">
          <div className="more-info-btn">
            <Link to="/experience">
              <ButtomGet
                messageId="experience-cta-btn"
                defaultMessage="Read More"
              />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // if (isAbout) {
  //   return (
  //     <div className="experience-about-block" id="experience-about">
  //       <h2 className="heading">
  //         <FormattedMessage id="experience" defaultMessage="Experience" />
  //       </h2>
  //       <p className="experience-intro">
  //         <FormattedMessage
  //           id="experience-about-blurb"
  //           defaultMessage="A snapshot of my professional and community work. Open the Experience page for the full timeline."
  //         />
  //       </p>
  //       <div className="experience-about-container">
  //         {experiences.map((exp, index) => (
  //           <article
  //             key={exp.id}
  //             className="experience-about-card"
  //             data-aos="flip-left"
  //             data-aos-delay={200 + index * 80}
  //           >
  //             <span className="experience-about-type">{exp.type}</span>
  //             <h2>{exp.role}</h2>
  //             <p className="experience-about-meta">
  //               {exp.organization} · {exp.period}
  //             </p>
  //             <p className="experience-about-meta">{exp.location}</p>
  //             <ul>
  //               {exp.highlights.map((line) => (
  //                 <li key={line}>{line}</li>
  //               ))}
  //             </ul>
  //             {exp.link ? (
  //               <a
  //                 className="experience-related-link"
  //                 href={exp.link}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <FormattedMessage
  //                   id="experience-link"
  //                   defaultMessage="View related link"
  //                 />
  //               </a>
  //             ) : null}
  //           </article>
  //         ))}
  //       </div>
  //       <div className="experience-cta-wrap">
  //         <div className="more-info-btn">
  //           <Link to="/experience">
  //             <ButtomGet
  //               messageId="experience-cta-btn"
  //               defaultMessage="Read More"
  //             />
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="experience-page-main" id="experience-timeline">
      <h2 className="heading">
        <FormattedMessage id="experience" defaultMessage="Experience" />
      </h2>
      <p className="experience-intro">
        <FormattedMessage
          id="experience-page-intro"
          defaultMessage="A snapshot of my journey building scalable, real-world applications and solving practical engineering challenges. I focus on writing efficient, maintainable code while continuously improving performance and user experience."
        />
      </p>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-timeline-item">
            <span className="experience-timeline-dot" aria-hidden />
            <article
              className="experience-timeline-card"
              data-aos="fade-left"
              data-aos-delay={100 * index}
            >
              <div className="experience-timeline-head">
                <div className="experience-timeline-title-group">
                  <h3>{exp.role}</h3>
                  <p className="experience-timeline-org">{exp.organization}</p>
                </div>
                {exp.link ? (
                  <a
                    className="experience-related-link"
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open related link for ${exp.role} at ${exp.organization}`}
                    title="Open related link"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                ) : null}
              </div>
              <div className="experience-timeline-meta">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
                <span>{exp.type}</span>
              </div>
              <p className="experience-timeline-summary">{exp.summary}</p>
              <ul className="experience-timeline-highlights">
                {exp.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {exp.tech?.length ? (
                <ul className="experience-tech" aria-label="Technologies">
                  {exp.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Experiences);
