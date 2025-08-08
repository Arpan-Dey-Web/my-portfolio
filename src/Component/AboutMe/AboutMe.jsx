import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className=" px-6 py-16  rounded-lg shadow-lg primary  "
      aria-label="About Me Section"
    >
      <header className="text-center mb-10">
        <h2 className="text-4xl font-extrabold  mb-2">About Me</h2>
        <p className="text-lg  italic accent">
          Code as art, purpose as direction.
        </p>
      </header>

      <article>
        <p className=" leading-relaxed text-lg tracking-wide  text text-justify ">
          I am Arpan, a dedicated developer who embraces every new technology
          with calm confidence. My approach is simple: learn relentlessly, code
          thoughtfully, and deliver excellence. I see every challenge as a
          stepping stone for growth, welcoming change and complexity as
          catalysts for improvement. Fueled by curiosity and persistence, I
          continuously refine my skills to adapt and innovate. I believe every
          project is an opportunity to connect people and innovate through
          technology. My goal is to build seamless digital experiences that are
          as efficient as they are elegant.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
