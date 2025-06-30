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
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
