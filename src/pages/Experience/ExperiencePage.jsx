import React from "react";
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Experiences from "../../components/Experience/Experiences";

const ExperiencePage = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />
      <main className="experience-page-shell">
        <Experiences view="page" />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ExperiencePage;
