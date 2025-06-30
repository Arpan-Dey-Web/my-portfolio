import React from "react";
// import myimage from "/src/assets/myimage.png";
import bannerImage from "/src/assets/bannerImage.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="flex gap-10 md:gap-0 flex-col-reverse  md:flex-row text-center md:text-left md:justify-around items-center p-4 mb-10">
      <div className="">
        <h1 className="text-3xl mb-5 ">Hi,There</h1>
        <div className="text-5xl ">
          I am <span className="text-indigo-600 font-bold">Arpan</span>
        </div>
        <div className="mt-2 text-2xl ">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "Mern Stack Developer",
            ]}
            cursor
            loop={false}
            cursorStyle="|"
            cursorColor="indigo"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <br />
        <div className="mt-2   text-sm  md:text-base">
          "Build. Break. Learn. Repeat" <br />
          "Think in logic, speak in design, dream in code" <br /> "A developer
          not by title, but by mindset"
        </div>

        <div className="flex justify-center  md:justify-start gap-5 mt-10">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/arpan-dey-34422a372/"}
          >
            <FaLinkedinIn className="text-[#0077B5] text-3xl" />
          </Link>
          <Link target="_blank" to={"https://github.com/Arpan-Dey-Web"}>
            <FaGithub className="text-[#181717] text-3xl" />
          </Link>

          <Link
            to="mailto:arpandey.web@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="text-[#D14836] text-3xl" />
          </Link>
        </div>
      </div>
      <div className="border border-gray-400 rounded-full bg-indigo-300">
        <img
          className="h-[300px] md:h-[350px] lg:h-[400px]  rounded-full "
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
