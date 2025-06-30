import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Mylogo from "../Mylogo/Mylogo";

const Navbar = () => {
  const scrollProps = {
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: "active",
    spy: true,
  };

  return (
    <nav className="background fixed top-0 left-0 right-0 z-50 border-b border-cyber-primary shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button and logo */}
          <div className="flex items-center">
            {/* Mobile dropdown */}
            <div className="lg:hidden mr-4">
              <button className="text focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <ScrollLink to="home" {...scrollProps} className="flex-shrink-0">
              <Mylogo className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </ScrollLink>
          </div>

          {/* Desktop navigation with animated borders */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <ScrollLink
                    key={item}
                    to={item}
                    {...scrollProps}
                    className="text uppercase text-sm font-medium px-3 py-2 relative group cursor-pointer transition-all duration-300"
                  >
                    {item}
                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-primary transition-all duration-300 group-hover:w-full"></span>
                    {/* Active underline (more prominent) */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-accent transition-all duration-500 active:w-full"></span>
                  </ScrollLink>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="ml-4">
            <button className="btn btn-accent glow-hover px-6 py-2 rounded-md font-medium transition-all hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animated borders */}
      <div className="lg:hidden background border-t border-cyber-primary">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              {...scrollProps}
              className="text block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 border-l-4 border-transparent hover:border-cyber-primary hover:pl-4 active:border-cyber-accent"
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
