import React from "react";
import bannerImage from "/src/assets/bannerImage.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "ArpanDey_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="background flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-24 max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text">Hi, I'm </span>
          <span className="primary glow">Arpan Dey</span>
        </h1>

        <div className="text-3xl md:text-4xl mb-8 h-14">
          <span className="primary font-bold">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "MERN Stack Developer",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              cursorColor="#4d79ff"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>

        <div className="text-lg text-opacity-80 mb-10 max-w-xl text ">
          <p className="mb-3">"Build. Break. Learn. Repeat"</p>
          <p className="mb-3 ">
            "Think In Logic, Speak In Design, Dream In Code"
          </p>
          <p>"A Developer Not By Title, But By Mindset"</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6">
          <Link
            target="_blank"
            to={
              "https://www.linkedin.com/in/arpan-dey-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            className="text-3xl text hover:text-cyber-primary transition-colors glow-hover"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            target="_blank"
            to={"https://github.com/Arpan-Dey-Web"}
            className="text-3xl text hover:text-cyber-primary transition-colors glow-hover"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            to="mailto:arpandey.web@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text hover:text-cyber-primary transition-colors glow-hover"
            aria-label="Email"
          >
            <SiGmail />
          </Link>
        </div>

        <div className="mt-10 rounded-full flex gap-6 ">
          {/* contact */}
          <button
            className="btn rounded-full btn-secondary px-8 py-2 bg-[#DE2A8A] glow glow-hover"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Now
          </button>
          <button
            onClick={handleDownload}
            className="btn rounded-full  text-white bg-gray-600 glow glow-hover rounded-6xl  px-8 py-2"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative w-fit mx-auto md:mx-0">
        {/* Permanent Glow Layers */}
        <div className="absolute inset-0 rounded-full -z-10">
          <div className="absolute inset-0 bg-cyber-primary blur-lg opacity-70 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-cyber-accent blur-md opacity-50 animate-pulse-slow animation-delay-200"></div>
          <div className="absolute inset-0 bg-white blur-sm opacity-30 animate-pulse-slow animation-delay-400"></div>
        </div>

        {/* Image Container */}
        <div
          className="
rounded-full 
    p-1
    shadow-[0_0_25px_rgba(77,121,255,0.7),0_0_50px_rgba(255,45,117,0.4)]
    bg-gradient-to-tr 
    from-cyber-primary/20 
    via-transparent 
    to-cyber-accent/20
    backdrop-blur-sm
    border-2
    border-transparent
    border-opacity-30
    hover:border-cyber-accent
    transition-all
    duration-300
  "
        >
          <img
            className="
        h-[280px] w-[280px]
        md:h-[350px] md:w-[350px]
        lg:h-[400px] lg:w-[400px]
        rounded-full 
        object-cover
        grayscale-[10%]
        hover:grayscale-0
        transition-all
        duration-500
      "
            src={bannerImage}
            alt="Arpan Dey - MERN Stack Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
