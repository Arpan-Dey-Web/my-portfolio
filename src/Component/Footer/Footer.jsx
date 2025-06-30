import React from "react";
import { Link } from "react-router";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import Mylogo from "../Mylogo/Mylogo";

const Footer = () => {
  return (
    <div className="background">
      <footer className="max-w-6xl mx-auto p-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <aside className="flex flex-col items-center md:items-start">
            <Link to={"/"} className="hover:opacity-80 transition-opacity">
              <Mylogo />
            </Link>
            <p className="text mt-4 text-opacity-80">
              © 2025 Arpan. All rights reserved.
            </p>
          </aside>

          {/* Social Links */}
          <nav>
            <div className="flex gap-6">
              <Link
                target="_blank"
                to={"https://github.com/Arpan-Dey-Web"}
                className="text-2xl text hover:text-cyber-primary transition-colors glow-hover p-2"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                to={"https://www.facebook.com/arpandey5000"}
                className="text-2xl text hover:text-cyber-primary transition-colors glow-hover p-2"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                target="_blank"
                to={
                  "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=arpan-dey-043881278"
                }
                className="text-2xl text hover:text-cyber-primary transition-colors glow-hover p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
