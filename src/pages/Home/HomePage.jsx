import React from 'react'
/* Components in Home Page */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main';
import Content from '../../components/Content/Content';
/* Particles Background */
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
/* Scroll to Top */
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Home = () => {
  return (
    <div>

      <Header />

      <ParticleBackground />

      <Content />

      <Main />

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Home;