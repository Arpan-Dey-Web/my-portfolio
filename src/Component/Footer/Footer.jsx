import React from "react";
import { Link } from "react-router";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import Mylogo from "../Mylogo/Mylogo";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center card-bg rounded-2xl  p-10 ">
        <aside>
          <div className="flex flex-col gap-2 items-center">
            <Mylogo />
          </div>

          <p className="paragraph">© 2025 Arpan. All rights reserved.</p>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* linkedin */}
            <Link
              target="_blank"
              to={
                "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=arpan-dey-043881278"
              }
            >
              <FaLinkedinIn size={30} />
            </Link>
            {/* github */}
            <Link target="_blank" to={"https://github.com/Arpan-Dey-Web"}>
              <FaGithub size={30} />
            </Link>
            <Link target="_blank" to={"https://www.facebook.com/arpandey5000"}>
              <FaFacebook size={30} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
