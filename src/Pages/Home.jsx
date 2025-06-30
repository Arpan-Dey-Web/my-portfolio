import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Banner/Banner";
import AboutMe from "../Component/AboutMe/AboutMe";
import Skills from "../Component/Skills/Skills";
import Projects from "../Component/Projects/Projects";
import Contact from "../Component/Contact/Contact";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl w-11/12">
      <section id="home" className="border-b-2 border-indigo-500">
        <Navbar />
        <Banner />
      </section>
      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section className="border-t-2 border-indigo-600">

      <Footer />
      </section>
    </div>
  );
};

export default Home;
